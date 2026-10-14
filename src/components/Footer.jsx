import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { INSTAGRAM, waLink } from "../data/site";

export const Footer = () => (
  <footer data-testid="site-footer" className="relative border-t border-blue-500/15 bg-[#050914] overflow-hidden">
    <div className="max-w-[1400px] mx-auto px-5 md:px-10 pt-20 pb-10">
      <motion.p
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="font-display font-black uppercase leading-[0.8] tracking-tighter text-[22vw] lg:text-[17rem] chrome select-none"
      >
        Líder
      </motion.p>
      <div className="mt-10 flex flex-col md:flex-row gap-6 md:items-center justify-between border-t border-white/10 pt-8 text-sm text-slate-400">
        <p>© {new Date().getFullYear()} Líder Auto Center · QNN 26 Conjunto D Lote 56</p>
        <div className="flex gap-6">
          <a href={waLink()} target="_blank" rel="noreferrer" data-testid="footer-whatsapp" className="hover:text-white transition-colors">WhatsApp</a>
          <a href={`https://instagram.com/${INSTAGRAM}`} target="_blank" rel="noreferrer" data-testid="footer-instagram" className="hover:text-white transition-colors">Instagram</a>
          <a href="#topo" data-testid="footer-topo" className="hover:text-white transition-colors">Voltar ao topo ↑</a>
        </div>
      </div>
    </div>
  </footer>
);

export const WhatsFloat = () => (
  <motion.a
    href={waLink()}
    target="_blank"
    rel="noreferrer"
    data-testid="whatsapp-float-btn"
    aria-label="WhatsApp"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 2, type: "spring" }}
    whileHover={{ scale: 1.1 }}
    className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] pulse-dot"
  >
    <MessageCircle className="text-white" />
  </motion.a>
);
