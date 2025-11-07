import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_60%,rgba(0,0,0,0.85)_100%)]" />
      <div className="pointer-events-none absolute inset-0 mix-blend-screen bg-[conic-gradient(from_90deg_at_50%_50%,#7c3aed_0deg,#22d3ee_120deg,#60a5fa_240deg,#7c3aed_360deg)] opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-24 flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/10 backdrop-blur-md text-xs text-white/90">
          <Sparkles size={14} className="text-cyan-300" />
          Trippy galaxy rollercoaster vibes
        </span>

        <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-fuchsia-400 via-cyan-300 to-blue-400 drop-shadow-2xl">
          Maximalist Cosmic Developer
        </h1>
        <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/80">
          I craft immersive web experiences blending code, motion, and 3D. Buckle up for a neon-futurist ride through my work.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href="#showcase" className="px-5 py-3 rounded-xl bg-white text-black font-semibold shadow-xl shadow-fuchsia-500/20 hover:shadow-cyan-400/30 transition">
            Explore Works
          </a>
          <a href="#contact" className="px-5 py-3 rounded-xl bg-gradient-to-br from-fuchsia-500 via-cyan-400 to-blue-500 text-black font-semibold shadow-xl hover:shadow-2xl transition">
            Start a Project
          </a>
        </div>
      </div>

      {/* Floating orbs */}
      <div className="pointer-events-none absolute -left-10 top-40 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
    </section>
  );
}
