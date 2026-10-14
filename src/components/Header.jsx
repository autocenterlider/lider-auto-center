import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { waLink } from "../data/site";

const LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Por que a Líder" },
  { href: "#agendar", label: "Agendar" },
  { href: "#contato", label: "Contato" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,border-color] duration-500 border-b ${scrolled ? "bg-[#050914]/85 backdrop-blur-xl border-blue-500/15" : "bg-transparent border-transparent"}`}
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 h-20 flex items-center justify-between">
        <a href="#topo" data-testid="header-logo-link" className="flex items-center gap-3 group">
          <img src="/img/logo.png" alt="Líder Auto Center" className="h-12 w-12 rounded-full transition-transform duration-500 group-hover:rotate-[-12deg]" />
          <span className="font-display font-extrabold uppercase text-xl tracking-wide leading-none">
            Líder<span className="block text-[10px] font-mono tracking-[0.3em] text-slate-300">Auto Center</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-9">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} data-testid={`nav-${l.href.slice(1)}`} className="relative text-sm text-slate-300 hover:text-white transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-red-500 after:transition-[width] after:duration-300 hover:after:w-full">
              {l.label}
            </a>
          ))}
          <a href={waLink()} target="_blank" rel="noreferrer" data-testid="header-whatsapp-btn" className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors">
            <MessageCircle size={16} /> WhatsApp
          </a>
        </nav>
        <button data-testid="mobile-menu-toggle" onClick={() => setOpen(!open)} className="md:hidden p-2 text-white" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            data-testid="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-[#050914]/95 backdrop-blur-xl border-b border-blue-500/20 px-5 pb-6 flex flex-col gap-1"
          >
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} data-testid={`mobile-nav-${l.href.slice(1)}`} className="font-display uppercase text-3xl font-bold py-2 border-b border-white/5">
                {l.label}
              </a>
            ))}
            <a href={waLink()} target="_blank" rel="noreferrer" data-testid="mobile-whatsapp-btn" className="mt-4 text-center bg-red-500 text-white font-semibold py-3 rounded-full">
              Chamar no WhatsApp
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
