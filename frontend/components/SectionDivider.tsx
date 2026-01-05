"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="h-px bg-gradient-to-r from-transparent via-light-blue to-transparent flex-1"></div>
            <div className="w-3 h-3 bg-light-blue rounded-full"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-pink to-transparent flex-1"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
