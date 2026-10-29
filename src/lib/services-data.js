import {
  Factory,
  Home,
  Building2,
  Warehouse,
  Layers,
  Paintbrush,
  Map,
  Building,
  Rows3,
} from "lucide-react";

export const servicesData = [
  {
    id: "industrial-projects",
    icon: Factory,
    title: "Industrial Projects",
    category: "Heavy & Light Industry",
    shortTag: "Industrial",
    apiLocation: "IndustrialProjectThumbnail",
    summary:
      "Specialized construction and development for steel plants, re-rolling mills, dal mills, manufacturing units, and heavy industrial facilities.",
    image:
      "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?w=1200&q=80",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&q=80",
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&q=80",
    ],
    features: [
      "Heavy load-bearing foundation design",
      "Steel shed fabrication & structural erection",
      "Vibration-resistant machinery bases",
      "Industrial compliance & safety standards",
    ],
    intro: [
      "We undertake construction and development projects for industrial facilities engineered around the specific operational and machinery requirements of modern businesses.",
      "From high-capacity manufacturing units to specialized processing plants, we focus on delivering structural strength, operational flow, and industrial durability capable of supporting demanding 24/7 operations.",
    ],
    listTitle: "Our Industrial Construction Solutions Include:",
    points: [
      "Manufacturing and production facilities",
      "Steel industry projects & re-rolling mills",
      "Dal mills and food-processing plants",
      "Heavy industrial sheds & PEB steel structures",
      "Factory buildings and utility annexes",
      "Heavy machinery foundation blocks",
      "Industrial drainage, utility, and service areas",
      "Customized industrial processing spaces",
    ],
    outro:
      "We combine rigorous engineering planning, high-grade materials, and experienced field supervision to create industrial facilities built for long-term operational profitability.",
    specifications: [
      { label: "Sectors Served", value: "Steel, Agro, Food, Manufacturing" },
      { label: "Structure Types", value: "RCC, PEB, Heavy Structural Steel" },
      { label: "Quality Checks", value: "Compaction, Cube Testing, NDT" },
      { label: "Compliance", value: "Industrial Safety & Fire Norms" },
    ],
  },
  {
    id: "residential-projects",
    icon: Home,
    title: "Residential Projects",
    category: "Homes & Living Spaces",
    shortTag: "Residential",
    summary:
      "Custom residential spaces combining architectural elegance, structural durability, smart functionality, and modern lifestyle comforts.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
    ],
    features: [
      "Custom architectural & structural designs",
      "High-grade RCC construction & waterproofing",
      "Vastu-compliant, ventilated floor layouts",
      "Turnkey civil-to-finishing delivery",
    ],
    intro: [
      "We build residential spaces that combine structural quality, aesthetic elegance, daily convenience, and modern living standards. Every residential project is tailored to the lifestyle, vision, and budget of the client.",
      "From standalone custom bungalows to expansive multi-family residences, our focus remains on structural excellence, quality ventilation, natural lighting, and long-lasting finishes.",
    ],
    listTitle: "Our Residential Construction Services Include:",
    points: [
      "Individual residential buildings & custom homes",
      "Luxury bungalows and independent villas",
      "Multi-storey residential structures",
      "Complete turnkey home construction (Grey to Finish)",
      "Residential extensions and structural remodeling",
      "Architectural planning and 3D elevations",
      "Earthquake-resistant RCC frame construction",
      "Premium plumbing, electrical, and waterproofing solutions",
    ],
    outro:
      "Our disciplined project management ensures every stage of home construction is seamlessly executed, strictly on schedule, and built with craftsmanship you can be proud of.",
    specifications: [
      { label: "Scope", value: "Turnkey Design to Handover" },
      { label: "Materials", value: "Top-Grade TMT, UltraTech/ACC Cement" },
      { label: "Design Style", value: "Contemporary, Classical, Minimalist" },
      { label: "Warranty", value: "Structural & Waterproofing Assurance" },
    ],
  },
  {
    id: "commercial-projects",
    icon: Building2,
    title: "Commercial Projects",
    category: "Offices & Retail Spaces",
    shortTag: "Commercial",
    summary:
      "Modern commercial construction for corporate offices, retail complexes, showrooms, and mixed-use commercial developments.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&q=80",
    ],
    features: [
      "High-visibility modern commercial facades",
      "Column-free flexible floor plates",
      "Integrated electrical, HVAC, and fire fighting",
      "High-traffic durable materials",
    ],
    intro: [
      "We undertake commercial construction projects with a clear focus on commercial viability, brand visibility, customer accessibility, and maximum floor-space utilization.",
      "Whether developing high-street retail centers, corporate headquarters, or business hubs, we create spaces that make an impression and support rapid business growth.",
    ],
    listTitle: "Our Commercial Projects Include:",
    points: [
      "Corporate office buildings and IT parks",
      "Commercial retail hubs and shopping complexes",
      "Automobile showrooms and high-street outlets",
      "Banks, financial centers, and institutions",
      "Mixed-use commercial and residential developments",
      "Structural facade glazing and modern exterior claddings",
      "Basement parking and commercial infrastructure",
      "Complete commercial interior shell & core works",
    ],
    outro:
      "We aim to deliver commercial developments that command attention, maximize rental yield, and offer low long-term maintenance costs.",
    specifications: [
      { label: "Building Types", value: "Offices, Retail, Showrooms, Complexes" },
      { label: "Planning", value: "High Footfall Optimization & Circulation" },
      { label: "Glazing & Facades", value: "ACP, Structural Glazing, Louvers" },
      { label: "Turnaround", value: "Fast-Track Commercial Timelines" },
    ],
  },
  {
    id: "warehousing-projects",
    icon: Warehouse,
    title: "Warehousing Projects",
    category: "Logistics & Storage",
    shortTag: "Warehousing",
    summary:
      "High-performance warehouses, logistics hubs, and distribution centers engineered for optimal storage density, vehicle circulation, and durability.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80",
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=80",
    ],
    features: [
      "Clear span pre-engineered buildings (PEB)",
      "Heavy load high-tolerance flooring",
      "Hydraulic dock leveler pits & truck bays",
      "Advanced rainwater harvesting & natural skylights",
    ],
    intro: [
      "We provide modern construction solutions for large-scale warehouses and storage facilities designed for the seamless movement, storage, and handling of goods.",
      "Every warehouse is planned with meticulous attention to column spacing, internal vehicular turning radiuses, dock heights, floor levelness, and structural weatherproofing.",
    ],
    listTitle: "Our Warehousing Solutions Include:",
    points: [
      "Logistics distribution centers and fulfillment hubs",
      "Agricultural commodity and cold storage warehouses",
      "Industrial raw material and finished goods godowns",
      "PEB steel warehouse superstructures",
      "Heavy-duty Trimix and VDF floor slabs",
      "Dock leveller installations and apron construction",
      "Perimeter security walls, gates, and internal roads",
      "Ventilation louvers and thermal insulation systems",
    ],
    outro:
      "From foundation earthwork to roofing sheets, our warehouse projects are built to support intense logistics operations without interruption.",
    specifications: [
      { label: "Clear Heights", value: "8m to 14m Standard Clearances" },
      { label: "Floor Loads", value: "5T to 10T per sq. meter capacity" },
      { label: "Structure", value: "Pre-Engineered Building (PEB) / RCC" },
      { label: "Docks", value: "Flush Docks, Ramp Access, Canopy" },
    ],
  },
  {
    id: "vdf-flooring",
    icon: Layers,
    title: "VDF Flooring",
    category: "Industrial Flooring",
    shortTag: "Flooring",
    apiLocation: "vdfflooringthumbnail",
    summary:
      "Heavy-duty Vacuum Dewatered Flooring (Trimix) engineered for maximum compressive strength, abrasion resistance, and seamless smoothness.",
    image:
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=1200&q=80",
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
    ],
    features: [
      "Up to 50% increase in surface tensile strength",
      "Zero dusting and superior wear resistance",
      "Precision laser screed leveling & groove cutting",
      "Resistant to heavy vehicular impact & abrasion",
    ],
    intro: [
      "We provide specialized VDF (Vacuum Dewatered Flooring) and Trimix concrete flooring solutions for industrial, logistics, and commercial spaces requiring tough, flat surfaces.",
      "The vacuum dewatering process extracts excess water from fresh concrete before finishing, drastically minimizing shrinkage cracks, voids, and surface dusting while significantly increasing compressive strength.",
    ],
    listTitle: "Suitable Applications & Services Include:",
    points: [
      "Heavy manufacturing plants & industrial workshop floors",
      "Automobile assembly plants & service workshops",
      "Warehouse storage bays & container yards",
      "Trimix internal concrete roads and approach paths",
      "Multi-level parking garages and basements",
      "Groove cutting, sealants, and elastomeric joint filling",
      "Floor hardener application (Non-metallic & Metallic)",
      "High-gloss burnished or broom-finish surface options",
    ],
    outro:
      "Our flooring team utilizes heavy-duty mechanical power trowels, screed vibrators, and vacuum pumps to deliver world-class level floors that withstand heavy equipment year after year.",
    specifications: [
      { label: "Concrete Grade", value: "M20, M25, M30 & Custom Mixes" },
      { label: "Dewatering Ratio", value: "15% - 25% surplus water removed" },
      { label: "Finish Quality", value: "Superflat, Power Floating & Power Troweling" },
      { label: "Joint Treatment", value: "Precision Saw Cuts with Polyurethane Sealant" },
    ],
  },
  {
    id: "interior-designing",
    icon: Paintbrush,
    title: "Interior Designing",
    category: "Interiors & Architecture",
    shortTag: "Interiors",
    summary:
      "Sophisticated interior architecture and fit-out solutions balancing modern luxury, human ergonomics, lighting, and premium material finishes.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
    ],
    features: [
      "Custom 3D visualization and space planning",
      "Bespoke woodwork, modular cabinetry & panelling",
      "Designer false ceilings and architectural lighting",
      "Premium marble, tile, and hardwood finishes",
    ],
    intro: [
      "We design and execute interior environments that harmonize spatial balance, aesthetic elegance, tactile comfort, and individual character.",
      "Starting from functional spatial planning to material selection and turnkey on-site execution, our team transforms empty shells into inspiring, purposeful living and working spaces.",
    ],
    listTitle: "Our Interior Solutions Include:",
    points: [
      "Luxury residential villa and apartment interiors",
      "Corporate office fit-outs and conference suites",
      "Retail boutique, showroom, and hospitality interiors",
      "Modular kitchens and bespoke wardrobe solutions",
      "Designer false ceiling installations (Gypsum & Grid)",
      "Architectural mood lighting and smart automation",
      "Flooring, wall claddings, and acoustic treatments",
      "Custom furniture fabrication and soft furnishings",
    ],
    outro:
      "Every detail is curated with uncompromising craftsmanship, delivering spaces that look breathtaking and function effortlessly.",
    specifications: [
      { label: "Style Palette", value: "Contemporary, Scandinavian, Luxury Modern" },
      { label: "Deliverables", value: "2D Layouts, 3D Renders, Material BOQs" },
      { label: "Execution", value: "Turnkey Civil + Carpentry + Electrical" },
      { label: "Hardware", value: "Hafele, Hettich, Blum Grade Fittings" },
    ],
  },
  {
    id: "layout-development",
    icon: Map,
    title: "Layout Development",
    category: "Land & Infrastructure",
    shortTag: "Land Development",
    apiLocation: "Layoutplaningthumbnail",
    summary:
      "Strategic land plotting, master layout planning, internal roads, storm drainage, and infrastructure development for residential and commercial projects.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?w=1200&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80",
      "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?w=1200&q=80",
    ],
    features: [
      "Optimal plot yield and circulation geometry",
      "Durable Trimix concrete internal roads & paver sidewalks",
      "Underground storm drainage & electrical conduits",
      "Perimeter fencing, grand entrance arch & landscaping",
    ],
    intro: [
      "A thoughtfully planned layout forms the bedrock of every thriving real estate and industrial development. We provide comprehensive land development solutions focused on maximizing land value, ease of movement, and long-term infrastructure stability.",
      "From raw land clearing and contour levelling to constructing roads, utility networks, and demarcated plots, we execute complete development projects ready for construction.",
    ],
    listTitle: "Our Layout Development Services Include:",
    points: [
      "Residential plotting layouts and gated community planning",
      "Industrial land zoning, plot subdivision, and masterplans",
      "Trimix concrete and WBM/asphalt internal roads",
      "Storm water drainage channels and culvert construction",
      "Underground water supply pipelines and sewage networks",
      "Street lighting conduits and electrical transformer yards",
      "Boundary walls, compound security, and entrance gates",
      "Green spaces, parks, and tree plantation belts",
    ],
    outro:
      "We turn raw parcels of land into fully serviced, highly desirable, and structurally sound developments built for immediate growth.",
    specifications: [
      { label: "Survey Tech", value: "Total Station & DGPS Topographical Survey" },
      { label: "Road Specs", value: "Trimix Concrete, Interlocking Pavers, WBM" },
      { label: "Drainage", value: "RCC Box Drains & Gravity Storm Channels" },
      { label: "Sanction", value: "Compliant with Municipal & Regional Town Planning" },
    ],
  },
  {
    id: "apartments",
    icon: Building,
    title: "Apartments",
    category: "Multi-Storey Living",
    shortTag: "Apartments",
    summary:
      "Modern apartment complexes and multi-family residential towers engineered with smart space planning, premium materials, and community amenities.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=1200&q=80",
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1200&q=80",
    ],
    features: [
      "Engineered RCC column-beam framework",
      "High-speed elevator cores & fire safety systems",
      "Acoustic floor insulation & wide balconies",
      "Stately entrance lobbies & shared amenities",
    ],
    intro: [
      "We undertake apartment construction and residential building developments that meet contemporary living standards, structural safety, and efficient spatial economics.",
      "From boutique residential walk-ups to multi-storey apartment buildings, we prioritize functional floor layouts, efficient parking management, quality common areas, and enduring value.",
    ],
    listTitle: "Our Apartment Projects Focus On:",
    points: [
      "Efficient 1BHK, 2BHK, 3BHK, and penthouse floor plans",
      "Earthquake-resistant RCC structural design",
      "Stately common entrance lobbies and circulation corridors",
      "Basement, stilt, and puzzle parking systems",
      "Modern exterior facades and weather-shield paint treatments",
      "Rooftop terraces, water tanks, and rainwater harvesting",
      "Fire safety networks, alarms, and emergency exits",
      "High-grade plumbing, electrical shafts, and elevator shafts",
    ],
    outro:
      "Our apartment projects create harmonious, secure, and comfortable communities that stand the test of time.",
    specifications: [
      { label: "Structure", value: "Framed RCC Structure (Seismic Zone compliant)" },
      { label: "Masonry", value: "AAC Blocks / Fly Ash Brickwork" },
      { label: "Lifts & Utilities", value: "Automatic Passenger Lifts + DG Backup" },
      { label: "Security", value: "CCTV Integration & Intercom Ready" },
    ],
  },
  {
    id: "row-houses",
    icon: Rows3,
    title: "Row Houses",
    category: "Community Living",
    shortTag: "Townhomes",
    apiLocation: "Rowhouse",
    summary:
      "Thoughtfully planned row houses and townhomes combining independent home privacy with cohesive community architecture and smart land usage.",
    image:
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?w=1200&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80",
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1200&q=80",
    ],
    features: [
      "Private front porch, car park & rear garden",
      "Harmonious streetscape elevation design",
      "Independent terrace and expanding potential",
      "Cost-effective land utilization with privacy",
    ],
    intro: [
      "We design and build row house developments that give families the advantages of an independent home alongside the security and camaraderie of a planned community.",
      "Our row house designs strike the balance between privacy, efficient land footprints, modern facade aesthetics, and private outdoor areas.",
    ],
    listTitle: "Our Row House Solutions Include:",
    points: [
      "Custom row house developments and cluster planning",
      "Multi-level floor plans with private balconies and terraces",
      "Individual car porch and landscaped front setback",
      "Contemporary exterior elevations with stone and wood accents",
      "Integrated community road, lighting, and drainage networks",
      "Independent water storage and septic/drain connections",
      "Quality interior finishes and modular layout provisions",
      "Energy-efficient cross-ventilation design",
    ],
    outro:
      "We deliver row house communities that feel spacious, welcoming, and built with solid craftsmanship for generations of memories.",
    specifications: [
      { label: "Layouts", value: "Duplex & Triplex Configurations" },
      { label: "Exteriors", value: "Weatherproof Texture & Accent Cladding" },
      { label: "Private Amenities", value: "Dedicated Parking, Balcony & Rooftop" },
      { label: "Community", value: "Secured Gated Compound & Internal Roads" },
    ],
  },
];

