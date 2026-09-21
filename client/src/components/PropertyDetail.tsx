import { AnimatePresence, motion } from "framer-motion";
import { formatPrice, getNeighborhood, type Property } from "../data/properties";
import { fadeUp, scaleIn, slideFromRight, staggerParent } from "../lib/anim";

export type DetailTab = "neighborhood";

interface Props {
  property: Property;
  allProperties: Property[];
  imageIndex: number;
  setImageIndex: (v: number) => void;
  tab?: DetailTab;
  setTab?: (v: DetailTab) => void;
  onBackToListings: () => void;
  onBackToLanding: () => void;
  onOpen: (id: number) => void;
}

export default function PropertyDetail({
  property: M,
  allProperties,
  imageIndex: p,
  setImageIndex: h,
  onBackToListings,
  onBackToLanding,
  onOpen,
}: Props) {
  const imageCount = M.images.length;
  const safeIndex = imageCount === 0 ? 0 : p % imageCount;
  const currentImage = imageCount === 0 ? undefined : M.images[safeIndex];

  const fallbackNeighborhood = getNeighborhood(M.location);
  const neighborhood = {
    title: M.neighborhoodTitle ?? `${M.location.toUpperCase()}${M.city ? ` • ${M.city.toUpperCase()}` : ""}`,
    tagline: M.neighborhoodTagline ?? fallbackNeighborhood.tagline,
    description: M.neighborhoodDescription ?? fallbackNeighborhood.description,
    highlights:
      M.dining || M.shopping || M.schools || M.outdoors
        ? [
            { label: "Dining & Cafés", value: M.dining ?? "—" },
            { label: "Shopping", value: M.shopping ?? "—" },
            { label: "Schools", value: M.schools ?? "—" },
            { label: "Outdoors", value: M.outdoors ?? "—" },
          ]
        : fallbackNeighborhood.highlights,
    stats:
      M.walkScore !== undefined || M.uclaTime || M.gettyTime
        ? [
            { label: "Walk Score", value: M.walkScore !== undefined ? `${M.walkScore}` : "—" },
            { label: "To UCLA", value: M.uclaTime ?? "—" },
            { label: "To Getty", value: M.gettyTime ?? "—" },
          ]
        : fallbackNeighborhood.stats,
  };

  const similar = allProperties.filter((c) => c.type === M.type && c.id !== M.id).slice(0, 3);

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
              {currentImage ? (
                <motion.img
                  key={`${M.id}-${safeIndex}`}
                  src={currentImage}
                  alt={M.title}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-[13px] opacity-50">
                  No images in Strapi Gallery
                </div>
              )}
            </AnimatePresence>
            <div className="absolute top-5 left-5 flex gap-2">
              <div className="px-4 py-2 rounded-full bg-white/90 backdrop-blur text-[11px] font-[800]">
                {formatPrice(M.price)}
              </div>
              <div className="px-4 py-2 rounded-full bg-[#0A0A0A] text-white text-[11px] font-[700] tracking-[0.06em] uppercase">
                {M.type}
              </div>
            </div>
            {imageCount > 0 && (
              <>
                <div className="absolute top-5 right-5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-[11px] font-[700]">
                  {safeIndex + 1} / {imageCount}
                </div>
                <button
                  onClick={() => h((safeIndex - 1 + imageCount) % imageCount)}
                  className="absolute left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:bg-white transition"
                >
                  ‹
                </button>
                <button
                  onClick={() => h((safeIndex + 1) % imageCount)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:bg-white transition"
                >
                  ›
                </button>
              </>
            )}
            <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
              <div className="px-4 py-3 rounded-[16px] bg-[#0A0A0A]/80 backdrop-blur text-white">
                <div className="text-[11px] tracking-[0.1em] opacity-70">
                  {M.location.toUpperCase()}
                  {M.coordinates ? ` • ${M.coordinates}` : ""}
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
                  safeIndex === idx ? "border-[#0A0A0A]" : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <img src={c} alt="" className="absolute inset-0 w-full h-full object-cover" />
              </button>
            ))}
          </div>

          <div id="neighborhood-overview" className="mt-10 scroll-mt-[104px]">
            <div className="flex gap-2 p-1 rounded-full bg-[#E8E2DB] w-fit">
              <span className="px-5 h-[36px] rounded-full text-[12px] font-[600] tracking-[0.04em] bg-[#0A0A0A] text-white flex items-center">
                Neighborhood Overview
              </span>
            </div>

            <div className="mt-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={M.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="max-w-[64ch]">
                    <div className="text-[11px] tracking-[0.14em] font-[700] opacity-40">
                      {neighborhood.title}
                    </div>
                    <div className="mt-2 text-[15px] font-[600] opacity-70">{neighborhood.tagline}</div>
                    <p className="mt-4 text-[16px] leading-[1.7] opacity-80">{neighborhood.description}</p>
                    <div className="mt-8 grid md:grid-cols-2 gap-3">
                      {neighborhood.highlights.map((c) => (
                        <div
                          key={c.label}
                          className="p-4 rounded-[16px] bg-white border border-[#0A0A0A]/5"
                        >
                          <div className="text-[10px] tracking-[0.14em] font-[700] opacity-40">
                            {c.label.toUpperCase()}
                          </div>
                          <div className="mt-2 text-[13px] font-[600] leading-[1.5]">{c.value}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      {neighborhood.stats.map((c) => (
                        <div
                          key={c.label}
                          className="rounded-[16px] bg-[#0A0A0A] text-white p-4 text-center"
                        >
                          <div className="text-[14px] font-[800]">{c.value}</div>
                          <div className="text-[9px] tracking-[0.1em] font-[700] opacity-60 mt-1">
                            {c.label.toUpperCase()}
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="mt-6 text-[12px] opacity-50">
                      We include a neighborhood dossier with HOA docs, disclosure packet, Walk Score, and MLS comps
                      after viewing.
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <div className="lg:sticky lg:top-[88px] lg:self-start">
        <motion.div
          variants={slideFromRight}
          className="lg:max-h-[calc(100vh-104px)] lg:overflow-y-auto lg:overscroll-contain rounded-[28px] bg-white border border-[#0A0A0A]/[0.06] shadow-[0_20px_60px_-24px_rgba(0,0,0,0.25)] p-7 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#0A0A0A]/15"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-[32px] font-[800] tracking-[-0.04em] leading-none">{formatPrice(M.price)}</div>
              <div className="mt-2 text-[12px] opacity-50 tracking-[0.06em]">
                {M.location}{M.city ? `, ${M.city}` : ""} • {M.sqft.toLocaleString()} FT²
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
              <div className="text-[13px] font-[700]">{M.agentName ?? "Noir Representative"}</div>
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
        {similar.length === 0 ? (
          <div className="text-[13px] opacity-60">No similar residences published yet — publish more in Strapi.</div>
        ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {similar.map((c, i) => (
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
                  {c.images[0] ? (
                    <img
                      src={c.images[0]}
                      alt={c.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.05] transition duration-700"
                    />
                  ) : null}
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
        )}
      </motion.div>
    </motion.main>
  );
}
