import { formatPrice, type Property } from "../data/properties";

interface Props {
  hero: Property;
  isSaved: boolean;
  onToggleSave: (id: number, e?: React.MouseEvent) => void;
}

export default function Hero({ hero, isSaved, onToggleSave }: Props) {
  return (
    <section className="relative pt-10 md:pt-20 pb-10">
      <div className="grid md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-10 md:gap-6 items-start">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8E2DB] text-[10px] tracking-[0.14em] font-[700] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C96A4A]" />
            EDITORIAL COLLECTION 2026
          </div>
          <h1 className="hero-headline text-[48px] sm:text-[56px] md:text-[84px] lg:text-[96px] max-w-[7ch]">
            Homes <span className="font-[300] italic tracking-[-0.06em]">that</span>
            <br />
            shape you.
          </h1>
          <p className="mt-8 text-[16px] md:text-[18px] leading-[1.6] max-w-[44ch] opacity-60 font-[400]">
            A curated archive of hillside estates, mid-century villas, and skyline penthouses across Los
            Angeles. Not listings — residences with point of view.
          </p>
          <div className="mt-10 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((c) => (
                <div
                  key={c}
                  className="w-10 h-10 rounded-full bg-[#E8E2DB] border-2 border-[#F7F5F2] flex items-center justify-center text-[10px] font-[700]"
                >
                  {String.fromCharCode(64 + c)}
                </div>
              ))}
            </div>
            <div className="text-[12px] leading-[1.3]">
              <div className="font-[600] tracking-[-0.01em]">Trusted by 340+ Angelenos</div>
              <div className="opacity-50">Architects, founders, producers</div>
            </div>
          </div>
        </div>

        <div className="relative min-w-0">
          <div className="relative rounded-[32px] overflow-hidden bg-[#E8E2DB] aspect-[4/4.6] md:aspect-[4/5] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.35)] group">
            <img
              src={hero.images[0]}
              alt={hero.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.6s] group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />
            <div className="absolute top-5 left-5 right-5 flex justify-between">
              <div className="px-3.5 py-2 rounded-full bg-white/90 backdrop-blur text-[11px] font-[700] tracking-[0.06em]">
                FEATURED • {hero.location.toUpperCase()}
              </div>
              <button
                onClick={(e) => onToggleSave(1, e)}
                className={`w-10 h-10 rounded-full backdrop-blur flex items-center justify-center transition ${
                  isSaved ? "bg-[#0A0A0A] text-white" : "bg-white/90 hover:bg-white"
                }`}
              >
                {isSaved ? "♥" : "♡"}
              </button>
            </div>
            <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-3">
              {[
                { k: "VALUE", v: formatPrice(hero.price) },
                { k: "SIZE", v: `${hero.sqft.toLocaleString()} FT²` },
                { k: "YEAR", v: `${hero.yearBuilt}` },
              ].map((c) => (
                <div key={c.k} className="rounded-[20px] bg-white/90 backdrop-blur p-4">
                  <div className="text-[9px] tracking-[0.14em] font-[700] opacity-50">{c.k}</div>
                  <div className="text-[15px] font-[700] tracking-[-0.02em] mt-1">{c.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
