import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, Wrench, MessagesSquare, Clock } from "lucide-react";
import { Eyebrow, Reveal } from "./Reveal";

const ITEMS = [
  { icon: Wrench, t: "Mecânica especializada", d: "Experiência em motores e câmbios manuais e automáticos, do diagnóstico ao reparo." },
  { icon: MessagesSquare, t: "Atendimento transparente", d: "Explicamos o que o carro precisa antes de fazer qualquer serviço. Sem surpresas." },
  { icon: ShieldCheck, t: "Cuidado em cada detalhe", d: "Seu veículo tratado com o mesmo cuidado que teríamos com o nosso." },
  { icon: Clock, t: "Horário que cabe na rotina", d: "Segunda a sexta das 8h às 18h e sábado das 8h às 12h." },
];

export const Diferenciais = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const rot = useTransform(scrollYProgress, [0, 1], [-30, 60]);

  return (
    <section id="diferenciais" ref={ref} data-testid="diferenciais-section" className="relative bg-[#0a1024] border-y border-blue-500/15 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-24 md:py-36 grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] overflow-hidden clip-notch">
            <motion.img style={{ y: imgY }} src="/img/roda.jpg" alt="Roda e pneu" className="absolute inset-0 w-full h-[125%] -top-[12%] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#050914]/80 via-transparent to-blue-600/20" />
          </div>
          <motion.div style={{ rotate: rot }} className="absolute -bottom-10 -right-4 md:-right-10 w-32 h-32 md:w-40 md:h-40">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <defs><path id="c" d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0" /></defs>
              <circle cx="100" cy="100" r="98" fill="#ef4444" />
              <text fill="#fff" fontSize="17" fontFamily="JetBrains Mono" letterSpacing="5">
                <textPath href="#c">LÍDER AUTO CENTER • QNN 26 • DF • </textPath>
              </text>
              <path d="M70 108 C85 88 120 86 135 106 C118 100 90 100 70 108Z" fill="#fff" />
            </svg>
          </motion.div>
        </div>
        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow>Por que a Líder</Eyebrow>
            <h2 className="mt-5 font-display font-black uppercase text-[2.6rem] sm:text-6xl lg:text-7xl leading-[0.9] tracking-tight">
              A melhor experiência <span className="chrome">dentro da oficina.</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 gap-px bg-blue-500/15 border border-blue-500/15">
            {ITEMS.map(({ icon: Icon, t, d }, i) => (
              <Reveal key={t} delay={i * 0.08} className="bg-[#0a1024] p-7 group hover:bg-[#0f1735] transition-colors duration-500 h-full">
                <div data-testid={`diferencial-${i}`}>
                  <Icon className="text-red-500 transition-transform duration-500 group-hover:-translate-y-1" size={28} />
                  <h3 className="mt-5 font-display text-2xl font-bold uppercase tracking-tight">{t}</h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
