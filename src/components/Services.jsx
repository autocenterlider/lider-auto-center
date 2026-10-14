import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "../data/site";
import { Eyebrow, Reveal } from "./Reveal";

const Card = ({ s, i }) => (
  <motion.a
    href="#agendar"
    data-testid={`service-card-${s.id}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.9, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
    className={`group relative overflow-hidden rounded-sm border border-blue-500/15 hover:border-red-500/50 bg-[#0a1024] min-h-[300px] md:min-h-0 transition-colors duration-500 ${s.span}`}
  >
    <img src={s.img} alt={s.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-55 grayscale-[35%] scale-105 group-hover:scale-110 group-hover:opacity-70 group-hover:grayscale-0 transition-[transform,opacity,filter] duration-[1200ms] ease-out" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-[#050914]/70 to-[#050914]/10" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(239,68,68,0.25),transparent_45%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    <div className="relative h-full flex flex-col justify-between p-6 md:p-8">
      <div className="flex items-start justify-between">
        <span className="font-mono text-xs tracking-[0.2em] text-cyan-300 uppercase">{s.n} / {s.kicker}</span>
        <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-red-500 group-hover:border-red-500 transition-colors duration-300">
          <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:rotate-45" />
        </span>
      </div>
      <div>
        <h3 className={`font-display font-extrabold uppercase leading-[0.95] tracking-tight ${s.id === "motores" ? "text-4xl md:text-6xl" : "text-2xl md:text-3xl"}`}>{s.title}</h3>
        <p className="mt-3 text-sm md:text-base text-slate-300 max-w-md leading-relaxed">{s.text}</p>
      </div>
    </div>
  </motion.a>
);

export const Services = () => (
  <section id="servicos" data-testid="services-section" className="relative max-w-[1400px] mx-auto px-5 md:px-10 py-24 md:py-36">
    <div className="grid md:grid-cols-12 gap-8 mb-14 md:mb-20 items-end">
      <Reveal className="md:col-span-7">
        <Eyebrow>Nossos serviços</Eyebrow>
        <h2 className="mt-5 font-display font-black uppercase text-5xl sm:text-6xl lg:text-7xl leading-[0.9] tracking-tight">
          Do motor ao <span className="text-red-500">pneu</span>,<br /> a gente resolve.
        </h2>
      </Reveal>
      <Reveal className="md:col-span-5" delay={0.15}>
        <p className="text-base md:text-lg text-slate-300 leading-relaxed">
          Uma oficina completa para cuidar do seu carro com atenção aos detalhes, peças de qualidade e atendimento transparente do começo ao fim.
        </p>
      </Reveal>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-12 md:auto-rows-[300px] gap-4">
      {SERVICES.map((s, i) => <Card key={s.id} s={s} i={i} />)}
    </div>
  </section>
);
