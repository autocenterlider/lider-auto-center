import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Loader2, Send, MessageCircle } from "lucide-react";
import { SERVICE_OPTIONS, waLink, WHATS_LABEL } from "../data/site";
import { Eyebrow, Reveal } from "./Reveal";

const API = process.env.REACT_APP_BACKEND_URL ? `${process.env.REACT_APP_BACKEND_URL}/api` : null;
const EMPTY = { nome: "", telefone: "", veiculo: "", servico: "", data_preferida: "", mensagem: "" };
const field = "w-full bg-transparent border-b border-white/20 focus:border-red-500 outline-none py-3 text-base text-white placeholder:text-slate-500 transition-colors";
const label = "font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400";

const buildMsg = (f) =>
  `Olá! Gostaria de agendar um serviço na Líder Auto Center.\nNome: ${f.nome}\nTelefone: ${f.telefone}\nVeículo: ${f.veiculo || "-"}\nServiço: ${f.servico}\nData preferida: ${f.data_preferida || "-"}\n${f.mensagem ? "Obs: " + f.mensagem : ""}`;

export const Agendamento = () => {
  const [f, setF] = useState(EMPTY);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(null);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!f.nome || !f.telefone || !f.servico) return toast.error("Preencha nome, telefone e serviço.");
    setLoading(true);
    try {
      if (!API) throw new Error("no api");
      await axios.post(`${API}/agendamentos`, f);
      setSent(f);
      setF(EMPTY);
      toast.success("Pedido de agendamento enviado! Entraremos em contato.");
    } catch {
      toast.error("Não conseguimos enviar agora. Fale com a gente pelo WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="agendar" data-testid="agendamento-section" className="relative bg-[#0a1024] border-y border-blue-500/15 overflow-hidden">
      <div className="absolute -left-40 top-20 w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 w-[400px] h-[400px] rounded-full bg-red-600/15 blur-[120px]" />
      <div className="relative max-w-[1400px] mx-auto px-5 md:px-10 py-24 md:py-36 grid lg:grid-cols-12 gap-14">
        <Reveal className="lg:col-span-5">
          <Eyebrow>Agendamento</Eyebrow>
          <h2 className="mt-5 font-display font-black uppercase text-5xl sm:text-6xl lg:text-7xl leading-[0.9] tracking-tight">
            Reserve seu <span className="text-red-500">horário.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-slate-300 leading-relaxed max-w-md">
            Preencha o formulário e nossa equipe confirma o horário com você. Prefere falar direto? Chame no WhatsApp.
          </p>
          <a href={waLink()} target="_blank" rel="noreferrer" data-testid="agendar-whatsapp-link" className="mt-10 inline-flex items-center gap-4 group">
            <span className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center pulse-dot"><MessageCircle className="text-white" /></span>
            <span>
              <span className={label}>WhatsApp</span>
              <span className="block font-display text-3xl font-bold group-hover:text-[#25D366] transition-colors">{WHATS_LABEL}</span>
            </span>
          </a>
        </Reveal>
        <Reveal className="lg:col-span-7" delay={0.15}>
          {sent ? (
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} data-testid="agendamento-success" className="border border-blue-500/25 bg-[#050914]/70 p-8 md:p-12 clip-notch">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">Pedido recebido</p>
              <h3 className="mt-4 font-display text-4xl md:text-5xl font-black uppercase">Valeu, {sent.nome.split(" ")[0]}!</h3>
              <p className="mt-4 text-slate-300">Recebemos seu pedido para <strong className="text-white">{sent.servico}</strong>. Para agilizar, envie também pelo WhatsApp:</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={waLink(buildMsg(sent))} target="_blank" rel="noreferrer" data-testid="success-whatsapp-btn" className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-full hover:brightness-110 transition-[filter]"><MessageCircle size={18} /> Enviar no WhatsApp</a>
                <button onClick={() => setSent(null)} data-testid="new-agendamento-btn" className="px-6 py-3 rounded-full border border-white/20 hover:border-white transition-colors">Novo agendamento</button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={submit} data-testid="agendamento-form" className="border border-blue-500/25 bg-[#050914]/70 backdrop-blur-xl p-7 md:p-12 clip-notch grid sm:grid-cols-2 gap-x-8 gap-y-7">
              <label className="block"><span className={label}>Nome *</span><input data-testid="input-nome" className={field} value={f.nome} onChange={set("nome")} placeholder="Seu nome" /></label>
              <label className="block"><span className={label}>Telefone / WhatsApp *</span><input data-testid="input-telefone" className={field} value={f.telefone} onChange={set("telefone")} placeholder="(61) 9 0000-0000" inputMode="tel" /></label>
              <label className="block"><span className={label}>Veículo</span><input data-testid="input-veiculo" className={field} value={f.veiculo} onChange={set("veiculo")} placeholder="Modelo e ano" /></label>
              <label className="block"><span className={label}>Serviço *</span>
                <select data-testid="select-servico" className={`${field} [&>option]:bg-[#0a1024]`} value={f.servico} onChange={set("servico")}>
                  <option value="">Selecione</option>
                  {SERVICE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </label>
              <label className="block sm:col-span-2"><span className={label}>Data preferida</span><input type="date" data-testid="input-data" className={`${field} [color-scheme:dark]`} value={f.data_preferida} onChange={set("data_preferida")} /></label>
              <label className="block sm:col-span-2"><span className={label}>Conte o que está acontecendo</span><textarea data-testid="input-mensagem" rows={3} className={`${field} resize-none`} value={f.mensagem} onChange={set("mensagem")} placeholder="Barulho, luz no painel, revisão..." /></label>
              <button type="submit" disabled={loading} data-testid="agendamento-submit-btn" className="sm:col-span-2 group inline-flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 disabled:opacity-60 text-white font-bold uppercase tracking-wider text-sm px-8 py-5 rounded-full transition-colors">
                {loading ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />}
                Solicitar agendamento
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
};
