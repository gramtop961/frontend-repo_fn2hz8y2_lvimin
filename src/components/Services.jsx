import React from 'react';
import { Code2, Paintbrush, Cpu } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Frontend Engineering',
    desc: 'Modern, accessible interfaces with component-driven architectures and type safety.'
  },
  {
    icon: Cpu,
    title: 'Backend & APIs',
    desc: 'Robust services and APIs built with Node.js or FastAPI, tuned for performance.'
  },
  {
    icon: Paintbrush,
    title: 'Design & Motion',
    desc: 'Design systems, prototyping, and tasteful motion to elevate user experience.'
  }
];

const Services = () => {
  return (
    <section id="services" className="w-full py-20 bg-zinc-950 text-zinc-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Services</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition pointer-events-none" />
              <Icon className="h-8 w-8 text-cyan-300" />
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
