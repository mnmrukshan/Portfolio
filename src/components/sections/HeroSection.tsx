"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-12 px-6 relative overflow-hidden bg-background text-white">
      {/* Background Decorative Blur - Cyan for 'Jacob' look */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#00D2FF]/10 blur-[130px] rounded-full -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#00D2FF]/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text Content */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight"
          >
            Mohamed <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00D2FF] to-[#0077b6]">Rukshan</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-foreground/70 mb-8 max-w-xl lg:mx-0 mx-auto font-medium"
          >
            Software Engineering Undergraduate (3rd Year)
            <br />
            <span className="text-foreground/50 text-lg block mt-2">
              "I build modern full-stack web applications and AI-powered systems"
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <Link
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 glass bg-[#00D2FF]/10 hover:bg-[#00D2FF]/20 transition-all flex items-center justify-center gap-2 font-bold border-[#00D2FF]/20 hover:border-[#00D2FF]/40 hover:shadow-[0_0_20px_rgba(0,210,255,0.2)]"
            >
              View Projects <ArrowRight size={20} />
            </Link>
            <button
              onClick={() => window.open('/Mohamed Rukshan_CV.pdf', '_blank')}
              className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/10 transition-all flex items-center justify-center gap-2 font-bold group border-white/5"
            >
              <Download size={20} className="group-hover:translate-y-0.5 transition-transform" /> Download CV
            </button>
            <Link
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/5 transition-all flex items-center justify-center gap-2 font-bold text-foreground/50 hover:text-foreground/90 border-white/5"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>

        {/* Right Side: Portrait Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative w-64 h-[400px] sm:w-80 sm:h-[450px] lg:w-96 lg:h-[550px]">
            {/* Glass Frame Container */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute inset-0 z-10 glass border-white/10 overflow-hidden shadow-2xl flex items-center justify-center"
            >
                {/* Fallback Initial */}
                <div className="absolute inset-0 bg-[#0A0A0A] flex items-center justify-center">
                    <span className="text-white/5 text-[150px] font-black select-none">MR</span>
                </div>
                
                {/* New Portrait Photo with Professional Soft Lighting */}
                <div className="relative w-full h-full overflow-hidden">
                    <Image
                        src="/my.jpg.jpeg"
                        alt="Mohamed Rukshan"
                        fill
                        className="object-cover opacity-90 brightness-[0.85] contrast-[1.05] transition-all duration-700 group-hover:scale-105"
                        priority
                    />
                    
                    {/* Professional Soft Cyan Lighting (No streaks) */}
                    <div className="absolute inset-0 z-30 pointer-events-none">
                        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-[#00D2FF]/10 to-transparent mix-blend-screen" />
                        <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#010B13] via-[#010B13]/40 to-transparent z-40" />
                    </div>

                    {/* Subtle Interior Cyan Glow for depth */}
                    <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,210,255,0.15)] z-20" />
                </div>
            </motion.div>
            
            {/* Decorative background element behind image - Cyan Glow */}
            <div className="absolute -inset-10 bg-[#00D2FF]/20 blur-[80px] -z-10 rounded-full animate-pulse" />
            <div className="absolute -inset-4 bg-[#00D2FF]/10 blur-3xl -z-10 rounded-full" />
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator - Hidden on smaller screens for cleaner hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1.5 h-1.5 bg-white/70 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
