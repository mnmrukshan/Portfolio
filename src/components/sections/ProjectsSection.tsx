"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import ProjectCard from "../ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          <p className="mt-6 text-foreground/60 max-w-2xl mx-auto">
            A selection of my recent work in AI systems, full-stack web development, and mobile applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/mnmrukshan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 glass hover:bg-white/10 transition-all font-bold group"
          >
            See More on GitHub
            <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
