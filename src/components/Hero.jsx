import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, MessageCircle } from "lucide-react";
import { MaskLine } from "./Reveal";
import { HeroBadge } from "./HeroBadge";
import { waLink } from "../data/site";

const FACTS = [
  ["Seg–Sex", "08h às 18h"],
  ["Sábado", "08h às 12h"],
  ["Local", "QNN 26 · Ceilândia"],
];

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);

  return (
    <section id="topo" ref={ref} data-testid="hero-section" className="relative min-h-[100svh] overflow-hidden grain">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-[10%] h-[120%]">
        <img src="/img/hero.jpg" alt="" className="w-full h-full object-cover opacity-45" />
      </motion.div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,transparent_0%,#050914_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050914]/60 via-transparent to-[#050914]" />
      <div className="absolute inset-0 hex-bg opacity-40" />

      <div className="relative max-w-[1400px] mx-auto px-5 md:px-10 pt-32 md:pt-36 pb-16 grid lg:grid-cols-12 gap-10 items-center min-h-[100svh]">
        <motion.div style={{ y: textY }} className="lg:col-span-7 order-2 lg:order-1">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300 mb-6 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-red-500" /> Oficina mecânica · Ceilândia - DF
          </motion.p>
          <h1 className="font-display font-black uppercase leading-[0.86] tracking-tight text-[15vw] sm:text-[12vw] lg:text-[8.6rem]" data-testid="hero-title">
            <MaskLine delay={0.25} className="chrome">Seu carro</MaskLine>
            <MaskLine delay={0.4} className="outline-text">em mãos</MaskLine>
            <MaskLine delay={0.55}>de <span className="text-red-500">Líder.</span></MaskLine>
          </h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }} className="mt-8 max-w-xl text-base md:text-lg text-slate-300 leading-relaxed">
            Mecânica especializada em motores, câmbio manual e automático, troca de óleo, pneus, alinhamento, balanceamento, ar condicionado e revisões gerais. Tudo para você ter a melhor experiência na oficina.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05, duration: 0.8 }} className="mt-10 flex flex-wrap gap-4">
            <a href="#agendar" data-testid="hero-agendar-btn" className="group inline-flex items-center gap-3 bg-white text-[#050914] font-bold uppercase tracking-wider text-sm px-7 py-4 rounded-full hover:bg-red-500 hover:text-white transition-colors duration-300">
              Agendar serviço <ArrowDownRight size={18} className="transition-transform duration-300 group-hover:rotate-[-45deg]" />
            </a>
            <a href={waLink()} target="_blank" rel="noreferrer" data-testid="hero-whatsapp-btn" className="inline-flex items-center gap-3 border border-white/25 hover:border-[#25D366] hover:text-[#25D366] font-semibold text-sm px-7 py-4 rounded-full transition-colors duration-300">
              <MessageCircle size={18} /> Orçamento no WhatsApp
            </a>
          </motion.div>
          <motion.dl initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3, duration: 1 }} className="mt-14 grid grid-cols-3 gap-4 max-w-xl border-t border-white/10 pt-6">
            {FACTS.map(([k, v]) => (
              <div key={k}>
                <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">{k}</dt>
                <dd className="font-display text-lg sm:text-2xl font-bold uppercase mt-1">{v}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
          <HeroBadge />
        </div>
      </div>
    </section>
  );
};
