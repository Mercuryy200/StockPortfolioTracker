"use client";
import { title, subtitle } from "@/components/primitives";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <motion.h1
          className="text-5xl"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className={title()}>Track and supervise your &nbsp;</span>
          <span className={title({ color: "blue" })}>Portfolio&nbsp;</span>
          <br />
          <span className={title()}>with the best Stock Portfolio Tracker</span>
        </motion.h1>

        <motion.h2
          className="text-xl mt-4"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={subtitle({ class: "mt-4" })}>
            Create and follow your stock portfolio easily and efficiently with
            our intuitive tracker.
          </div>
        </motion.h2>
      </div>
    </section>
  );
}
