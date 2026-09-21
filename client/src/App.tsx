import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Toast from "./components/Toast";
import Hero from "./components/Hero";
import CuratedSection from "./components/CuratedSection";
import ListingsView, { type Layout, type SortKey } from "./components/ListingsView";
import PropertyDetail, { type DetailTab } from "./components/PropertyDetail";
import Footer from "./components/Footer";
import { pageVariants } from "./lib/anim";
import {
  PRICE_MAX,
  PRICE_MIN,
  PROPERTIES,
  SQFT_MAX,
  SQFT_MIN,
  YEAR_MAX,
  YEAR_MIN,
} from "./data/properties";

export type View = "landing" | "listings" | "detail";

export default function App() {
  const [view, setView] = useState<View>("landing");
  const [selectedId, setSelectedId] = useState(1);
  const [landingFilter, setLandingFilter] = useState("all");
  const [layout, setLayout] = useState<Layout>("grid");
  const [sort, setSort] = useState<SortKey>("featured");
  const [tab, setTab] = useState<DetailTab>("neighborhood");
  const [imageIndex, setImageIndex] = useState(0);
  const [saved, setSaved] = useState<Set<number>>(new Set());
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2200);
  };

  const toggleSave = (id: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSaved((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
    showToast(saved.has(id) ? "Removed from moodboard" : "Saved to moodboard — 1 added");
  };

  const [locations, setLocations] = useState<string[]>([]);
  const [price, setPrice] = useState<[number, number]>([PRICE_MIN, PRICE_MAX]);
  const [types, setTypes] = useState<string[]>([]);
  const [beds, setBeds] = useState(0);
  const [baths, setBaths] = useState(0);
  const [sqft, setSqft] = useState<[number, number]>([SQFT_MIN, SQFT_MAX]);
  const [amenityFilters, setAmenityFilters] = useState<string[]>([]);
  const [years, setYears] = useState<[number, number]>([YEAR_MIN, YEAR_MAX]);

  const [searchLocation, setSearchLocation] = useState("");
  const [searchType, setSearchType] = useState("");
  const [minInput, setMinInput] = useState("");
  const [maxInput, setMaxInput] = useState("");

  const selected = useMemo(
    () => PROPERTIES.find((c) => c.id === selectedId) || PROPERTIES[0],
    [selectedId],
  );

  const filtered = useMemo(() => {
    let c = [...PROPERTIES];
    if (locations.length > 0)
      c = c.filter((V) =>
        locations.some((W) => {
          const vn = W.toLowerCase();
          return (
            (V.location + " " + V.city).toLowerCase().includes(vn.split(" ")[0]) ||
            W.toLowerCase().includes(V.location.toLowerCase())
          );
        }),
      );
    c = c.filter((V) => V.price >= price[0] && V.price <= price[1]);
    if (types.length > 0) c = c.filter((V) => types.includes(V.type));
    if (beds > 0) c = c.filter((V) => V.beds >= beds);
    if (baths > 0) c = c.filter((V) => V.baths >= baths);
    c = c.filter((V) => V.sqft >= sqft[0] && V.sqft <= sqft[1]);
    if (amenityFilters.length > 0)
      c = c.filter((V) => amenityFilters.every((W) => V.amenities.includes(W)));
    c = c.filter((V) => V.yearBuilt >= years[0] && V.yearBuilt <= years[1]);
    switch (sort) {
      case "price-low":
        c.sort((V, W) => V.price - W.price);
        break;
      case "price-high":
        c.sort((V, W) => W.price - V.price);
        break;
      case "newest":
        c.sort((V, W) => W.yearBuilt - V.yearBuilt);
        break;
      case "sqft":
        c.sort((V, W) => W.sqft - V.sqft);
        break;
      default:
        c.sort((V, W) => (W.featured ? 1 : 0) - (V.featured ? 1 : 0));
    }
    return c;
  }, [locations, price, types, beds, baths, sqft, amenityFilters, years, sort]);

  const curated = useMemo(() => {
    let c = PROPERTIES.filter((V) => V.featured);
    if (landingFilter !== "all") c = c.filter((V) => V.type === landingFilter);
    return c.slice(0, 4);
  }, [landingFilter]);

  const handleSearch = () => {
    const c: string[] = [];
    if (searchLocation) c.push(searchLocation);
    setLocations(c);
    if (searchType) setTypes([searchType]);
    const V = minInput ? parseInt(minInput.replace(/[^0-9]/g, "")) : PRICE_MIN;
    const W = maxInput ? parseInt(maxInput.replace(/[^0-9]/g, "")) : PRICE_MAX;
    if (!isNaN(V) || !isNaN(W))
      setPrice([isNaN(V) ? PRICE_MIN : V, isNaN(W) ? PRICE_MAX : W]);
    navigate("listings");
    window.scrollTo(0, 0);
  };

  const clearAll = () => {
    setLocations([]);
    setPrice([PRICE_MIN, PRICE_MAX]);
    setTypes([]);
    setBeds(0);
    setBaths(0);
    setSqft([SQFT_MIN, SQFT_MAX]);
    setAmenityFilters([]);
    setYears([YEAR_MIN, YEAR_MAX]);
  };

  const navigate = (v: View, msg?: string) => {
    setView(v);
    if (msg) showToast(msg);
  };

  const openDetail = (id: number) => {
    setSelectedId(id);
    setImageIndex(0);
    setView("detail");
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#F7F5F2] text-[#0A0A0A] antialiased selection:bg-[#C96A4A] selection:text-white pt-[72px]">
      <Toast message={toast} />
      <Navbar view={view} onNavigate={navigate} onResetFilters={clearAll} />

      <AnimatePresence mode="wait">
      {view === "landing" && (
        <motion.main
          key="landing"
          variants={pageVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          className="mx-auto max-w-[1440px] px-6 md:px-10 overflow-hidden"
        >
          <Hero hero={PROPERTIES[0]} isSaved={saved.has(1)} onToggleSave={toggleSave} />
          <CuratedSection
            filter={landingFilter}
            setFilter={setLandingFilter}
            items={curated}
            saved={saved}
            onToggleSave={toggleSave}
            onOpen={openDetail}
            onViewAll={() => {
              setView("listings");
              window.scrollTo(0, 0);
            }}
          />
          <Footer />
        </motion.main>
      )}

      {view === "listings" && (
        <motion.div key="listings" variants={pageVariants} initial="hidden" animate="show" exit="exit">
        <ListingsView
          results={filtered}
          layout={layout}
          setLayout={setLayout}
          sort={sort}
          setSort={setSort}
          filters={{
            locations,
            price,
            types,
            beds,
            baths,
            sqft,
            amenities: amenityFilters,
            years,
          }}
          setLocations={setLocations}
          setPrice={setPrice}
          setTypes={setTypes}
          setBeds={setBeds}
          setBaths={setBaths}
          setSqft={setSqft}
          setAmenities={setAmenityFilters}
          setYears={setYears}
          onClear={clearAll}
          onBack={() => setView("landing")}
          onOpen={openDetail}
          saved={saved}
          onToggleSave={toggleSave}
        />
        </motion.div>
      )}

      {view === "detail" && (
        <motion.div key={`detail-${selectedId}`} variants={pageVariants} initial="hidden" animate="show" exit="exit">
        <PropertyDetail
          property={selected}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
          tab={tab}
          setTab={setTab}
          onBackToListings={() => setView("listings")}
          onBackToLanding={() => setView("landing")}
          onOpen={openDetail}
        />
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
}
