import imgPe from "../assets/img-pe.webp";
import imgWe from "../assets/img-we.webp";
import imgHe from "../assets/img-he.webp";
import imgMe from "../assets/img-me.webp";
import imgXe from "../assets/img-xe.webp";
import imgJe from "../assets/img-je.webp";

export type PropertyType = "villa" | "apartment" | "land";

export interface Property {
  id: number;
  title: string;
  price: number;
  location: string;
  city: string;
  type: PropertyType;
  beds: number;
  baths: number;
  sqft: number;
  yearBuilt: number;
  amenities: string[];
  featured: boolean;
  description: string;
  images: string[];
  coordinates: string;
}

export const PROPERTIES: Property[] = [
  {id:1,title:"Trousdale Concrete House",price:12450000,location:"Beverly Hills",city:"Los Angeles",type:"villa",beds:5,baths:5,sqft:6200,yearBuilt:2021,amenities:["Pool","Guest House","EV Garage","Smart Home","Wine Cellar"],featured:true,description:"A monolithic concrete retreat above Trousdale Estates where light carves through mass. Designed by Atelier Noir LA, walls of glass frame views from the downtown skyline to the Pacific. Raw, honest, and impossibly serene — five minutes from Rodeo Drive.",images: [imgPe, imgWe, imgHe, imgMe, imgXe, imgJe],coordinates:"34°05'N 118°24'W"},
  {id:2,title:"Carbon Beach Retreat",price:18500000,location:"Malibu",city:"Malibu",type:"villa",beds:4,baths:5,sqft:5400,yearBuilt:2022,amenities:["Pool","Ocean View","Guest House","Beach Access","Rooftop Deck"],featured:true,description:"Perched above Billionaire's Beach on Carbon Beach, this retreat dissolves into the Pacific. Whitewashed teak, outdoor showers, walls that pocket away — and an infinity edge that never ends. Surf break at the stairs, Soho House 10 minutes up PCH.",images: [imgJe, imgPe, imgMe, imgHe, imgXe, imgWe],coordinates:"34°02'N 118°40'W"},
  {id:3,title:"Atrium 12A — San Vicente",price:1295000,location:"Brentwood",city:"Los Angeles",type:"apartment",beds:2,baths:2,sqft:1350,yearBuilt:2023,amenities:["Gym","Smart Home","EV Garage","Rooftop Deck"],featured:true,description:"Minimalist condo off San Vicente with gallery-height ceilings. White oak floors, fluted glass, and a chef's kitchen with Wolf and Sub-Zero. Morning run in Brentwood Country Club loop, afternoon at the Getty.",images: [imgHe, imgXe, imgMe, imgPe, imgWe, imgJe],coordinates:"34°03'N 118°28'W"},
  {id:4,title:"Palisades Bluff Parcel",price:4750000,location:"Pacific Palisades",city:"Los Angeles",type:"land",beds:0,baths:0,sqft:8700,yearBuilt:1990,amenities:["Ocean View","Beach Access","Guest House"],featured:true,description:"Eight thousand seven hundred square feet of bluff-top with whitewater views from Palos Verdes to Point Dume. Fully entitled, coastal development permit in hand. The last buildable parcel on this stretch of Corona del Mar.",images: [imgJe, imgWe, imgMe, imgPe, imgXe, imgHe],coordinates:"34°02'N 118°31'W"},
  {id:5,title:"Bel Air Canopy House",price:16200000,location:"Bel Air",city:"Los Angeles",type:"villa",beds:5,baths:6,sqft:7100,yearBuilt:2020,amenities:["Pool","Guest House","EV Garage","Gym","Wine Cellar","Smart Home"],featured:false,description:"Hidden under 100-year-old sycamores and eucalyptus in lower Bel Air. A glass pavilion wrapped in canyon. You hear hummingbirds, not the 405. Gated, hedged, and five minutes to the Bel-Air Country Club.",images: [imgPe, imgHe, imgXe, imgMe, imgJe, imgWe],coordinates:"34°06'N 118°27'W"},
  {id:6,title:"Penthouse Wilshire",price:3890000,location:"Beverly Hills",city:"Los Angeles",type:"apartment",beds:3,baths:3,sqft:2850,yearBuilt:2024,amenities:["Rooftop Deck","Pool","Gym","Smart Home","EV Garage"],featured:false,description:"Top floor on the Wilshire Corridor. Private rooftop terrace with fire pit and views from Century City to the ocean. Concrete, travertine, and matte black steel. Full-service building with valet, concierge, and residents' spa.",images: [imgMe, imgHe, imgPe, imgXe, imgWe, imgJe],coordinates:"34°04'N 118°24'W"},
  {id:7,title:"Brentwood Canyon Lot",price:2180000,location:"Brentwood",city:"Los Angeles",type:"land",beds:0,baths:0,sqft:6500,yearBuilt:1995,amenities:["Guest House","EV Garage"],featured:false,description:"Canyon-view lot in Brentwood Hills. Previously held as a side-yard, now cleared and surveyed. Zoned for a modern farmhouse compound with ADU — ideal for a creative family or developer. Kenter Canyon Elementary district.",images: [imgWe, imgJe, imgPe, imgMe, imgXe, imgHe],coordinates:"34°03'N 118°29'W"},
  {id:8,title:"Stone Canyon House",price:9750000,location:"Bel Air",city:"Los Angeles",type:"villa",beds:4,baths:5,sqft:5800,yearBuilt:2019,amenities:["Pool","Guest House","Wine Cellar","Smart Home","Gym"],featured:false,description:"Water is the architecture. A courtyard pool reflects the Santa Monica Mountains while every room opens to it through Fleetwood sliders. Stillness as luxury — behind private gates off Stone Canyon Road.",images: [imgHe, imgPe, imgJe, imgMe, imgWe, imgXe],coordinates:"34°06'N 118°26'W"},
  {id:9,title:"Garden Flat 04 — Village",price:1150000,location:"Pacific Palisades",city:"Los Angeles",type:"apartment",beds:1,baths:1,sqft:980,yearBuilt:2022,amenities:["Gym","Smart Home","Rooftop Deck"],featured:false,description:"Gallery living steps from the Palisades Village. Eleven-foot ceilings, polished concrete, and north light perfect for collectors. Walk to Erewhon, Blue Bottle, and the Sunday farmers market.",images: [imgWe, imgHe, imgMe, imgXe, imgPe, imgJe],coordinates:"34°03'N 118°31'W"},
  {id:10,title:"Dume Point Reserve",price:6800000,location:"Malibu",city:"Malibu",type:"land",beds:0,baths:0,sqft:9200,yearBuilt:2005,amenities:["Ocean View","Beach Access","Guest House","Pool"],featured:true,description:"Elevated bluff on Point Dume with 180° Pacific panorama from Zuma to Catalina. Coastal sage and ocean breeze. Approved plans for a main pavilion plus guest house and pool — ready for plan check.",images: [imgJe, imgMe, imgPe, imgWe, imgHe, imgXe],coordinates:"34°00'N 118°48'W"},
  {id:11,title:"Comstock Garden Flat",price:2150000,location:"Holmby Hills",city:"Los Angeles",type:"apartment",beds:3,baths:2,sqft:2100,yearBuilt:2021,amenities:["Guest House","EV Garage","Smart Home","Gym"],featured:false,description:"Warm minimalism off Comstock Avenue. Limewashed walls, oak herringbone, and a kitchen island carved from a single travertine block. Steps to Holmby Park and the Los Angeles Country Club.",images: [imgXe, imgHe, imgMe, imgPe, imgJe, imgWe],coordinates:"34°05'N 118°25'W"},
  {id:12,title:"Fleur Estate — Holmby Hills",price:24000000,location:"Holmby Hills",city:"Los Angeles",type:"villa",beds:6,baths:7,sqft:8900,yearBuilt:2023,amenities:["Pool","Guest House","EV Garage","Gym","Rooftop Deck","Beach Access","Wine Cellar","Home Theater"],featured:true,description:"A private Holmby Hills compound on one of the Flats' most coveted streets. Six suites, detached guest house, and an 80-foot lap pool under mature palms. Movie theater, gym, and three-car showroom garage. UCLA, Century City, and Beverly Hills in minutes.",images: [imgPe, imgJe, imgMe, imgHe, imgXe, imgWe],coordinates:"34°05'N 118°25'W"},
];

