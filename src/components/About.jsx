import React from 'react';
import { User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative w-full py-20 bg-zinc-950 text-zinc-100">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-zinc-900/30 to-transparent" />
      <div className="relative container mx-auto px-6">
        <div className="flex items-start gap-8 flex-col md:flex-row">
          <div className="shrink-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 ring-1 ring-white/10 p-1">
            <div className="h-28 w-28 rounded-2xl bg-zinc-900 flex items-center justify-center">
              <User className="h-12 w-12 text-cyan-300" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">About Me</h2>
            <p className="mt-4 text-zinc-300 leading-relaxed max-w-3xl">
              I’m a web developer focused on building fast, accessible interfaces and resilient backend systems. I love blending
              clean design with thoughtful micro‑interactions, and lately I’ve been exploring WebGL and 3D to craft more immersive experiences.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
              <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
                <div className="text-sm text-zinc-400">Specialties</div>
                <div className="mt-1 text-zinc-100">React, TypeScript, Node.js, FastAPI, MongoDB</div>
              </div>
              <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
                <div className="text-sm text-zinc-400">Focus Areas</div>
                <div className="mt-1 text-zinc-100">UI engineering, performance, design systems, 3D web</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
