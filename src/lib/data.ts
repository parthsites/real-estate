export const project = {
  name: "Serenity Heights",
  tagline: "Premium Living. Pune.",
  description:
    "A landmark residential development in the heart of Pune, offering 2 & 3 BHK luxury residences with world-class amenities.",
  developer: "Apex Infra Developers",
  rera: "P51800012345",
  reraLink: "https://maharera.mahaonline.gov.in",
  location: {
    address: "Baner-Balewadi Road, Pune 411045",
    landmarks: {
      school: "0.5 km",
      hospital: "1.2 km",
      metro: "0.8 km",
      itPark: "1.5 km",
      mall: "0.6 km",
      airport: "12 km",
    },
    coordinates: { lat: 18.5585, lng: 73.7769 },
  },
};

export const developer = {
  name: "Apex Infra Developers",
  established: 2010,
  projects: 12,
  delivered: 8,
  experience: "14+ Years",
  awards: ["CREDAI Best Luxury Project 2023", "Times Real Estate Excellence Award 2024"],
  description:
    "Apex Infra Developers has been crafting premium residential spaces across Pune since 2010. With 8 successfully delivered projects and over 2,000 happy families, we bring unmatched expertise and trust to every development.",
};

export const towers = [
  {
    id: "A",
    name: "Tower A - Aurora",
    floors: 32,
    units: 96,
    configs: ["2 BHK", "3 BHK"],
    area: "850 - 1450 sq.ft.",
    possession: "Dec 2026",
    status: "available" as const,
    startingPrice: "₹ 85 Lakhs*",
    highlights: ["Corner apartments", "Panoramic views", "Larger balconies"],
  },
  {
    id: "B",
    name: "Tower B - Bellavista",
    floors: 28,
    units: 84,
    configs: ["2 BHK", "3 BHK"],
    area: "820 - 1380 sq.ft.",
    possession: "Jun 2027",
    status: "available" as const,
    startingPrice: "₹ 82 Lakhs*",
    highlights: ["East-facing", "Garden view", "Premium finishes"],
  },
  {
    id: "C",
    name: "Tower C - Citadel",
    floors: 35,
    units: 105,
    configs: ["3 BHK", "4 BHK"],
    area: "1250 - 2200 sq.ft.",
    possession: "Dec 2027",
    status: "launching" as const,
    startingPrice: "₹ 1.25 Cr*",
    highlights: ["Exclusive 4 BHK options", "Rooftop access", "Private terrace"],
  },
];

export const floorPlans = [
  {
    id: "2bhk-a",
    type: "2 BHK",
    name: "Aurora 2 BHK",
    area: "850 sq.ft.",
    carpet: "715 sq.ft.",
    builtup: "850 sq.ft.",
    config: "2 Bedrooms + Hall + Kitchen + 2 Balconies",
    price: "₹ 85 Lakhs*",
    bedrooms: 2,
    bathrooms: 2,
    balconies: 2,
    dimensions: [
      { room: "Master Bedroom", size: "12' x 14'" },
      { room: "Bedroom 2", size: "10' x 12'" },
      { room: "Living/Dining", size: "16' x 20'" },
      { room: "Kitchen", size: "8' x 10'" },
      { room: "Balcony 1", size: "6' x 8'" },
      { room: "Balcony 2", size: "5' x 7'" },
    ],
    availability: "High Floor Available",
  },
  {
    id: "2bhk-b",
    type: "2 BHK",
    name: "Premium 2 BHK",
    area: "1050 sq.ft.",
    carpet: "890 sq.ft.",
    builtup: "1050 sq.ft.",
    config: "2 Bedrooms + Hall + Kitchen + 2 Balconies + Puja Room",
    price: "₹ 1.05 Cr*",
    bedrooms: 2,
    bathrooms: 2,
    balconies: 2,
    dimensions: [
      { room: "Master Bedroom", size: "12' x 16'" },
      { room: "Bedroom 2", size: "11' x 13'" },
      { room: "Living/Dining", size: "18' x 22'" },
      { room: "Kitchen", size: "9' x 11'" },
      { room: "Puja Room", size: "4' x 6'" },
      { room: "Balcony 1", size: "7' x 10'" },
    ],
    availability: "Limited Units",
  },
  {
    id: "3bhk-a",
    type: "3 BHK",
    name: "Classic 3 BHK",
    area: "1280 sq.ft.",
    carpet: "1085 sq.ft.",
    builtup: "1280 sq.ft.",
    config: "3 Bedrooms + Hall + Kitchen + 3 Balconies + Utility",
    price: "₹ 1.55 Cr*",
    bedrooms: 3,
    bathrooms: 3,
    balconies: 3,
    dimensions: [
      { room: "Master Bedroom", size: "13' x 16'" },
      { room: "Bedroom 2", size: "11' x 13'" },
      { room: "Bedroom 3", size: "10' x 12'" },
      { room: "Living/Dining", size: "20' x 24'" },
      { room: "Kitchen", size: "9' x 12'" },
      { room: "Utility", size: "5' x 7'" },
    ],
    availability: "Available",
  },
  {
    id: "3bhk-b",
    type: "3 BHK",
    name: "Grand 3 BHK",
    area: "1450 sq.ft.",
    carpet: "1230 sq.ft.",
    builtup: "1450 sq.ft.",
    config: "3 Bedrooms + Hall + Kitchen + 3 Balconies + Utility + Store",
    price: "₹ 1.85 Cr*",
    bedrooms: 3,
    bathrooms: 3,
    balconies: 3,
    dimensions: [
      { room: "Master Bedroom", size: "14' x 18'" },
      { room: "Bedroom 2", size: "12' x 14'" },
      { room: "Bedroom 3", size: "11' x 13'" },
      { room: "Living/Dining", size: "22' x 26'" },
      { room: "Kitchen", size: "10' x 13'" },
      { room: "Store Room", size: "5' x 6'" },
    ],
    availability: "Premium Floor",
  },
  {
    id: "4bhk",
    type: "4 BHK",
    name: "Penthouse 4 BHK",
    area: "2200 sq.ft.",
    carpet: "1870 sq.ft.",
    builtup: "2200 sq.ft.",
    config: "4 Bedrooms + Hall + Kitchen + 4 Balconies + Utility + Store + Study",
    price: "₹ 3.20 Cr*",
    bedrooms: 4,
    bathrooms: 4,
    balconies: 4,
    dimensions: [
      { room: "Master Bedroom", size: "16' x 20'" },
      { room: "Bedroom 2", size: "13' x 15'" },
      { room: "Bedroom 3", size: "12' x 14'" },
      { room: "Bedroom 4", size: "11' x 13'" },
      { room: "Living/Dining", size: "24' x 30'" },
      { room: "Study", size: "8' x 10'" },
    ],
    availability: "Only 4 Units",
  },
];

