import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Showcase from './components/Showcase';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-white/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Maxi.Dev — Maximalist Portfolio</p>
        <div className="flex items-center gap-3">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#showcase" className="hover:text-white">Works</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Showcase />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
