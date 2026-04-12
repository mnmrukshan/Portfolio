"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Instagram, Facebook, Loader2, CheckCircle2, XCircle } from "lucide-react";
import GlassCard from "../GlassCard";
import { useState } from "react";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/mnmrukshan", icon: <Github size={20} /> },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/mohamed-rukshan-0393b4373", icon: <Linkedin size={20} /> },
  { name: "Instagram", href: "https://www.instagram.com/mnm_rukshan", icon: <Instagram size={20} /> },
  { name: "Facebook", href: "https://www.facebook.com/mohamed.rukshan.377901", icon: <Facebook size={20} /> },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Failed to send message");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold">Let's build something together</h3>
            <p className="text-foreground/60 text-lg">
              I'm always open to new opportunities, collaborations, or just a coffee chat about tech.
            </p>

            <div className="space-y-4">
              <GlassCard className="flex items-center gap-4 py-4 px-6 hoverGlow={false}">
                <div className="p-3 glass rounded-lg text-foreground/70 border-white/10">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-foreground/50">Email Me</p>
                  <p className="font-bold text-foreground">mnmrukshan22@gmail.com</p>
                </div>
              </GlassCard>

              <GlassCard className="flex items-center gap-4 py-4 px-6 hoverGlow={false}">
                <div className="p-3 glass rounded-lg text-foreground/70 border-white/10">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-foreground/50">Call Me</p>
                  <p className="font-bold text-foreground">0760752854</p>
                </div>
              </GlassCard>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass rounded-xl hover:bg-primary/20 transition-all text-foreground/70 hover:text-primary"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/70 ml-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 glass bg-white/5 border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/70 ml-1">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 glass bg-white/5 border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/70 ml-1">Message</label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 glass bg-white/5 border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all resize-none"
                    placeholder="Write your message here..."
                  />
                </div>
                
                {status === "success" && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-2 p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-500 text-sm"
                  >
                    <CheckCircle2 size={18} />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-2 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm"
                  >
                    <XCircle size={18} />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 glass bg-white/5 hover:bg-white/10 hover:border-white/20 text-white font-bold transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