export const amenityList = [
  {
    name: "Infinity Pool",
    description: "25-meter temperature-controlled infinity pool with panoramic city views",
    size: "4,500 sq.ft.",
    category: "wellness",
  },
  {
    name: "Grand Clubhouse",
    description: "30,000 sq.ft. clubhouse with indoor games, banquet hall, and lounge",
    size: "30,000 sq.ft.",
    category: "social",
  },
  {
    name: "Ultra-Modern Gym",
    description: "Full-service fitness center with separate yoga and meditation deck",
    size: "3,200 sq.ft.",
    category: "wellness",
  },
  {
    name: "Landscaped Gardens",
    description: "5 acres of themed gardens with walking trails and water features",
    size: "5 Acres",
    category: "outdoor",
  },
  {
    name: "Kids Play Area",
    description: "Dedicated 1-acre children's play zone with indoor activity center",
    size: "1 Acre",
    category: "family",
  },
  {
    name: "Rooftop Lounge",
    description: "Sky deck with barbecue area, open theatre, and 360° panoramic views",
    size: "6,000 sq.ft.",
    category: "social",
  },
  {
    name: "Sports Facilities",
    description: "Tennis court, basketball court, badminton court, and 400m jogging track",
    size: "2.5 Acres",
    category: "sports",
  },
  {
    name: "Business Center",
    description: "Co-working spaces, conference rooms, and private meeting lounges",
    size: "2,800 sq.ft.",
    category: "work",
  },
  {
    name: "Temple",
    description: "Dedicated temple within the complex for daily prayers and festivities",
    size: "1,200 sq.ft.",
    category: "cultural",
  },
];

export const features = [
  {
    icon: "location",
    title: "Prime Location",
    description: "5 min to Hinjewadi IT Park, 2 min to Baner, 10 min to Pune Airport",
  },
  {
    icon: "design",
    title: "Architectural Excellence",
    description: "Designed by award-winning architects with Vastu-compliant layouts",
  },
  {
    icon: "quality",
    title: "Premium Finishes",
    description: "Italian marble, modular kitchens, branded fixtures, and smart home features",
  },
  {
    icon: "community",
    title: "Gated Community",
    description: "24/7 security, power backup, rainwater harvesting, and EV charging",
  },
];

