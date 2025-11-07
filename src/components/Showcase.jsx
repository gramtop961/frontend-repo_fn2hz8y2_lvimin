import { ExternalLink, Star } from 'lucide-react';

const projects = [
  {
    title: 'Neon Odyssey',
    description: 'A WebGL music-reactive visualizer with liquid gradients and hyperspace trails.',
    link: '#',
  },
  {
    title: 'Holo UI Kit',
    description: 'Maximalist component library with glassmorphism and motion primitives.',
    link: '#',
  },
  {
    title: 'Quantum Forms',
    description: 'Form engine with constraint systems and playful micro-interactions.',
    link: '#',
  },
];

export default function Showcase() {
  return (
    <section id="showcase" className="relative py-24 bg-black text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_10%_0%,rgba(34,211,238,0.12),rgba(0,0,0,0)_50%),radial-gradient(40%_40%_at_100%_100%,rgba(167,139,250,0.12),rgba(0,0,0,0)_60%)]" />
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-blue-400">
            Showcase
          </h2>
          <div className="hidden sm:flex items-center gap-1 text-yellow-300/80">
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <span className="text-xs opacity-70">Curated picks</span>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <div className="aspect-video w-full bg-gradient-to-br from-fuchsia-600/30 via-cyan-500/20 to-blue-600/20" />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{p.title}</h3>
                  <ExternalLink size={16} className="opacity-70 group-hover:opacity-100" />
                </div>
                <p className="mt-2 text-sm text-white/70">{p.description}</p>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-tr from-fuchsia-500/10 via-cyan-400/10 to-blue-500/10" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
