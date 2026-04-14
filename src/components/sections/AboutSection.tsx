"use client";

import { motion } from "framer-motion";
import GlassCard from "../GlassCard";
import { languages } from "@/data/portfolio";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard className="p-10 leading-relaxed text-foreground/80 text-lg border-primary/5">
              <p className="mb-6 text-justify">
                I am a dedicated 3rd-year <span className="font-bold text-foreground">Software Engineering undergraduate</span> who is specialized in building scalable web, AI, and mobile applications using React.js, the MERN stack, Next.js, Flutter, and Python. I focus on creating user-centered solutions through modern technologies and collaborative problem-solving.
              </p>
              <p className="mb-6 font-normal text-foreground/70 text-justify">
                With a solid experience in developing real-world systems, including various e-commerce platforms and AI-powered applications, I am currently seeking a professional <span className="text-primary font-bold">internship opportunity</span> to apply my technical skills and contribute to the growth of innovative software development.
              </p>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Key Strengths</h3>
              <div className="space-y-4">
                {[
                  { title: "Driven by Innovation", desc: "Focus on AI and modern web technologies." },
                  { title: "Quick Learner", desc: "Adaptable to new tech stacks and methodologies." },
                  { title: "Collaborative", desc: "Experienced in team environments and version control." }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-foreground">{item.title}</h4>
                      <p className="text-foreground/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-primary/30" />
                Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 glass hover:border-primary/30 transition-colors group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative flex flex-col items-center">
                      <span className="text-foreground font-bold text-sm tracking-wide">{lang.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
