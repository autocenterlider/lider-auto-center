import { MapPin, Clock, Instagram, MessageCircle } from "lucide-react";
import { ADDRESS, CITY, INSTAGRAM, WHATS_LABEL, waLink } from "../data/site";
import { Eyebrow, Reveal } from "./Reveal";

const MAP_Q = encodeURIComponent("QNN 26 Conjunto D Lote 56, Ceilândia, Brasília - DF");

const Row = ({ icon: Icon, title, children, testid }) => (
  <div data-testid={testid} className="flex gap-5 py-6 border-b border-white/10">
    <Icon className="text-red-500 shrink-0 mt-1" size={22} />
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">{title}</p>
      <div className="mt-1 text-lg text-white">{children}</div>
    </div>
  </div>
);

export const Contato = () => (
  <section id="contato" data-testid="contato-section" className="max-w-[1400px] mx-auto px-5 md:px-10 py-24 md:py-36 grid lg:grid-cols-12 gap-12">
    <Reveal className="lg:col-span-5">
      <Eyebrow>Onde estamos</Eyebrow>
      <h2 className="mt-5 font-display font-black uppercase text-5xl sm:text-6xl leading-[0.9] tracking-tight">Venha nos <span className="chrome">visitar.</span></h2>
      <div className="mt-10">
        <Row icon={MapPin} title="Endereço" testid="contato-endereco">{ADDRESS}<span className="block text-slate-300 text-base">{CITY}</span></Row>
        <Row icon={Clock} title="Horário" testid="contato-horario">Seg a Sex · 08h às 18h<span className="block">Sábado · 08h às 12h</span></Row>
        <Row icon={MessageCircle} title="WhatsApp" testid="contato-whatsapp"><a href={waLink()} target="_blank" rel="noreferrer" className="hover:text-[#25D366] transition-colors">{WHATS_LABEL}</a></Row>
        <Row icon={Instagram} title="Instagram" testid="contato-instagram"><a href={`https://instagram.com/${INSTAGRAM}`} target="_blank" rel="noreferrer" className="hover:text-red-400 transition-colors">@{INSTAGRAM}</a></Row>
      </div>
    </Reveal>
    <Reveal className="lg:col-span-7" delay={0.15}>
      <div className="relative h-[380px] md:h-full min-h-[380px] clip-notch overflow-hidden border border-blue-500/20">
        <iframe
          data-testid="contato-mapa"
          title="Mapa Líder Auto Center"
          src={`https://www.google.com/maps?q=${MAP_Q}&output=embed`}
          className="absolute inset-0 w-full h-full grayscale invert-[0.9] hue-rotate-180 contrast-[0.9]"
          loading="lazy"
        />
        <a href={`https://www.google.com/maps/search/?api=1&query=${MAP_Q}`} target="_blank" rel="noreferrer" data-testid="abrir-mapa-btn" className="absolute bottom-5 left-5 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors">
          Como chegar
        </a>
      </div>
    </Reveal>
  </section>
);
