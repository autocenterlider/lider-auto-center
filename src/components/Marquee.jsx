const ITEMS = ["Motores", "Troca de óleo", "Câmbio manual", "Câmbio automático", "Pneus", "Alinhamento", "Balanceamento", "Ar condicionado", "Revisões gerais"];

export const Marquee = () => {
  const row = [...ITEMS, ...ITEMS];
  return (
    <section data-testid="marquee" className="relative py-8 md:py-10 border-y border-blue-500/15 bg-[#0a1024] overflow-hidden -rotate-1 scale-[1.02]">
      <div className="flex w-max marquee-track">
        {row.map((t, i) => (
          <span key={i} className="flex items-center font-display font-black uppercase text-4xl md:text-7xl tracking-tight px-6 md:px-10 whitespace-nowrap">
            <span className={i % 2 ? "outline-text" : "chrome"}>{t}</span>
            <span className="ml-12 md:ml-20 inline-block w-3 h-3 md:w-4 md:h-4 rotate-45 bg-red-500" />
          </span>
        ))}
      </div>
    </section>
  );
};
