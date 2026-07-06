"use client";

import { motion } from "framer-motion";
import { Github, Play } from "lucide-react";
import Image from "next/image";
import GlassCard from "./GlassCard";

interface ProjectProps {
  project: {
    title: string;
    description: string;
    tech: string[];
    github: string;
    image: string;
    demo?: string;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectProps) {
  return (
    <GlassCard
      delay={index * 0.1}
      className="group h-full flex flex-col overflow-hidden p-0 border-none"
    >
      <div className="relative h-56 overflow-hidden rounded-t-2xl">
        {/* Fallback Glassy Background */}
        <div className="absolute inset-0 bg-[#111] flex items-center justify-center">
            <span className="text-white/10 font-bold tracking-widest uppercase text-2xl">{project.title.split(' ')[0]}</span>
        </div>
        
        {/* Real Image */}
        <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
        />
      </div>

      <div className="p-6 flex-grow flex flex-col glass bg-white/5 border-t-0 rounded-t-none">
        <h3 className="text-xl font-bold mb-3 transition-colors">
          {project.title}
        </h3>
        <p className="text-foreground/60 text-sm mb-6 leading-relaxed">
          {project.description}
        </p>
        
        <div className="mt-auto flex flex-col gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[9px] uppercase tracking-wider font-bold px-1.5 py-0.5 glass bg-white/5 text-foreground/70 border-white/10"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 pt-4 border-t border-white/5">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 glass hover:bg-white/10 transition-all text-white font-bold flex items-center justify-center gap-2 text-xs"
            >
              <Github size={14} /> GitHub
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 glass hover:bg-[#00D2FF]/10 transition-all text-[#00D2FF] border-[#00D2FF]/30 hover:border-[#00D2FF]/60 font-bold flex items-center justify-center gap-2 text-xs"
              >
                <Play size={14} /> Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
