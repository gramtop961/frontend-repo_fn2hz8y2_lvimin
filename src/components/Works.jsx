import React from 'react';

const projects = [
  {
    title: 'Interactive Product Showcase',
    desc: 'WebGL-powered product viewer with real-time customization and smooth transitions.',
    tags: ['React', 'Three.js', 'Tailwind'],
    link: '#',
  },
  {
    title: 'SaaS Dashboard',
    desc: 'Analytics dashboard with role-based access, charts, and delightful micro animations.',
    tags: ['Next.js', 'Prisma', 'Postgres'],
    link: '#',
  },
  {
    title: 'Headless Commerce',
    desc: 'A performant storefront with serverless functions and global edge caching.',
    tags: ['Remix', 'Stripe', 'Cloudflare'],
    link: '#',
  },
];

const Works = () => {
  return (
    <section id="works" className="w-full py-20 bg-zinc-900 text-zinc-100">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Selected Work</h2>
          <a href="#" className="text-sm text-cyan-300 hover:text-cyan-200">View all</a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 hover:ring-cyan-400/30 transition">
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition pointer-events-none" />
              <h3 className="relative z-10 text-xl font-semibold">{p.title}</h3>
              <p className="relative z-10 mt-2 text-sm text-zinc-300">{p.desc}</p>
              <div className="relative z-10 mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-zinc-800 text-zinc-300 ring-1 ring-white/10">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
