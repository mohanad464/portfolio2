import { ArrowUp, Github, Linkedin, Instagram, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-24">
      <div className="container mx-auto px-6 py-10 flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
        {/* Left - Branding */}
        <div className="text-center md:text-left space-y-2">
          <h3 className="text-lg font-semibold tracking-tight text-primary">
            Mohanad Usama
          </h3>
          <p className="text-sm text-muted-foreground">
            Building the web one pixel at a time.
          </p>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Middle - Socials */}
        <div className="flex justify-center gap-5">
          <a
            href="mailto:mohanad_u@yahoo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohanad-usama-30305130a/"
            className="text-muted-foreground hover:text-primary transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/mohanad_usama_?igsh=ZXA1NHE1ejVpbjB6"
            className="text-muted-foreground hover:text-primary transition"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/mohanad464"
            className="text-muted-foreground hover:text-primary transition"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>

        {/* Right - Back to Top */}
        <div className="flex justify-center md:justify-end">
          <a
            href="#hero"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition"
            aria-label="Back to top"
          >
            Back to Top
            <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
};
