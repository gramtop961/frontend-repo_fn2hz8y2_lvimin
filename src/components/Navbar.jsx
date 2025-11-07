import { useState, useEffect } from 'react';
import { Rocket, Github, Linkedin } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-xl bg-black/40 border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-white">
            <span className="p-1.5 rounded-md bg-gradient-to-br from-fuchsia-500 via-cyan-400 to-blue-500">
              <Rocket size={18} className="text-black" />
            </span>
            <span className="font-semibold tracking-tight">Maxi.Dev</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className="text-white/80 hover:text-white transition">About</a>
            <a href="#showcase" className="text-white/80 hover:text-white transition">Works</a>
            <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md bg-gradient-to-br from-fuchsia-500 via-cyan-400 to-blue-500 text-black font-medium shadow-[0_0_40px_-10px_rgba(99,102,241,0.7)] hover:shadow-[0_0_50px_-8px_rgba(34,211,238,0.8)] transition"
            >
              <span>Hire Me</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
