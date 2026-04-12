"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technologies & Tools</h2>
          <div className="h-1 w-20 bg-white/20 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center justify-center p-6 glass bg-white/5 border-white/5 hover:border-white/20 hover:bg-white/10 transition-all group"
            >
              <div className="w-12 h-12 mb-4 relative flex items-center justify-center">
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`}
                  alt={skill.name}
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    // Fallback for icons that might need a different naming convention (e.g. plain)
                    (e.target as HTMLImageElement).src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-plain.svg`;
                  }}
                />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-foreground/50 group-hover:text-foreground transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