export const milestones = [
  { year: "2020", label: "Project Launched", detail: "Received overwhelming response with 70% bookings in Phase 1" },
  { year: "2022", label: "Tower A Tops Out", detail: "Structural completion of Tower A - 32 floors in record time" },
  { year: "2023", label: "Award Win", detail: "Best Luxury Project - Pune at CREDAI Real Estate Awards" },
  { year: "2024", label: "Phase 1 Handover", detail: "Successfully handed over 150+ units to happy families" },
  { year: "2025", label: "Tower B Launch", detail: "Phase 2 launched with 85% pre-sales in first month" },
  { year: "2026", label: "Completion", detail: "Full project completion with 500+ families expected" },
];

export const mediaMentions = [
  { source: "Times of India", headline: "Serenity Heights sets new benchmark for luxury living in Pune", date: "2024" },
  { source: "Moneycontrol", headline: "Apex Infra's premium project sees record pre-sales in Phase 2", date: "2025" },
  { source: "Hindustan Times", headline: "Pune's Baner-Balewadi corridor emerges as new luxury hotspot", date: "2025" },
];

export const testimonials = [
  {
    name: "Rajesh & Priya Mehta",
    project: "Tower A - 3 BHK",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    quote: "The quality of construction and attention to detail exceeded our expectations. Moving in was the best decision we made.",
    verified: true,
  },
  {
    name: "Anita Sharma",
    project: "Tower B - 2 BHK",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    quote: "As a single professional woman, safety was my top priority. Serenity Heights offers peace of mind with world-class amenities.",
    verified: true,
  },
  {
    name: "Vikram Desai",
    project: "Tower A - 3 BHK",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    quote: "The location is unbeatable - 5 minutes to my office in Hinjewadi. The clubhouse and pool make weekend staycations feel luxurious.",
    verified: true,
  },
];

export const galleryImages = [
  { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80", title: "Grand Entrance", category: "Exterior" },
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", title: "Living Room", category: "Interior" },
  { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", title: "Clubhouse", category: "Amenities" },
  { src: "https://images.unsplash.com/photo-1600566753376-12c8ab7c3a5e?w=800&q=80", title: "Bedroom", category: "Interior" },
  { src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80", title: "Pool", category: "Amenities" },
  { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80", title: "Lobby", category: "Exterior" },
  { src: "https://images.unsplash.com/photo-1600607687644-c71c3b44ed3b?w=800&q=80", title: "Kitchen", category: "Interior" },
  { src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80", title: "Garden", category: "Amenities" },
  { src: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=800&q=80", title: "Bathroom", category: "Interior" },
  { src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80", title: "Rooftop", category: "Amenities" },
];

export const travelTimes = [
  { destination: "Hinjewadi IT Park", time: "5 min", distance: "1.5 km", type: "IT" },
  { destination: "Baner High Street", time: "3 min", distance: "0.8 km", type: "Retail" },
  { destination: "Pune Airport", time: "25 min", distance: "12 km", type: "Travel" },
  { destination: "Phoenix Marketcity", time: "4 min", distance: "0.6 km", type: "Mall" },
  { destination: "Hinjewadi Metro", time: "3 min", distance: "0.8 km", type: "Metro" },
  { destination: "Aditya Birla Hospital", time: "5 min", distance: "1.2 km", type: "Healthcare" },
  { destination: "Symbiosis University", time: "7 min", distance: "2.0 km", type: "Education" },
  { destination: "Mumbai-Pune Expressway", time: "8 min", distance: "3.0 km", type: "Connectivity" },
];

export const faqs = [
  {
    q: "What is the RERA registration number of Serenity Heights?",
    a: "The RERA registration number is P51800012345. You can verify all project details on the Maharashtra RERA website.",
  },
  {
    q: "What are the available configurations?",
    a: "We offer 2 BHK (850-1050 sq.ft.), 3 BHK (1280-1450 sq.ft.), and exclusive 4 BHK Penthouse (2200 sq.ft.) options across three towers.",
  },
  {
    q: "What is the possession timeline?",
    a: "Tower A (Aurora) possession by Dec 2026, Tower B (Bellavista) by Jun 2027, and Tower C (Citadel) by Dec 2027.",
  },
  {
    q: "What are the payment terms?",
    a: "We offer flexible payment plans. Please contact our sales team for detailed payment schedules and home loan assistance.",
  },
  {
    q: "Is the project Vastu compliant?",
    a: "Yes, all units are designed to be Vastu compliant. Our architects have ensured optimal orientation for each apartment.",
  },
  {
    q: "What amenities are included in the maintenance?",
    a: "Amenities include infinity pool, clubhouse, gym, landscaped gardens, kids play area, sports facilities, business center, temple, and 24/7 security.",
  },
  {
    q: "Are visitors allowed to book a site visit?",
    a: "Absolutely. You can book a site visit through our website, call us at +91 98765 43210, or message us on WhatsApp.",
  },
];
