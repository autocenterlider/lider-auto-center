import { useEffect } from "react";
import Lenis from "lenis";
import "@/App.css";
import { Toaster } from "./components/ui/sonner";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Services } from "./components/Services";
import { Diferenciais } from "./components/Diferenciais";
import { Processo } from "./components/Processo";
import { Agendamento } from "./components/Agendamento";
import { Contato } from "./components/Contato";
import { Footer, WhatsFloat } from "./components/Footer";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, anchors: { offset: -80 } });
    let id;
    const raf = (t) => { lenis.raf(t); id = requestAnimationFrame(raf); };
    id = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(id); lenis.destroy(); };
  }, []);

  return (
    <div className="App bg-[#050914] text-white overflow-x-clip">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Diferenciais />
        <Processo />
        <Agendamento />
        <Contato />
      </main>
      <Footer />
      <WhatsFloat />
      <Toaster theme="dark" position="top-center" richColors />
    </div>
  );
}

export default App;
