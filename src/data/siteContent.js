/**
 * CENTRAL DATA ARCHITECTURE - FYN Engineers Pvt. Ltd.
 * 
 * All UI components dynamically consume text, badges, links, and content from this file.
 * To update copy, services, industries, or add new custom sections, edit this data file directly!
 */

export const siteContent = {
  // 1. Company Identity & Meta
  company: {
    name: "FYN Engineers Pvt. Ltd.",
    shortName: "FYN Engineers",
    tagline: "Integrated Water & Energy Solutions",
    subTagline: "Design • Supply • Install • Service",
    coreValue: "Engineering Solutions Designed For Your Needs",
    established: "2010",
    headquarters: "Bengaluru & Noida, India",
    phone: "+91 98765 43210",
    alternatePhone: "+91 120 4567 890",
    email: "info@fynengineers.com",
    supportEmail: "care@fynengineers.com",
    address: "Plot No. 42, Sector 63, Commercial Industrial Area, Noida, UP 201301",
    whatsappNumber: "919876543210",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.112423377755!2d77.37525355!3d28.6289297!2m3!1f0!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce55000000001%3A0x6b30693a20726d50!2sSector%2063%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },

  // 2. Navigation Links
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Business Verticals", href: "#verticals" },
    { label: "Our Process", href: "#process" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Industries", href: "#industries" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ],

  // 3. Hero Section Data
  hero: {
    badge: "Integrated Engineering • Solar • Water • Backup Power",
    headline: "Engineering Solutions Designed",
    headlineEmphasis: "For Your Needs",
    subheadline: "We custom-design, supply, install, and service commercial water purification, solar rooftop energy grids, and high-reliability industrial electrical systems with mandatory site inspections.",
    ctaPrimary: "Request Consultation",
    ctaSecondary: "Explore Verticals",
    quickFeatureCards: [
      {
        id: "aqua",
        title: "Clean Water Infrastructure",
        subtitle: "FYN Aqua Solutions",
        desc: "Industrial RO, commercial softeners, heat pumps & WTP systems.",
        icon: "Droplets",
        accent: "cyan"
      },
      {
        id: "solar",
        title: "Renewable Solar Energy",
        subtitle: "FYN Solar Power",
        desc: "On-grid & off-grid rooftop solar, solar pumps & street lighting.",
        icon: "Sun",
        accent: "amber"
      },
      {
        id: "power",
        title: "Electrical Reliability",
        subtitle: "Power Backup Systems",
        desc: "Online UPS, LFP storage, voltage stabilizers & AMF panels.",
        icon: "Zap",
        accent: "emerald"
      }
    ]
  },

  // 4. About Us Data
  about: {
    sectionBadge: "Who We Are",
    title: "Engineering Excellence Driven by Site Precision",
    description1: "FYN Engineers Pvt. Ltd. is a premier multi-vertical engineering firm delivering end-to-end water treatment, solar photovoltaic power, and electrical infrastructure projects across India.",
    description2: "Unlike off-the-shelf sellers, our certified engineers conduct physical site inspections to measure solar irradiance tilt angles, water mineral TDS levels, and electrical surge profiles before engineering custom blueprints.",
    quote: "Our mission is to empower commercial enterprises, industries, and institutions with sustainable, cost-effective engineering systems backed by lifetime service care.",
    vision: "To become India's most trusted engineering solutions provider, setting the benchmark in site-precision design, clean energy integration, and transparent OEM compliance.",
    coreValues: [
      {
        title: "Site Precision",
        desc: "Every blueprint is custom-crafted according to physical site conditions.",
        icon: "Compass"
      },
      {
        title: "OEM Compliance",
        desc: "Direct tier-1 manufacturer sourcing under strict compliance licensing.",
        icon: "ShieldCheck"
      },
      {
        title: "Sustainability First",
        desc: "Optimized solar generation and zero-water-waste engineering.",
        icon: "Leaf"
      },
      {
        title: "Client-Centric AMC",
        desc: "Free warranty service followed by transparent low-fee annual maintenance.",
        icon: "Clock"
      }
    ],
    leadership: [
      {
        name: "Ramesh K. Fyn",
        role: "Managing Director & Founder",
        bio: "20+ years of industrial power & hydraulic system engineering pioneer.",
        avatar: "👨‍💼"
      },
      {
        name: "Dr. Ananya Sen",
        role: "Director of Solar & Clean Energy",
        bio: "Ph.D. in Photovoltaic Systems & Micro-grid Thermal Integration.",
        avatar: "👩‍🔬"
      },
      {
        name: "Vikram Malhotra",
        role: "Director of Operations & Compliance",
        bio: "Former Procurement Lead specializing in Tier-1 OEM compliance.",
        avatar: "👨‍💻"
      }
    ]
  },

  // 5. Business Verticals Data
  verticals: {
    sectionBadge: "Specialized Verticals",
    title: "Integrated Engineering Business Verticals",
    subtitle: "Custom-tailored solutions across three core utility domains",
    items: [
      {
        id: "aqua",
        name: "FYN Aqua",
        tagline: "Advanced Water & Thermal Systems",
        accentColor: "cyan",
        icon: "Droplets",
        summary: "High-performance commercial & industrial water treatment, purification, and solar thermal heating.",
        offerings: [
          "Air Source Heat Pumps & Centralized Thermal Systems",
          "Industrial RO & Automatic Water Softeners",
          "Water Treatment Plants (WTP) & Effluent Treatment (ETP)",
          "Hydro-Pneumatic Pressure Booster Pumps"
        ]
      },
      {
        id: "solar",
        name: "FYN Solar",
        tagline: "Renewable Photovoltaic Energy",
        accentColor: "amber",
        icon: "Sun",
        summary: "Turnkey rooftop and ground-mounted solar PV systems for massive electricity savings.",
        offerings: [
          "Residential & Commercial Rooftop Solar Grids (On-Grid / Off-Grid)",
          "Bifacial & Mono-PERC High Efficiency Panel Arrays",
          "Solar Water Pumping & Agricultural Systems",
          "Standalone Solar Street Lighting Infrastructure"
        ]
      },
      {
        id: "electrical",
        name: "Electrical Solutions",
        tagline: "Power Quality & Uninterrupted Backup",
        accentColor: "emerald",
        icon: "Zap",
        summary: "Heavy-duty power protection, voltage stabilization, and battery storage modules.",
        offerings: [
          "Industrial Online UPS Systems (1 kVA - 500 kVA)",
          "Lithium Iron Phosphate (LFP) Battery Banks",
          "Automatic Servo Voltage Stabilizers",
          "Power Distribution & AMF Control Panel Consultancy"
        ]
      }
    ]
  },

  // 6. Workflow Process Stepper Data
  process: {
    sectionBadge: "How We Work",
    title: "The 6-Step Engineering Workflow",
    subtitle: "From initial site visit to lifetime after-sales care",
    steps: [
      {
        step: "01",
        title: "Consultation & Site Audit",
        desc: "On-site analysis of water TDS, solar sun-path, and peak power loads.",
        icon: "Search"
      },
      {
        step: "02",
        title: "Engineering Design",
        desc: "Custom CAD drafting and structural hydraulic & electrical modeling.",
        icon: "FileCode2"
      },
      {
        step: "03",
        title: "OEM Product Sourcing",
        desc: "Tier-1 component selection under strict FYN quality compliance.",
        icon: "PackageCheck"
      },
      {
        step: "04",
        title: "Turnkey Installation",
        desc: "Precision mounting, electrical cabling, and civil integration by certified staff.",
        icon: "Wrench"
      },
      {
        step: "05",
        title: "Testing & Commissioning",
        desc: "Rigorous load testing, pressure checks, and grid synchronization.",
        icon: "CheckCircle2"
      },
      {
        step: "06",
        title: "After-Sales Support",
        desc: "100% free warranty servicing and transparent AMC maintenance contracts.",
        icon: "Headphones"
      }
    ]
  },

  // 7. Why Choose Us & Industries Data
  whyUs: {
    sectionBadge: "Why Partner With Us",
    title: "Engineering Integrity That Sets Us Apart",
    features: [
      {
        title: "Mandatory Physical Site Audits",
        desc: "We never guess parameters. Every project starts with real-world site measurements.",
        icon: "MapPin"
      },
      {
        title: "Tier-1 OEM Partnerships",
        desc: "Branded under FYN with direct manufacturer warranties and compliance assurance.",
        icon: "Award"
      },
      {
        title: "Zero-Cost Warranty Servicing",
        desc: "Free component repair and maintenance while under active warranty.",
        icon: "ShieldAlert"
      },
      {
        title: "Turnkey Project Guarantee",
        desc: "Single point of accountability from civil design to final regulatory approvals.",
        icon: "CheckSquare"
      }
    ]
  },

  industries: {
    sectionBadge: "Sectors We Empower",
    title: "Industries Served",
    subtitle: "Custom utility solutions for commercial, industrial, and institutional sectors",
    categories: ["All", "Industrial", "Commercial", "Healthcare & Institutional"],
    list: [
      { name: "Pharmaceutical Plants", category: "Industrial", icon: "Pill" },
      { name: "Manufacturing Facilities", category: "Industrial", icon: "Factory" },
      { name: "Food & Beverage Processing", category: "Industrial", icon: "Utensils" },
      { name: "Chemical Processing", category: "Industrial", icon: "FlaskConical" },
      { name: "Hotels & Hospitality", category: "Commercial", icon: "Hotel" },
      { name: "Commercial Office Parks", category: "Commercial", icon: "Building2" },
      { name: "Hospitals & Healthcare", category: "Healthcare & Institutional", icon: "Hospital" },
      { name: "Educational Institutions", category: "Healthcare & Institutional", icon: "GraduationCap" },
      { name: "Residential Complexes", category: "Commercial", icon: "Home" }
    ]
  },

  // 8. Projects & Portfolio Data
  projects: {
    sectionBadge: "Track Record",
    title: "Featured Engineering Projects",
    subtitle: "Proven turnkey installations delivering high efficiency",
    tabs: ["All", "Completed", "Ongoing"],
    items: [
      {
        id: 1,
        title: "500 kW Industrial Rooftop Solar Grid",
        category: "Completed",
        location: "Noida SEZ Industrial Area",
        vertical: "Solar Energy",
        desc: "Mono-PERC panel array reducing factory grid power draw by 65%.",
        metric: "500 kW Output",
        icon: "Sun"
      },
      {
        id: 2,
        title: "50,000 LPD Automated Water Softening Plant",
        category: "Completed",
        location: "Pharma Manufacturing Complex, Baddi",
        vertical: "Water Solutions",
        desc: "Raw borewell water TDS reduction from 1400 PPM to USP process grade.",
        metric: "50,000 LPD Capacity",
        icon: "Droplets"
      },
      {
        id: 3,
        title: "200 kVA Online UPS & LFP Battery Storage",
        category: "Completed",
        location: "Gurugram Data Center Facility",
        vertical: "Electrical Solutions",
        desc: "Zero-millisecond switchover industrial backup with dual AMF panel sync.",
        metric: "200 kVA / 4h Backup",
        icon: "Zap"
      },
      {
        id: 4,
        title: "750 kW Ground-Mounted Solar Micro-Grid",
        category: "Ongoing",
        location: "Food Processing Hub, Haridwar",
        vertical: "Solar Energy",
        desc: "Bifacial solar panel installation with automated sun-tracking mounts.",
        metric: "750 kW (Under Execution)",
        icon: "Sun"
      }
    ],
    testimonials: [
      {
        quote: "FYN Engineers conducted an extensive site audit before proposing our 500kW solar grid. Their exact tilt angle sizing boosted our solar yield by 18%!",
        client: "Sunil Mehta",
        role: "VP Operations, Apex Manufacturing"
      },
      {
        quote: "Our borewell water TDS was scaling heavy equipment. FYN's custom water softening plant solved our issues overnight, and their service support is stellar.",
        client: "Dr. Kavita Rao",
        role: "Plant Head, BioPharma Labs"
      }
    ]
  },

  // 9. Dynamic Custom Extra Sections Array
  // Add any new custom section objects here to dynamically render extra website sections!
  customSections: [
    {
      id: "sustainability-commitment",
      badge: "Eco Commitment",
      title: "Our Green Energy Guarantee",
      content: "FYN Engineers Pvt. Ltd. is committed to helping businesses achieve carbon neutrality. Through optimized solar panel tilt angles and high-cop heat pumps, our installations offset over 12,000 metric tons of CO2 annually across India.",
      metrics: [
        { label: "Annual CO2 Offset", value: "12,000+ Tons" },
        { label: "Water Recycled", value: "50M+ Liters" },
        { label: "Energy Savings", value: "35% Average" }
      ]
    }
  ],

  // 10. Contact & Form Data
  contact: {
    sectionBadge: "Get In Touch",
    title: "Request an Engineering Consultation",
    subtitle: "Speak directly with our engineering team for site visits, project estimates, or AMC support.",
    formFields: {
      nameLabel: "Full Name *",
      emailLabel: "Work Email Address *",
      phoneLabel: "Phone Number *",
      serviceLabel: "Service Vertical *",
      messageLabel: "Project Location & Requirement Scope *",
      submitButton: "Request Quote & Consultation"
    }
  }
};