export const LOCATIONS: string[] = [
  "Beverly Hills",
  "Bel Air",
  "Holmby Hills",
  "Pacific Palisades",
  "Malibu",
  "Brentwood",
];

export const AMENITIES: string[] = [
  "Pool",
  "Ocean View",
  "Guest House",
  "EV Garage",
  "Gym",
  "Smart Home",
  "Wine Cellar",
  "Rooftop Deck",
  "Beach Access",
  "Home Theater",
];

export const PRICE_MIN = 800000;
export const PRICE_MAX = 25000000;
export const SQFT_MIN = 500;
export const SQFT_MAX = 10000;
export const YEAR_MIN = 1990;
export const YEAR_MAX = 2026;

export function formatPrice(e: number): string {
  if (e >= 1e6) return `$${(e / 1e6).toFixed(e % 1e6 === 0 ? 0 : 1)}M`;
  if (e >= 1000) return `$${Math.round(e / 1000)}K`;
  return `$${e}`;
}

export interface NeighborhoodInfo {
  tagline: string;
  description: string;
  highlights: { label: string; value: string }[];
  stats: { label: string; value: string }[];
}

export const NEIGHBORHOODS: Record<string, NeighborhoodInfo> = {
  "Beverly Hills": {
    tagline: "Trousdale • Rodeo Drive • 12 min to Century City",
    description:
      "Prime Beverly Hills living with tree-lined Flats, Trousdale Estates views, and Rodeo Drive at your door. Days run on Erewhon runs, Blue Bottle mornings, and golden-hour strolls to Canon Gardens. Quiet, patrolled streets with exceptional light and privacy — yet Century City, West Hollywood and the 405 are minutes away.",
    highlights: [
      { label: "Dining & Cafés", value: "Erewhon, Blue Bottle, Spago, Canon restaurants" },
      { label: "Shopping", value: "Rodeo Drive, Beverly Center, Century City Mall" },
      { label: "Schools", value: "Beverly Hills High, Good Shepherd, Harvard-Westlake nearby" },
      { label: "Outdoors", value: "Trousdale Park, Coldwater Canyon hikes, Virginia Robinson Gardens" },
    ],
    stats: [
      { label: "Walk Score", value: "72" },
      { label: "Quiet at night", value: "92" },
      { label: "To Century City", value: "12 min" },
    ],
  },
  Malibu: {
    tagline: "Carbon Beach • PCH • Surf at the stairs",
    description:
      "Billionaire's Beach bluff living with marine-layer mornings and indoor-outdoor California modern. Private beach gates, paddle-outs before work, and sunset dinners on the deck. Soho House Malibu, Nobu and Erewhon Malibu up PCH, with Topanga hiking and Pepperdine minutes away.",
    highlights: [
      { label: "Dining & Cafés", value: "Nobu, Soho House, Erewhon Malibu, Malibu Farm" },
      { label: "Shopping", value: "Malibu Country Mart, Malibu Village" },
      { label: "Schools", value: "Malibu High, Webster Elementary, Pepperdine University" },
      { label: "Outdoors", value: "Carbon Beach access, Zuma, Solstice Canyon trails" },
    ],
    stats: [
      { label: "Beach access", value: "Private gates" },
      { label: "To Santa Monica", value: "25 min" },
      { label: "Air quality", value: "Ocean-clean" },
    ],
  },
  Brentwood: {
    tagline: "San Vicente • Getty • Country Mart loop",
    description:
      "Leafy Brentwood village life off San Vicente — morning runs on the Country Club loop, afternoons at the Getty. Brentwood Country Mart, Erewhon and Tavern for everyday luxury. Top-rated Kenter Canyon Elementary district with Mandeville Canyon trails out the back door.",
    highlights: [
      { label: "Dining & Cafés", value: "Brentwood Country Mart, Erewhon, Tavern, Coral Tree Café" },
      { label: "Shopping", value: "San Vicente shops, Century City Mall 10 min" },
      { label: "Schools", value: "Kenter Canyon Elementary, Brentwood School, Archer" },
      { label: "Outdoors", value: "Mandeville Canyon, Getty gardens, San Vicente run corridor" },
    ],
    stats: [
      { label: "Walk Score", value: "68" },
      { label: "To UCLA", value: "10 min" },
      { label: "To Getty", value: "5 min" },
    ],
  },
  "Pacific Palisades": {
    tagline: "Palisades Village • Bluff parks • Farmers market Sundays",
    description:
      "Village-first coastal living steps from Palisades Village — Erewhon, Blue Bottle and the Sunday farmers market. Bluff-top parks with whitewater views from Palos Verdes to Point Dume, Temescal Canyon hiking, and top-rated Palisades High. Family-quiet, dog-friendly, ocean-breezed.",
    highlights: [
      { label: "Dining & Cafés", value: "Erewhon Village, Blue Bottle, Porta Via, Edo Sushi" },
      { label: "Shopping", value: "Palisades Village, Whole Foods, Sunday farmers market" },
      { label: "Schools", value: "Palisades High, Village School, Calvary Christian" },
      { label: "Outdoors", value: "Temescal Canyon, Will Rogers Beach, Palisades Bluff Park" },
    ],
    stats: [
      { label: "Walk Score", value: "70" },
      { label: "To Santa Monica", value: "12 min" },
      { label: "Parks nearby", value: "6+" },
    ],
  },
  "Bel Air": {
    tagline: "Gated canyons • Country Club • No through-traffic",
    description:
      "Lower Bel Air canyon privacy under 100-year-old sycamores — gated, hedged, hummingbirds not freeways. Bel-Air Country Club golf out the gate, UCLA and the Getty 10 minutes, Harvard-Westlake and Marymount for schools. Five minutes to Beverly Hills, worlds away in feel.",
    highlights: [
      { label: "Dining & Cafés", value: "Hotel Bel-Air, Beverly Hills restaurants 5 min" },
      { label: "Shopping", value: "Rodeo Drive 8 min, Westwood Village 7 min" },
      { label: "Schools", value: "Harvard-Westlake, Marymount, Roscomare Elementary" },
      { label: "Outdoors", value: "Stone Canyon trails, Bel-Air Country Club, Franklin Canyon" },
    ],
    stats: [
      { label: "Privacy", value: "Gated canyons" },
      { label: "To UCLA", value: "10 min" },
      { label: "To Beverly Hills", value: "5 min" },
    ],
  },
  "Holmby Hills": {
    tagline: "The Flats • LA Country Club • Mature palms",
    description:
      "Holmby Hills Flats prestige — wide lots, mature palms, and the Los Angeles Country Club as your backyard. Holmby Park mornings, UCLA and Century City in minutes, Beverly Hills dining next door. Embassy-quiet streets with 24-hour patrol and legacy architecture.",
    highlights: [
      { label: "Dining & Cafés", value: "Nate'n Al's, Beverly Hills fine dining, Westwood cafés" },
      { label: "Shopping", value: "Rodeo Drive, Century City Mall, Westwood Village" },
      { label: "Schools", value: "Harvard-Westlake, Marlborough, Emerson Middle" },
      { label: "Outdoors", value: "Holmby Park, LA Country Club golf, Franklin Canyon" },
    ],
    stats: [
      { label: "To UCLA", value: "8 min" },
      { label: "To Century City", value: "7 min" },
      { label: "Lot character", value: "Wide + gated" },
    ],
  },
};

export function getNeighborhood(location: string): NeighborhoodInfo {
  return (
    NEIGHBORHOODS[location] ?? {
      tagline: `${location} • Los Angeles`,
      description: `Established ${location} pocket with daily essentials close — cafés, markets, top-rated schools and canyon or coastal trails within minutes. Quiet residential streets with quick access to Century City, UCLA and the Westside.`,
      highlights: [
        { label: "Dining & Cafés", value: "Erewhon, Blue Bottle, local village spots" },
        { label: "Shopping", value: "Village shops + Century City Mall nearby" },
        { label: "Schools", value: "Top-rated LAUSD + private schools nearby" },
        { label: "Outdoors", value: "Santa Monica Mountains trails within minutes" },
      ],
      stats: [
        { label: "Walk Score", value: "68" },
        { label: "Quiet at night", value: "90" },
        { label: "To Century City", value: "~12 min" },
      ],
    }
  );
}
