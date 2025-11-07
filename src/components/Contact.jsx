import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For this static portfolio template, we'll just show a success state.
    setSent(true);
  };

  return (
    <section id="contact" className="w-full py-20 bg-zinc-900 text-zinc-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center">Get in touch</h2>
        <p className="mt-2 text-center text-zinc-300">Have a project in mind? Let’s build something great together.</p>

        <div className="mx-auto mt-8 max-w-2xl rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
          {sent ? (
            <div className="text-center py-10">
              <div className="text-xl font-medium">Thanks! I’ll get back to you soon.</div>
              <button onClick={() => setSent(false)} className="mt-4 text-cyan-300 hover:text-cyan-200">Send another message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div>
                <label className="block text-sm text-zinc-300">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-lg bg-zinc-800 text-white px-4 py-2 ring-1 ring-white/10 focus:outline-none focus:ring-cyan-400/40"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="block text-sm text-zinc-300">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-lg bg-zinc-800 text-white px-4 py-2 ring-1 ring-white/10 focus:outline-none focus:ring-cyan-400/40"
                  placeholder="jane@email.com"
                />
              </div>
              <div>
                <label className="block text-sm text-zinc-300">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="mt-1 w-full rounded-lg bg-zinc-800 text-white px-4 py-2 ring-1 ring-white/10 focus:outline-none focus:ring-cyan-400/40"
                  placeholder="Tell me a bit about your project..."
                />
              </div>
              <div className="flex justify-end">
                <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/20 hover:opacity-95 transition">
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
