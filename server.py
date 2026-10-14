from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from typing import Annotated, Optional
from datetime import datetime, timezone
from bson import ObjectId
from pydantic import BaseModel, Field, ConfigDict, BeforeValidator

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

client = AsyncIOMotorClient(os.environ['MONGO_URL'])
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

PyObjectId = Annotated[str, BeforeValidator(lambda v: str(v) if isinstance(v, ObjectId) else v)]


class BaseDocument(BaseModel):
    model_config = ConfigDict(populate_by_name=True)
    id: Optional[PyObjectId] = Field(default=None, alias="_id")

    def to_mongo(self) -> dict:
        return self.model_dump(by_alias=True, exclude={"id"})

    @classmethod
    def from_mongo(cls, doc: dict):
        return cls.model_validate(doc)


class AgendamentoIn(BaseModel):
    nome: str = Field(min_length=2, max_length=120)
    telefone: str = Field(min_length=8, max_length=30)
    veiculo: str = Field(default="", max_length=120)
    servico: str = Field(min_length=2, max_length=80)
    data_preferida: str = Field(default="", max_length=20)
    mensagem: str = Field(default="", max_length=1000)


class Agendamento(BaseDocument, AgendamentoIn):
    criado_em: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


@api_router.get("/")
async def root():
    return {"message": "Líder Auto Center API"}


@api_router.post("/agendamentos", response_model=Agendamento)
async def criar_agendamento(payload: AgendamentoIn):
    ag = Agendamento(**payload.model_dump())
    res = await db.agendamentos.insert_one(ag.to_mongo())
    doc = await db.agendamentos.find_one({"_id": res.inserted_id})
    return Agendamento.from_mongo(doc)


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
