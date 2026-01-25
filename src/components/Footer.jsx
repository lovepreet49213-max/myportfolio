import React from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-5 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 py-10">

        <div className="flex flex-col md:flex-row md:justify-between items-center gap-8">

          {/* LEFT: Logo + Name */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <img
              src="/Ricon-1.png"
              alt="Rupinder Singh Logo"
              className="w-14 h-14 object-contain"
            />
            <span className="text-white font-poppins font-semibold text-lg">
              Rupinder Singh
            </span>
          </div>

          {/* CENTER: Contact Info */}
          <div className="flex flex-col items-center md:items-start text-sm text-zinc-400 space-y-3">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <a
                href="mailto:rupindersinghkhalsa94@gmail.com"
                className="hover:text-primary transition"
              >
                rupindersinghkhalsa94@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={16} />
              <a
                href="tel:+919876543210"
                className="hover:text-primary transition"
              >
                +91 98765 43210
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Github size={16} />
              <a
                href="https://github.com/rupindersingh94"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                github.com/rupindersingh94
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Linkedin size={16} />
              <a
                href="https://linkedin.com/in/rupinder--singh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                linkedin.com/in/rupinder--singh
              </a>
            </div>
          </div>

          {/* RIGHT: Copyright */}
          <div className="text-zinc-500 text-sm text-center md:text-right">
            © {new Date().getFullYear()} | All Rights Reserved
          </div>

        </div>
      </div>
    </footer>
  );
}
