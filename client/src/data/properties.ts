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
