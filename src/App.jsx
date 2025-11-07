import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';
import Services from './components/Services';
import Contact from './components/Contact';

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-zinc-950/40 border-b border-white/10">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="text-white font-semibold tracking-tight">dev.folio</a>
        <nav className="hidden md:flex items-center gap-6 text-zinc-300">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#works" className="hover:text-white transition">Works</a>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
        <a href="#contact" className="md:inline-flex hidden rounded-lg bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/15 hover:bg-white/15 transition">Let’s talk</a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="text-sm">Built with love, coffee, and clean code.</div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="bg-zinc-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Works />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
