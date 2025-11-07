import { Code2, Cpu, Paintbrush } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-black text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(50%_50%_at_50%_20%,rgba(124,58,237,0.15),rgba(0,0,0,0)_60%)]" />
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-blue-400">
              About the Artist-Engineer
            </h2>
            <p className="mt-4 text-white/80">
              I merge creative coding with design to build expressive, performant web apps. My toolkit spans React, WebGL, motion, and system design.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <Code2 className="text-cyan-300" />
                <p className="mt-2 font-medium">Frontend Craft</p>
                <p className="text-sm text-white/70">React, animations, accessibility</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <Cpu className="text-fuchsia-300" />
                <p className="mt-2 font-medium">Systems</p>
                <p className="text-sm text-white/70">APIs, architecture, performance</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <Paintbrush className="text-blue-300" />
                <p className="mt-2 font-medium">Visuals</p>
                <p className="text-sm text-white/70">3D, shaders, art direction</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-fuchsia-600/30 via-cyan-500/20 to-blue-600/30">
              <div className="absolute inset-0 backdrop-blur-0" />
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_70%_30%,#22d3ee,transparent_40%),radial-gradient(circle_at_30%_70%,#a78bfa,transparent_40%)]" />
            </div>
            <div className="absolute -inset-1 rounded-2xl -z-[1] bg-gradient-to-r from-fuchsia-500/30 via-cyan-400/30 to-blue-500/30 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
