import { AnimatePresence, motion } from "framer-motion";
import { PROPERTIES, formatPrice, type Property } from "../data/properties";
import { fadeUp, scaleIn, slideFromRight, staggerParent } from "../lib/anim";

export type DetailTab = "overview" | "features" | "floorplan" | "neighborhood";

interface Props {
  property: Property;
  imageIndex: number;
  setImageIndex: (v: number) => void;
  tab: DetailTab;
  setTab: (v: DetailTab) => void;
  onBackToListings: () => void;
  onBackToLanding: () => void;
  onOpen: (id: number) => void;
}

export default function PropertyDetail({
  property: M,
  imageIndex: p,
  setImageIndex: h,
  tab: y,
  setTab: X,
  onBackToListings,
  onBackToLanding,
  onOpen,
}: Props) {
  return (
    <motion.main
      initial="hidden"
      animate="show"
      variants={staggerParent}
      className="mx-auto max-w-[1440px] px-6 md:px-10 py-6 md:py-8"
    >
      <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6 text-[12px]">
        <button
          onClick={onBackToListings}
          className="w-9 h-9 rounded-full bg-[#0A0A0A] text-white flex items-center justify-center hover:bg-black"
        >
          ←
        </button>
        <div className="flex items-center gap-2 opacity-60">
          <button onClick={onBackToLanding} className="hover:opacity-100">
            INDEX
          </button>
          <span>/</span>
          <button onClick={onBackToListings} className="hover:opacity-100">
            PROPERTIES
          </button>
          <span>/</span>
          <span className="font-[600] text-[#0A0A0A]">{M.title.toUpperCase()}</span>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-[1.6fr_0.9fr] gap-8 items-start">
        <motion.div variants={fadeUp}>
          <motion.div variants={scaleIn} className="relative rounded-[32px] overflow-hidden bg-[#E8E2DB] aspect-[16/11] group">
            <AnimatePresence mode="wait">
              <motion.img
                key={`${M.id}-${p}`}
                src={M.images[p]}
                alt={M.title}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute top-5 left-5 flex gap-2">
              <div className="px-4 py-2 rounded-full bg-white/90 backdrop-blur text-[11px] font-[800]">
                {formatPrice(M.price)}
              </div>
              <div className="px-4 py-2 rounded-full bg-[#0A0A0A] text-white text-[11px] font-[700] tracking-[0.06em] uppercase">
                {M.type}
              </div>
            </div>
            <div className="absolute top-5 right-5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-[11px] font-[700]">
              {p + 1} / {M.images.length}
            </div>
            <button
              onClick={() => h((p - 1 + M.images.length) % M.images.length)}
              className="absolute left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:bg-white transition"
            >
              ‹
            </button>
            <button
              onClick={() => h((p + 1) % M.images.length)}
              className="absolute right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:bg-white transition"
            >
              ›
            </button>
            <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
              <div className="px-4 py-3 rounded-[16px] bg-[#0A0A0A]/80 backdrop-blur text-white">
                <div className="text-[11px] tracking-[0.1em] opacity-70">
                  {M.location.toUpperCase()} • {M.coordinates}
                </div>
                <div className="text-[20px] font-[700] tracking-[-0.02em] mt-1">{M.title}</div>
              </div>
            </div>
          </motion.div>

          <div className="mt-4 grid grid-cols-6 gap-3">
            {M.images.map((c, idx) => (
              <button
                key={idx}
                onClick={() => h(idx)}
                className={`relative rounded-[16px] overflow-hidden aspect-[1.2/1] border-2 transition ${
                  p === idx ? "border-[#0A0A0A]" : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <img src={c} alt="" className="absolute inset-0 w-full h-full object-cover" />
              </button>
            ))}
          </div>

          <div className="mt-10">
            <div className="flex gap-2 p-1 rounded-full bg-[#E8E2DB] w-fit">
              {(["overview", "features", "floorplan", "neighborhood"] as DetailTab[]).map((c) => (
                <button
                  key={c}
                  onClick={() => X(c)}
                  className={`px-5 h-[36px] rounded-full text-[12px] font-[600] tracking-[0.04em] capitalize transition ${
                    y === c ? "bg-[#0A0A0A] text-white" : "hover:bg-white/70"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="mt-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={y}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                >
              {y === "overview" && (
                <div className="max-w-[64ch]">
                  <p className="text-[20px] leading-[1.5] font-[400] tracking-[-0.02em]">{M.description}</p>
                  <p className="mt-6 text-[14px] leading-[1.7] opacity-60">
                    Every Noir residence is vetted for light, proportion, and material honesty. We photograph at golden
                    hour, measure in silence, and list only what we would live in. This property includes deeded
                    access, architectural drawings, and introduction to the original studio.
                  </p>
                  <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { k: "Bedrooms", v: M.beds === 0 ? "—" : M.beds },
                      { k: "Bathrooms", v: M.baths === 0 ? "—" : M.baths },
                      { k: "Living Area", v: `${M.sqft.toLocaleString()} ft²` },
                      { k: "Year Built", v: M.yearBuilt },
                    ].map((c) => (
                      <div
                        key={c.k}
                        className="rounded-[20px] bg-white border border-[#0A0A0A]/5 p-5"
                      >
                        <div className="text-[10px] tracking-[0.14em] font-[700] opacity-40">
                          {c.k.toUpperCase()}
                        </div>
                        <div className="text-[18px] font-[700] mt-2">{c.v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {y === "features" && (
                <div className="grid md:grid-cols-2 gap-3 max-w-[64ch]">
                  {M.amenities.map((c) => (
                    <div
                      key={c}
                      className="flex items-center gap-3 p-4 rounded-[16px] bg-white border border-[#0A0A0A]/5"
                    >
                      <span className="w-9 h-9 rounded-full bg-[#F7F5F2] flex items-center justify-center text-[14px]">
                        ✓
                      </span>
                      <span className="text-[13px] font-[600]">{c}</span>
                    </div>
                  ))}
                </div>
              )}

              {y === "floorplan" && (
                <div className="rounded-[28px] bg-white border border-[#0A0A0A]/5 p-8 max-w-[560px]">
                  <div className="text-[11px] tracking-[0.14em] font-[700] opacity-40 mb-6">
                    LEVEL 01 — ARCHITECTURAL SKETCH
                  </div>
                  <svg viewBox="0 0 400 260" className="w-full h-auto">
                    <rect x="20" y="20" width="360" height="220" fill="none" stroke="#0A0A0A" strokeWidth="1.2" strokeDasharray="6 6" rx="8" />
                    <rect x="20" y="20" width="140" height="90" fill="#F7F5F2" stroke="#0A0A0A" strokeWidth="1" />
                    <rect x="180" y="20" width="200" height="90" fill="#E8E2DB" stroke="#0A0A0A" strokeWidth="1" />
                    <rect x="20" y="130" width="100" height="110" fill="#F7F5F2" stroke="#0A0A0A" strokeWidth="1" />
                    <rect x="140" y="130" width="240" height="110" fill="none" stroke="#0A0A0A" strokeWidth="1" />
                    <text x="30" y="50" fontSize="10" fontWeight="600" fill="#0A0A0A">
                      LIVING — 260 FT²
                    </text>
                    <text x="190" y="50" fontSize="10" fontWeight="600" fill="#0A0A0A">
                      TERRACE / POOL
                    </text>
                    <text x="30" y="160" fontSize="10" fontWeight="600" fill="#0A0A0A">
                      BED 1
                    </text>
                    <text x="150" y="160" fontSize="10" fontWeight="600" fill="#0A0A0A">
                      OPEN PLAN — GALLERY
                    </text>
                  </svg>
                  <div className="mt-6 text-[12px] opacity-50">
                    Not to scale. Full CAD + material board available after viewing.
                  </div>
                </div>
              )}

              {y === "neighborhood" && (
                <div className="max-w-[60ch] space-y-4 text-[14px] leading-[1.7]">
                  <p className="opacity-80">
                    <strong className="text-[#0A0A0A]">Beverly Hills / Bel Air / Westside:</strong> Each Noir pocket has
                    a rhythm. Beverly Hills — Trousdale, Rodeo Drive, 12 minutes to Century City. Bel Air &amp; Holmby
                    Hills — gated canyons, country clubs, no through-traffic by design. Malibu &amp; Pacific Palisades —
                    bluff geology, marine layer mornings, indoor-outdoor California modern.
                  </p>
                  <p className="opacity-60">
                    Walk Score 72, quiet at night 92, light quality exceptional. Erewhon, Blue Bottle, top-rated LAUSD
                    and private schools, and hiking in the Santa Monica Mountains within minutes. We include a
                    neighborhood dossier with HOA docs, disclosure packet, Walk Score, and comps from the MLS.
                  </p>
                </div>
              )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={slideFromRight}
          className="lg:sticky lg:top-[88px] rounded-[28px] bg-white border border-[#0A0A0A]/[0.06] shadow-[0_20px_60px_-24px_rgba(0,0,0,0.25)] p-7"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-[32px] font-[800] tracking-[-0.04em] leading-none">{formatPrice(M.price)}</div>
              <div className="mt-2 text-[12px] opacity-50 tracking-[0.06em]">
                {M.location}, {M.city} • {M.sqft.toLocaleString()} FT²
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#F7F5F2] flex items-center justify-center">♡</div>
          </div>

          <div className="mt-6 grid grid-cols-4 gap-2">
            {[
              { k: "BDS", v: M.beds },
              { k: "BTH", v: M.baths },
              { k: "FT²", v: M.sqft },
              { k: "YR", v: M.yearBuilt },
            ].map((c) => (
              <div key={c.k} className="rounded-[14px] bg-[#F7F5F2] p-3 text-center">
                <div className="text-[12px] font-[800]">{c.v === 0 ? "—" : c.v}</div>
                <div className="text-[9px] tracking-[0.1em] font-[700] opacity-40 mt-1">{c.k}</div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-[13px] leading-[1.6] opacity-70">{M.description.slice(0, 160)}...</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {M.amenities.slice(0, 6).map((c) => (
              <span
                key={c}
                className="px-3 py-1 rounded-full bg-[#F7F5F2] text-[10px] font-[600] tracking-[0.04em]"
              >
                {c}
              </span>
            ))}
          </div>

          <div className="mt-8 rounded-[20px] bg-[#F7F5F2] p-4 flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-[#0A0A0A] text-white flex items-center justify-center font-[700] text-[13px]">
              NR
            </div>
            <div className="flex-1">
              <div className="text-[13px] font-[700]">Noir Representative</div>
              <div className="text-[11px] opacity-60">Curator • Los Angeles Archive</div>
            </div>
            <div className="w-2 h-2 rounded-full bg-[#3D4A3C]" />
          </div>

          <div className="mt-6 space-y-3">
            <input
              placeholder="Your name"
              className="w-full h-[46px] rounded-[14px] bg-[#F7F5F2] px-4 text-[13px] outline-none focus:ring-2 focus:ring-[#0A0A0A]/10"
            />
            <input
              placeholder="Email address"
              className="w-full h-[46px] rounded-[14px] bg-[#F7F5F2] px-4 text-[13px] outline-none focus:ring-2 focus:ring-[#0A0A0A]/10"
            />
            <textarea
              placeholder="Tell us about your search..."
              className="w-full min-h-[86px] rounded-[14px] bg-[#F7F5F2] p-4 text-[13px] outline-none focus:ring-2 focus:ring-[#0A0A0A]/10 resize-none"
            />
          </div>

          <button
            onClick={() => alert("Tour request captured. Noir will respond within 2 hours.")}
            className="mt-5 w-full h-[52px] rounded-[16px] bg-[#0A0A0A] text-white text-[12px] tracking-[0.08em] font-[700] hover:bg-black transition"
          >
            SCHEDULE PRIVATE TOUR →
          </button>
          <div className="mt-3 text-center text-[10px] tracking-[0.06em] opacity-40">
            PRIVATE VIEWINGS • NO BROKERS • ARCHIVE ACCESS
          </div>
        </motion.div>
      </div>

      <motion.div variants={fadeUp} className="mt-20">
        <div className="flex items-end justify-between mb-6">
          <h3 className="text-[28px] font-[700] tracking-[-0.03em]">Similar — same typology</h3>
          <button
            onClick={onBackToListings}
            className="text-[11px] font-[700] tracking-[0.08em] opacity-60 hover:opacity-100"
          >
            VIEW ALL →
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {PROPERTIES.filter((c) => c.type === M.type && c.id !== M.id)
            .slice(0, 3)
            .map((c, i) => (
              <motion.button
                key={c.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                onClick={() => onOpen(c.id)}
                className="group text-left rounded-[24px] overflow-hidden bg-white border border-[#0A0A0A]/5 hover:-translate-y-1 transition-all"
              >
                <div className="relative aspect-[1.3/1] bg-[#E8E2DB] overflow-hidden">
                  <img
                    src={c.images[0]}
                    alt={c.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.05] transition duration-700"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white text-[11px] font-[700]">
                    {formatPrice(c.price)}
                  </span>
                </div>
                <div className="p-4">
                  <div className="text-[15px] font-[700] tracking-[-0.01em]">{c.title}</div>
                  <div className="text-[11px] opacity-50 mt-1">
                    {c.location} • {c.sqft.toLocaleString()} ft²
                  </div>
                </div>
              </motion.button>
            ))}
        </div>
      </motion.div>
    </motion.main>
  );
}
