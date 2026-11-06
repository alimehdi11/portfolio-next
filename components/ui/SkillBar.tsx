"use client";

import { motion } from "framer-motion";

export default function SkillBar({ name, value, gradient }: { name: string; value: number; gradient: string }) {
  return (
    <div className="mb-5 last:mb-0">
      <div className="mb-1.5 flex justify-between">
        <span className="text-[0.82rem] font-medium text-mid">{name}</span>
        <span className="font-mono text-[0.72rem] text-cyan">{value}%</span>
      </div>
      <div
        className="h-1 overflow-hidden rounded bg-white/5"
        role="progressbar"
        aria-label={name}
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <motion.div
          className="h-full rounded"
          style={{ background: gradient }}
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </div>
  );
}
