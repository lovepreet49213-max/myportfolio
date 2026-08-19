import React, { useState } from "react";
import { siteConfig } from "../siteConfig";

const ContactInfoCard = ({ icon, label, value, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 group">
    <div
      className="w-12 h-12 rounded-2xl
                 bg-blue-500/10 backdrop-blur-md
                 border border-blue-400/20
                 flex items-center justify-center
                 group-hover:border-blue-400 transition-colors"
    >
      {icon}
    </div>
    <div>
      <p className="text-[10px] font-black uppercase tracking-widest text-blue-300/70">
        {label}
      </p>
      <p className="text-lg font-bold text-slate-100">{value}</p>
    </div>
  </a>
);

const SocialButton = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-4 rounded-2xl
               bg-blue-500/10 backdrop-blur-md
               border border-blue-400/20
               hover:border-blue-400
               hover:bg-blue-500/20
               transition-all group"
  >
    {children}
  </a>
);

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Connect to a backend API endpoint here when deployed.
    // For now the form clears and directs users to email directly.
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="
        container-wide
        w-full
        px-5
        sm:px-8
        lg:px-12
        xl:px-16
        py-10
        scroll-mt-16
        border-t border-blue-400/20
      "
    >
      {/* Header */}
      <div className="flex flex-col gap-3 mb-16">
        <span className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">
          Contact
        </span>

        <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-100">
          Let's <br /> Connect.
        </h2>

        <p className="text-xl text-blue-200/80 max-w-2xl leading-relaxed">
          I'm currently open to opportunities in{" "}
          <span className="text-slate-100 font-bold">
            Node.js backend
          </span>{" "}
          and{" "}
          <span className="text-slate-100 font-bold">full-stack development</span>.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-8">
            <ContactInfoCard
              href={`mailto:${siteConfig.email}`}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
              }
              label="Email"
              value={siteConfig.email}
            />

            <ContactInfoCard
              href={siteConfig.linkedin}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              }
              label="LinkedIn"
              value="Lovepreet Singh"
            />

            <ContactInfoCard
              href={siteConfig.github}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5a4.5 4.5 0 0 0-1-3.5c.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5" />
                </svg>
              }
              label="GitHub"
              value="@lovepreet49213-max"
            />

            <ContactInfoCard
              href="#"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              }
              label="Location"
              value={siteConfig.location}
            />
          </div>
        </div>

        {/* Right Column – Form */}
        <div className="lg:col-span-7">
          <div
            className="bg-blue-500/10 backdrop-blur-md
                       border border-blue-400/20
                       rounded-[2.5rem] p-8 lg:p-10"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full h-12 px-4 rounded-xl
                             bg-[#011b59]/60
                             border border-blue-400/20
                             text-slate-100
                             placeholder:text-blue-200/50
                             focus:border-blue-400 outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="email@address.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full h-12 px-4 rounded-xl
                             bg-[#011b59]/60
                             border border-blue-400/20
                             text-slate-100
                             placeholder:text-blue-200/50
                             focus:border-blue-400 outline-none"
                />
              </div>

              <textarea
                name="message"
                placeholder="Tell me about your project or idea…"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full min-h-[150px] p-4 rounded-2xl
                           bg-[#011b59]/60
                           border border-blue-400/20
                           text-slate-100
                           placeholder:text-blue-200/50
                           focus:border-blue-400 outline-none"
              />

              <button
                type="submit"
                className="w-full h-14 rounded-2xl font-bold text-lg
                           text-white
                           bg-gradient-to-r from-blue-600 to-indigo-600
                           hover:scale-[1.02]
                           hover:shadow-xl hover:shadow-blue-500/30
                           transition-all"
              >
                Send Message
              </button>

              <p className="text-xs text-blue-200/60 text-center">
                Prefer email? Reach me directly at{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-blue-400 hover:text-blue-300 font-semibold"
                >
                  {siteConfig.email}
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
