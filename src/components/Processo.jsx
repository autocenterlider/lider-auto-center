import { Eyebrow, Reveal } from "./Reveal";

const STEPS = [
  { n: "01", t: "Agende", d: "Pelo formulário ou WhatsApp, escolha o serviço e o melhor dia." },
  { n: "02", t: "Diagnóstico", d: "Avaliamos o veículo e explicamos tudo com clareza." },
  { n: "03", t: "Aprovação", d: "Você aprova o orçamento antes de qualquer serviço começar." },
  { n: "04", t: "Retirada", d: "Carro pronto, revisado e entregue com as orientações necessárias." },
];

export const Processo = () => (
  <section data-testid="processo-section" className="max-w-[1400px] mx-auto px-5 md:px-10 py-24 md:py-36">
    <Reveal>
      <Eyebrow>Como funciona</Eyebrow>
      <h2 className="mt-5 font-display font-black uppercase text-5xl sm:text-6xl lg:text-7xl leading-[0.9] tracking-tight max-w-3xl">
        Simples, do jeito <span className="outline-text">que deve ser.</span>
      </h2>
    </Reveal>
    <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
      {STEPS.map((s, i) => (
        <Reveal key={s.n} delay={i * 0.12}>
          <div data-testid={`step-${s.n}`} className="group border-t border-white/15 pt-6 relative">
            <span className="absolute -top-px left-0 h-px w-0 bg-red-500 group-hover:w-full transition-[width] duration-700" />
            <span className="font-display font-black text-7xl md:text-8xl outline-text leading-none group-hover:text-red-500 transition-colors duration-500">{s.n}</span>
            <h3 className="mt-4 font-display text-3xl font-bold uppercase">{s.t}</h3>
            <p className="mt-2 text-sm md:text-base text-slate-300 leading-relaxed">{s.d}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);
