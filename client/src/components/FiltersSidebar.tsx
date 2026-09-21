import { motion } from "framer-motion";
import {
  AMENITIES,
  LOCATIONS,
  PRICE_MAX,
  PRICE_MIN,
  SQFT_MAX,
  SQFT_MIN,
  YEAR_MAX,
  YEAR_MIN,
  formatPrice,
} from "../data/properties";

import { slideFromLeft } from "../lib/anim";

export interface FilterState {
  locations: string[];
  price: [number, number];
  types: string[];
  beds: number;
  baths: number;
  sqft: [number, number];
  amenities: string[];
  years: [number, number];
}

interface Props {
  filters: FilterState;
  setLocations: (v: string[]) => void;
  setPrice: (v: [number, number]) => void;
  setTypes: (updater: (prev: string[]) => string[]) => void;
  setBeds: (v: number) => void;
  setBaths: (v: number) => void;
  setSqft: (v: [number, number]) => void;
  setAmenities: (updater: (prev: string[]) => string[]) => void;
  setYears: (v: [number, number]) => void;
  onClear: () => void;
}

function toggleInList(list: string[], v: string) {
  return list.includes(v) ? list.filter((x) => x !== v) : [...list, v];
}

export default function FiltersSidebar({
  filters,
  setLocations,
  setPrice,
  setTypes,
  setBeds,
  setBaths,
  setSqft,
  setAmenities,
  setYears,
  onClear,
}: Props) {
  return (
    <motion.aside
      variants={slideFromLeft}
      initial="hidden"
      animate="show"
      className="rounded-[28px] bg-white border border-[#0A0A0A]/[0.06] shadow-[0_10px_40px_-20px_rgba(0,0,0,0.15)] p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="text-[13px] font-[700] tracking-[0.08em]">FILTERS</div>
        <button
          onClick={onClear}
          className="text-[11px] font-[600] tracking-[0.06em] px-3 h-7 rounded-full bg-[#F7F5F2] hover:bg-[#E8E2DB] transition"
        >
          CLEAR ALL
        </button>
      </div>

      <div className="space-y-8">
        <div>
          <div className="text-[11px] tracking-[0.14em] font-[700] opacity-40 mb-3">LOCATION</div>
          <div className="space-y-2.5">
            {LOCATIONS.map((c) => (
              <label key={c} className="flex items-center gap-3 text-[13px] font-[500] cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.locations.includes(c)}
                  onChange={(e) => {
                    setLocations(
                      e.target.checked
                        ? [...filters.locations, c]
                        : filters.locations.filter((x) => x !== c),
                    );
                  }}
                  className="w-[18px] h-[18px] rounded-[6px] accent-[#0A0A0A]"
                />
                <span className="group-hover:opacity-70">{c}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-3">
            <span className="text-[11px] tracking-[0.14em] font-[700] opacity-40">PRICE RANGE</span>
            <span className="text-[11px] font-[700] px-2 py-1 rounded-full bg-[#F7F5F2]">
              {formatPrice(filters.price[0])} — {formatPrice(filters.price[1])}
            </span>
          </div>
          <div className="space-y-3">
            <input
              type="range"
              min={PRICE_MIN}
              max={PRICE_MAX}
              step={50000}
              value={filters.price[0]}
              onChange={(e) => setPrice([parseInt(e.target.value), filters.price[1]])}
              className="w-full accent-[#0A0A0A]"
            />
            <input
              type="range"
              min={PRICE_MIN}
              max={PRICE_MAX}
              step={50000}
              value={filters.price[1]}
              onChange={(e) => setPrice([filters.price[0], parseInt(e.target.value)])}
              className="w-full accent-[#C96A4A]"
            />
          </div>
        </div>

        <div>
          <div className="text-[11px] tracking-[0.14em] font-[700] opacity-40 mb-3">PROPERTY TYPE</div>
          <div className="flex gap-2 flex-wrap">
            {["apartment", "villa", "land"].map((c) => (
              <button
                key={c}
                onClick={() => setTypes((prev) => toggleInList(prev, c))}
                className={`px-4 h-[36px] rounded-full text-[12px] font-[600] capitalize border transition ${
                  filters.types.includes(c)
                    ? "bg-[#0A0A0A] text-white border-[#0A0A0A]"
                    : "bg-[#F7F5F2] border-transparent hover:bg-[#E8E2DB]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-[11px] tracking-[0.14em] font-[700] opacity-40 mb-3">BEDROOMS</div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setBeds(Math.max(0, filters.beds - 1))}
                className="w-8 h-8 rounded-full bg-[#F7F5F2] font-[700]"
              >
                −
              </button>
              <span className="w-8 text-center font-[700] text-[14px]">{filters.beds}</span>
              <button
                onClick={() => setBeds(Math.min(6, filters.beds + 1))}
                className="w-8 h-8 rounded-full bg-[#0A0A0A] text-white font-[700]"
              >
                +
              </button>
            </div>
          </div>
          <div>
            <div className="text-[11px] tracking-[0.14em] font-[700] opacity-40 mb-3">BATHROOMS</div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setBaths(Math.max(0, filters.baths - 1))}
                className="w-8 h-8 rounded-full bg-[#F7F5F2] font-[700]"
              >
                −
              </button>
              <span className="w-8 text-center font-[700] text-[14px]">{filters.baths}</span>
              <button
                onClick={() => setBaths(Math.min(6, filters.baths + 1))}
                className="w-8 h-8 rounded-full bg-[#0A0A0A] text-white font-[700]"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-3">
            <span className="text-[11px] tracking-[0.14em] font-[700] opacity-40">SQUARE FOOTAGE</span>
            <span className="text-[11px] font-[700]">
              {filters.sqft[0].toLocaleString()} — {filters.sqft[1].toLocaleString()} ft²
            </span>
          </div>
          <input
            type="range"
            min={SQFT_MIN}
            max={SQFT_MAX}
            step={100}
            value={filters.sqft[0]}
            onChange={(e) => setSqft([parseInt(e.target.value), filters.sqft[1]])}
            className="w-full accent-[#0A0A0A]"
          />
          <input
            type="range"
            min={SQFT_MIN}
            max={SQFT_MAX}
            step={100}
            value={filters.sqft[1]}
            onChange={(e) => setSqft([filters.sqft[0], parseInt(e.target.value)])}
            className="w-full accent-[#0A0A0A] mt-2"
          />
        </div>

        <div>
          <div className="text-[11px] tracking-[0.14em] font-[700] opacity-40 mb-3">AMENITIES</div>
          <div className="flex flex-wrap gap-2">
            {AMENITIES.map((c) => (
              <button
                key={c}
                onClick={() => setAmenities((prev) => toggleInList(prev, c))}
                className={`px-3 h-[30px] rounded-full text-[11px] font-[600] border transition ${
                  filters.amenities.includes(c)
                    ? "bg-[#3D4A3C] text-white border-[#3D4A3C]"
                    : "bg-[#F7F5F2] border-transparent hover:bg-[#E8E2DB]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-3">
            <span className="text-[11px] tracking-[0.14em] font-[700] opacity-40">YEAR BUILT</span>
            <span className="text-[11px] font-[700]">
              {filters.years[0]} — {filters.years[1]}
            </span>
          </div>
          <input
            type="range"
            min={YEAR_MIN}
            max={YEAR_MAX}
            value={filters.years[0]}
            onChange={(e) => setYears([parseInt(e.target.value), filters.years[1]])}
            className="w-full accent-[#0A0A0A]"
          />
          <input
            type="range"
            min={YEAR_MIN}
            max={YEAR_MAX}
            value={filters.years[1]}
            onChange={(e) => setYears([filters.years[0], parseInt(e.target.value)])}
            className="w-full accent-[#0A0A0A] mt-2"
          />
        </div>
      </div>
    </motion.aside>
  );
}
