import { motion } from "framer-motion";
import { formatPrice, type Property } from "../data/properties";
import { fadeUp, staggerParent, viewportOnce } from "../lib/anim";

interface Props {
  items: Property[];
  saved: Set<number>;
  onToggleSave: (id: number, e?: React.MouseEvent) => void;
  onOpen: (id: number) => void;
  onViewAll: () => void;
}

export default function CuratedSection({ items, saved, onToggleSave, onOpen, onViewAll }: Props) {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={staggerParent}
      className="pt-20 pb-20"
    >
      <motion.div variants={fadeUp} className="mb-10">
        <div>
          <div className="text-[11px] tracking-[0.18em] font-[700] opacity-40 mb-3">LATEST LISTINGS</div>
          <h2 className="text-[44px] md:text-[64px] font-[800] tracking-[-0.05em] leading-[0.9]">
            Explore for
            <br />
            your taste.
          </h2>
        </div>
      </motion.div>

      <motion.div variants={staggerParent} className="grid md:grid-cols-12 gap-6 auto-rows-[380px] md:auto-rows-[420px]">
        {items.map((c, idx) => (
          <motion.div
            key={c.id}
            variants={fadeUp}
            className={`group relative text-left rounded-[32px] overflow-hidden bg-[#E8E2DB] shadow-[0_10px_30px_-16px_rgba(0,0,0,0.25)] hover:shadow-[0_30px_60px_-24px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-500 ${
              idx === 0
                ? "md:col-span-7"
                : idx === 1
                  ? "md:col-span-5"
                  : idx === 2
                    ? "md:col-span-5"
                    : "md:col-span-7"
            }`}
          >
            <button
              onClick={() => onOpen(c.id)}
              className="absolute inset-0 w-full h-full"
              aria-label={c.title}
            >
              <img
                src={c.images[0]}
                alt={c.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-[1.08]"
              />
            </button>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
            <div className="absolute top-5 left-5 flex items-center gap-2 pointer-events-none">
              <div className="px-3 py-1.5 rounded-full bg-white text-[#0A0A0A] text-[11px] font-[800] tracking-[0.04em]">
                {formatPrice(c.price)}
              </div>
              <div className="px-3 py-1.5 rounded-full bg-white/15 backdrop-blur text-white border border-white/20 text-[10px] tracking-[0.1em] font-[600] uppercase">
                {c.type}
              </div>
            </div>
            <button
              onClick={(e) => onToggleSave(c.id, e)}
              className={`absolute top-5 right-5 z-10 w-9 h-9 rounded-full backdrop-blur border flex items-center justify-center transition ${
                saved.has(c.id)
                  ? "bg-white text-black border-white"
                  : "bg-white/15 border-white/20 text-white hover:bg-white hover:text-black"
              }`}
            >
              {saved.has(c.id) ? "♥" : "♡"}
            </button>
            <div className="absolute bottom-0 left-0 right-0 p-7 text-white pointer-events-none">
              <div className="flex items-center gap-2 text-[11px] tracking-[0.08em] opacity-80">
                <span>{c.location.toUpperCase()}</span>
                <span>•</span>
                <span>{c.coordinates}</span>
              </div>
              <h3 className="mt-2 text-[28px] font-[700] tracking-[-0.03em] leading-[0.95]">{c.title}</h3>
              <div className="mt-4 flex items-center gap-4 text-[12px] font-[500]">
                <span className="flex items-center gap-1.5">
                  <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center">◫</span>
                  {c.beds || "—"} bd
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center">◍</span>
                  {c.baths || "—"} ba
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center">◰</span>
                  {c.sqft.toLocaleString()} ft²
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={fadeUp} className="mt-12 flex justify-center">
        <button
          onClick={onViewAll}
          className="group h-[56px] px-8 rounded-full bg-[#0A0A0A] text-[#F7F5F2] text-[13px] tracking-[0.08em] font-[700] flex items-center gap-3 hover:bg-black hover:gap-5 transition-all"
        >
          VIEW ALL LISTINGS — 12 PROPERTIES{" "}
          <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center group-hover:rotate-45 transition-transform">
            ↗
          </span>
        </button>
      </motion.div>
    </motion.section>
  );
}
