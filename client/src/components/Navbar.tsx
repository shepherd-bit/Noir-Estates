import type { View } from "../App";

interface Props {
  view: View;
  onNavigate: (v: View, msg?: string) => void;
  onResetFilters: () => void;
}

export default function Navbar({ view, onNavigate, onResetFilters }: Props) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[20px] bg-[#F7F5F2]/80 border-b border-[#0A0A0A]/[0.06] overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 h-[72px] flex items-center justify-between">
        <button
          onClick={() => {
            onNavigate("landing", "Index — Noir Archive");
            window.scrollTo(0, 0);
          }}
          className="flex items-center gap-2 group"
        >
          <span className="text-[22px] font-[800] tracking-[-0.04em]">NOIR.</span>
          <span className="h-[18px] w-[1px] bg-[#0A0A0A]/20" />
          <span className="text-[11px] tracking-[0.2em] font-[600] mt-[2px] opacity-60 group-hover:opacity-100 transition">
            ESTATE
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8 text-[13px] tracking-[0.04em] font-[500]">
          <button
            onClick={() => {
              onNavigate("landing", "Index — Noir Archive refreshed");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`hover:opacity-60 transition ${view === "landing" ? "opacity-100" : "opacity-60"}`}
          >
            INDEX
          </button>
          <button
            onClick={() => {
              onNavigate("listings");
              onResetFilters();
            }}
            className={`hover:opacity-60 transition ${view === "listings" ? "opacity-100" : "opacity-60"}`}
          >
            PROPERTIES
          </button>
          <span className="opacity-20">—</span>
          <span className="opacity-40 font-[400]">BEVERLY HILLS / BEL AIR / MALIBU</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 text-[11px] tracking-[0.08em] font-[600] opacity-60">
            <span className="w-2 h-2 rounded-full bg-[#3D4A3C] animate-pulse" />
            12 LIVE
          </div>
          <button
            onClick={() => {
              onNavigate("listings", "Listing portal — submit your residence");
              window.scrollTo(0, 0);
            }}
            className="h-[38px] px-5 rounded-full bg-[#0A0A0A] text-[#F7F5F2] text-[12px] tracking-[0.08em] font-[600] hover:bg-[#1a1a1a] transition"
          >
            LIST PROPERTY
          </button>
        </div>
      </div>
    </nav>
  );
}
