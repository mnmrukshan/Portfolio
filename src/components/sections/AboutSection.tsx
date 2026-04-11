"use client";

import { motion } from "framer-motion";
import GlassCard from "../GlassCard";

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard className="p-8 leading-relaxed text-foreground/80 text-lg">
              <p className="mb-6">
                I am a 3rd-year <span className="text-primary font-semibold">Software Engineering Undergraduate</span> with hands-on experience in software design, coding, and collaborative projects.
              </p>
              <p className="mb-6">
                I have developed strong problem-solving and technical skills through multiple real-world projects, ranging from AI-powered systems to full-stack e-commerce platforms.
              </p>
              <p>
                I am actively seeking an <span className="text-secondary font-semibold">internship opportunity</span> to apply my knowledge in real-world software development and contribute to innovative solutions that make a difference.
              </p>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-4">Why work with me?</h3>
            <div className="space-y-4">
              {[
                { title: "Driven by Innovation", desc: "Passionate about AI and modern web technologies." },
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
