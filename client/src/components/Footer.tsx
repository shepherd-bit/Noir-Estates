import { motion } from "framer-motion";
import { fadeUp } from "../lib/anim";

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeUp}
      className="border-t border-[#0A0A0A]/10 py-12 flex flex-wrap gap-6 justify-between text-[11px] tracking-[0.08em] font-[500] opacity-50"
    >
      <span>© 2026 NOIR ESTATE — ARCHIVE OF RESIDENCES WITH POINT OF VIEW</span>
      <span className="flex gap-6">
        <span>INSTAGRAM</span>
        <span>ARE.NA</span>
        <span>JOURNAL</span>
      </span>
    </motion.footer>
  );
}
