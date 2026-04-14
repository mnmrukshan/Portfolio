import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-6 border-t border-white/5 bg-background relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Identity & Location */}
          <div className="space-y-6 max-w-sm">
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-[#0077b6] bg-clip-text text-transparent mb-2">
                MR.
              </h2>
              <div className="flex items-center gap-2 text-foreground/40 text-xs font-medium uppercase tracking-widest">
                <MapPin size={12} className="text-primary/60" />
                Galewela, Sri Lanka
              </div>
            </div>
            
            <p className="text-foreground/50 text-sm leading-relaxed">
              Crafting digital experiences with precision and passion. 
              Always open to new opportunities and collaborations.
            </p>

            <div className="flex items-center gap-4">
               <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary/80 text-[10px] font-bold uppercase tracking-wider">
                 <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                 Open to Internships
               </span>
            </div>
          </div>

          {/* Explore Links */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/30">Explore</h3>
            <ul className="space-y-3">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase()}`} 
                    className="text-foreground/50 hover:text-primary transition-colors text-sm font-medium"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/30">Connect</h3>
            <div className="flex flex-col space-y-3">
              {[
                { name: "LinkedIn", href: "https://linkedin.com/in/mnmrukshan", icon: Linkedin },
                { name: "GitHub", href: "https://github.com/mnmrukshan", icon: Github },
                { name: "Email", href: "mailto:rukshan@example.com", icon: Mail }
              ].map((social) => (
                <a 
                  key={social.name}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground/50 hover:text-primary transition-colors text-sm font-medium group"
                >
                  <social.icon size={16} className="text-foreground/30 group-hover:text-primary transition-colors" />
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] uppercase font-bold tracking-widest text-foreground/20">
          <p className="text-foreground/30">
            © {currentYear} Mohamed Rukshan • Designed with Integrity
          </p>
          
          <div className="hidden md:block text-foreground/10">
            Built with Next.js, TypeScript & Tailwind CSS
          </div>

          <div className="flex gap-6">
            <span className="cursor-default hover:text-foreground/40 transition-colors">
              Privacy Policy
            </span>
            <span className="cursor-default hover:text-foreground/40 transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
