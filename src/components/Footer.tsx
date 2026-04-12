import { Github, Linkedin, Mail, MapPin, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-background relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Identity */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#00D2FF] to-[#0077b6] bg-clip-text text-transparent">
              MR.
            </h2>
            <p className="text-foreground/40 text-[10px] font-bold uppercase tracking-[0.2em]">
              Creative Developer
            </p>
            <div className="pt-2">
               <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider">
                 <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                 Open to Internships
               </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase()}`} 
                    className="text-foreground/50 hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground/20 group-hover:bg-primary transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Socials */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">Connect</h3>
            <div className="flex flex-col space-y-3">
              <a 
                href="https://linkedin.com/in/mnmrukshan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground/50 hover:text-primary transition-colors text-sm group"
              >
                <Linkedin size={18} className="group-hover:scale-110 transition-transform" /> 
                LinkedIn
                <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href="https://github.com/mnmrukshan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground/50 hover:text-primary transition-colors text-sm group"
              >
                <Github size={18} className="group-hover:scale-110 transition-transform" /> 
                GitHub
                <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href="mailto:rukshan@example.com" 
                className="flex items-center gap-3 text-foreground/50 hover:text-primary transition-colors text-sm group"
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform" /> 
                Email Me
              </a>
            </div>
          </div>

          {/* Column 4: Contact Bio */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">Location</h3>
            <div className="flex items-start gap-3 text-foreground/50 text-sm">
              <MapPin size={18} className="mt-0.5 text-primary" />
              <p>Galewela,<br />Sri Lanka</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-foreground/40 text-xs text-center md:text-left">
            © {currentYear} Mohamed Rukshan. All rights reserved. 
          </p>
          <div className="px-4 py-1.5 glass bg-white/5 text-[10px] uppercase tracking-tighter text-foreground/30 font-bold border-white/5">
            Designed for Excellence
          </div>
        </div>
      </div>
    </footer>
  );
}
