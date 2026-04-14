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

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-[700px] mx-auto mb-16"
        >
          <GlassCard className="p-6 md:p-10 border-primary/5">
            <div className="space-y-6 text-foreground/80 text-lg leading-[1.8] text-left">
              <p>
                I am a dedicated 3rd-year <span className="font-bold text-foreground">Software Engineering undergraduate</span> who is specialized in building scalable web, AI, and mobile applications using React.js, the MERN stack, Next.js, Flutter, and Python. I focus on creating user-centered solutions through modern technologies and collaborative problem-solving.
              </p>
              <p className="font-normal text-foreground/70">
                With a solid experience in developing real-world systems, including various e-commerce platforms and AI-powered applications, I am currently seeking a professional <span className="text-primary font-bold border-b border-primary/20">internship opportunity</span> to apply my technical skills and contribute to the growth of innovative software development.
              </p>
            </div>
          </GlassCard>
        </motion.div>

        {/* Strengths and Languages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-12">
          {/* Key Strengths */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-primary rounded-full" />
              Key Strengths
            </h3>
            <div className="space-y-6">
              {[
                { title: "Driven by Innovation", desc: "Focus on AI and modern web technologies.", icon: "🚀" },
                { title: "Quick Learner", desc: "Adaptable to new tech stacks and methodologies.", icon: "💡" },
                { title: "Collaborative", desc: "Experienced in team environments and version control.", icon: "🤝" }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl group-hover:bg-primary/20 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg">{item.title}</h4>
                    <p className="text-foreground/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-primary/30 rounded-full" />
              Languages
            </h3>
            <div className="flex flex-wrap gap-4">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                  className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 glass hover:border-primary/30 transition-all group relative overflow-hidden flex-1 min-w-[120px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex flex-col items-center">
                    <span className="text-foreground font-bold tracking-wide">{lang.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
