import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export const HeroBadge = () => {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [14, -14]), { stiffness: 120, damping: 14 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), { stiffness: 120, damping: 14 });

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const reset = () => { mx.set(0); my.set(0); };

  return (
    <div onMouseMove={onMove} onMouseLeave={reset} className="relative [perspective:1000px]" data-testid="hero-badge">
      <motion.div
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        initial={{ scale: 0.6, opacity: 0, rotate: -25 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px]"
      >
        <div className="absolute -inset-6 rounded-full ring-spin" style={{ background: "conic-gradient(from 0deg, #2563eb, transparent 30%, #ef4444 50%, transparent 80%, #2563eb)", filter: "blur(18px)", opacity: 0.55 }} />
        <svg className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] ring-spin" viewBox="0 0 100 100" style={{ animationDirection: "reverse", animationDuration: "40s" }}>
          <circle cx="50" cy="50" r="49" fill="none" stroke="rgba(0,210,255,.5)" strokeWidth=".3" strokeDasharray="1 2.2" />
        </svg>
        <img src="/img/logo.png" alt="Logo Líder Auto Center" className="relative w-full h-full rounded-full shadow-[0_30px_80px_rgba(0,0,0,0.7)]" style={{ transform: "translateZ(40px)" }} />
      </motion.div>
    </div>
  );
};
