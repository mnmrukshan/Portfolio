export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Mohamed Rukshan
          </h2>
          <p className="text-foreground/40 text-sm mt-1">
            Software Engineering Undergraduate
          </p>
        </div>
        
        <div className="text-foreground/40 text-sm">
          © 2026 Mohamed Rukshan. Built with Next.js & Framer Motion.
        </div>
        
        <div className="flex gap-6">
          <a href="#home" className="text-foreground/40 hover:text-primary transition-colors text-sm">Home</a>
          <a href="#projects" className="text-foreground/40 hover:text-primary transition-colors text-sm">Projects</a>
          <a href="#contact" className="text-foreground/40 hover:text-primary transition-colors text-sm">Contact</a>
        </div>
      </div>
    </footer>
  );
}
