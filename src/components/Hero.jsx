import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-900 text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-zinc-950/60 via-zinc-900/40 to-zinc-900/80" />

      <div className="relative z-10 container mx-auto px-6 pt-28 pb-20 flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-4 py-2 text-sm text-zinc-200">
          <Rocket className="h-4 w-4 text-blue-400" />
          Building interactive, modern web experiences
        </span>
        <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Your Name</span>
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-300 leading-relaxed">
          Full‑stack web developer crafting delightful UIs, performant APIs, and immersive 3D experiences.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#works"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/20 hover:opacity-95 transition"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 backdrop-blur px-5 py-3 text-sm font-medium text-white ring-1 ring-white/15 hover:bg-white/15 transition"
          >
            Let's Talk
          </a>
        </div>

        <div className="mt-10 flex items-center gap-5">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-white transition" aria-label="GitHub">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-white transition" aria-label="LinkedIn">
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
