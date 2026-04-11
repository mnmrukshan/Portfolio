"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverGlow?: boolean;
  delay?: number;
}

export default function GlassCard({ children, className, hoverGlow = true, delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hoverGlow ? { y: -2 } : {}}
      className={cn(
        "glass p-6 transition-all duration-300",
        hoverGlow && "hover:border-white/20 hover:bg-white/5",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
