"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-4xl w-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
        >
          Mohamed <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">Rukshan</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-2xl mx-auto font-medium"
        >
          Software Engineering Undergraduate (3rd Year)
          <br />
          <span className="text-foreground/50 text-lg">
            "I build modern full-stack web applications and AI-powered systems"
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 glass bg-primary/20 hover:bg-primary/30 transition-all flex items-center justify-center gap-2 font-bold"
          >
            View Projects <ArrowRight size={20} />
          </Link>
          <button
            onClick={() => window.open('/resume.pdf', '_blank')}
            className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/10 transition-all flex items-center justify-center gap-2 font-bold group"
          >
            <Download size={20} className="group-hover:translate-y-0.5 transition-transform" /> Download CV
          </button>
          <Link
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/10 transition-all flex items-center justify-center gap-2 font-bold text-foreground/70 hover:text-foreground"
          >
            Contact Me
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 flex justify-center"
        >
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
