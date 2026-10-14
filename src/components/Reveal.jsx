import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 40, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export const MaskLine = ({ children, delay = 0, className = "" }) => (
  <span className="block overflow-hidden pb-[0.06em]">
    <motion.span
      className={`block ${className}`}
      initial={{ y: "105%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.span>
  </span>
);

export const Eyebrow = ({ children, className = "" }) => (
  <p className={`font-mono text-xs uppercase tracking-[0.25em] text-cyan-300 flex items-center gap-3 ${className}`}>
    <span className="h-px w-8 bg-gradient-to-r from-blue-500 to-red-500" />
    {children}
  </p>
);
