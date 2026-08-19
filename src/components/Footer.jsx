import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "../siteConfig";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-blue-400/20">
      <div className="container-wide w-full px-5 sm:px-8 lg:px-12 xl:px-16 py-16">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-10">
          {/* LEFT: Logo + Name */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-400/30 backdrop-blur-md">
              <img
                src="/Lsicon-nobg.png"
                alt="Lovepreet Singh Logo"
                className="w-10 h-10 object-contain"
              />
            </div>
            <span className="text-slate-100 font-semibold text-lg tracking-tight">
              {siteConfig.name}
            </span>
            <span className="text-sm text-blue-200/70 font-mono">
              Node.js Backend Engineer | Full Stack Developer
            </span>
          </div>

          {/* CENTER: Social Links */}
          <div className="flex flex-col items-center md:items-start text-sm text-blue-200/70 space-y-4">
            <FooterItem
              icon={<Github size={16} />}
              href={siteConfig.github}
              label="GitHub"
              external
            />
            <FooterItem
              icon={<Linkedin size={16} />}
              href={siteConfig.linkedin}
              label="LinkedIn"
              external
            />
            <FooterItem
              icon={<Mail size={16} />}
              href={`mailto:${siteConfig.email}`}
              label={siteConfig.email}
            />
          </div>

          {/* RIGHT: Copyright */}
          <div className="text-blue-200/50 text-xs text-center md:text-right">
            © {new Date().getFullYear()} {siteConfig.name} <br />
            Crafted with React & Tailwind
          </div>
        </div>
      </div>
    </footer>
  );
}

const FooterItem = ({ icon, href, label, external }) => (
  <a
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    className="
      flex items-center gap-3
      hover:text-blue-400
      transition-colors
      group
    "
  >
    <span className="text-blue-400/80 group-hover:text-blue-400">{icon}</span>
    <span className="break-all">{label}</span>
  </a>
);
