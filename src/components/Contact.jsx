import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-24 bg-black text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(50%_50%_at_80%_20%,rgba(34,211,238,0.12),rgba(0,0,0,0)_60%)]" />
      <div className="max-w-3xl mx-auto px-6 relative">
        <div className="flex items-center gap-3">
          <span className="p-2 rounded-lg bg-gradient-to-br from-fuchsia-500 via-cyan-400 to-blue-500">
            <Mail size={18} className="text-black" />
          </span>
          <h2 className="text-3xl font-bold">Let’s build something wild</h2>
        </div>

        {sent ? (
          <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-white/90">Thanks! Your message has been received. I’ll get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 gap-4">
            <input required placeholder="Your name" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:ring-2 ring-cyan-300/40" />
            <input type="email" required placeholder="Email address" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:ring-2 ring-cyan-300/40" />
            <textarea required placeholder="Tell me about your project" rows={5} className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:ring-2 ring-cyan-300/40" />
            <button type="submit" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-br from-fuchsia-500 via-cyan-400 to-blue-500 text-black font-semibold">
              <Send size={16} /> Send message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
