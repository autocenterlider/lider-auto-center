export const WHATS = "5561991409147";
export const WHATS_LABEL = "(61) 99140-9147";
export const ADDRESS = "QNN 26 Conjunto D Lote 56";
export const CITY = "Ceilândia · Brasília - DF";
export const INSTAGRAM = "autocenterlider2022";

export const waLink = (msg = "Olá! Vim pelo site da Líder Auto Center e gostaria de um orçamento.") =>
  `https://wa.me/${WHATS}?text=${encodeURIComponent(msg)}`;

export const SERVICES = [
  { id: "motores", n: "01", title: "Motores", kicker: "Especialidade da casa", text: "Diagnóstico, retífica, cabeçote, correia dentada e injeção eletrônica com precisão de especialista.", img: "/img/motor.jpg", span: "md:col-span-7 md:row-span-2" },
  { id: "cambio", n: "02", title: "Câmbio manual e automático", kicker: "Transmissão", text: "Embreagem, troca de fluido e revisão completa do câmbio, manual ou automático.", img: "/img/cambio.jpg", span: "md:col-span-5" },
  { id: "oleo", n: "03", title: "Troca de óleo", kicker: "Lubrificação", text: "Óleo certo para o seu motor, com troca de filtros de óleo, ar, combustível e cabine.", img: "/img/oleo.jpg", span: "md:col-span-5" },
  { id: "pneus", n: "04", title: "Pneus, alinhamento e balanceamento", kicker: "Rodagem", text: "Troca de pneus, alinhamento e balanceamento para um carro estável e seguro.", img: "/img/pneus.jpg", span: "md:col-span-4" },
  { id: "ar", n: "05", title: "Ar condicionado", kicker: "Climatização", text: "Higienização, recarga de gás e manutenção do sistema de ar condicionado.", img: "/img/ar.jpg", span: "md:col-span-4" },
  { id: "revisao", n: "06", title: "Revisões gerais", kicker: "Check-up completo", text: "Revisão preventiva de freios, suspensão, arrefecimento e tudo que mantém seu carro rodando.", img: "/img/revisao.jpg", span: "md:col-span-4" },
];

export const SERVICE_OPTIONS = [
  "Mecânica de motores",
  "Troca de óleo",
  "Câmbio manual",
  "Câmbio automático",
  "Troca de pneus",
  "Alinhamento e balanceamento",
  "Ar condicionado",
  "Revisão geral",
  "Outro",
];
