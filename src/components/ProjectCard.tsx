"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import GlassCard from "./GlassCard";

interface ProjectProps {
  project: {
    title: string;
    description: string;
    tech: string[];
    github: string;
    image: string;
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
        
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 glass hover:bg-white/10 transition-all text-white font-bold flex items-center gap-2"
          >
            <Github size={18} /> View on GitHub
          </a>
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col glass bg-white/5 border-t-0 rounded-t-none">
        <h3 className="text-xl font-bold mb-3 transition-colors">
          {project.title}
        </h3>
        <p className="text-foreground/60 text-sm mb-6 flex-grow leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 glass bg-white/5 text-foreground/70 border-white/10"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}
