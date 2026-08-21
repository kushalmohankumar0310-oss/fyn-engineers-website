/**
 * CENTRAL DATA ARCHITECTURE - FYN Engineers Pvt. Ltd.
 * 
 * All UI sections dynamically consume copy, badges, links, and content from this object.
 * To update text, services, industries, or add custom sections, edit this data file directly!
 */

const siteContent = {
  // 1. Company Metadata
  company: {
    name: "FYN Engineers Pvt. Ltd.",
    shortName: "FYN Engineers",
    tagline: "Integrated Water & Energy Solutions",
    subTagline: "Design • Supply • Install • Service",
    slogan: "For Your Needs From Your Nature",
    brandPromise: "For Your Needs",
    established: "2020",
    phone: "+91 98765 43210",
    alternatePhone: "+91 120 4567 890",
    email: "info@fynengineers.com",
    address: "Plot No. 42, Sector 63, Noida, UP 201301",
    whatsappNumber: "919876543210"
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

  // 3. Hero Section
  hero: {
    badge: "Integrated Water, Renewable Energy & Electrical Solutions",
    headline: "FYN Engineers Pvt. Ltd.",
    headlineEmphasis: "For Your Needs",
    subheadline: "Engineering Solutions Designed \"For Your Needs\". We specialize in integrated water, renewable energy, and electrical engineering solutions to deliver reliable, efficient, and sustainable systems.",
    ctaPrimary: "Request Consultation",
    ctaSecondary: "Explore Verticals",
    quickFeatureCards: [
      {
        id: "aqua",
        title: "FYN Aqua",
        subtitle: "Complete Water Solutions",
        desc: "Comprehensive water management solutions for residential, commercial, industrial, and institutional applications.",
        logo: "logo-aqua.png",
        badgeColor: "cyan"
      },
      {
        id: "energy",
        title: "FYN Energy",
        subtitle: "Rooftop Solar & Power Solutions",
        desc: "Helping customers reduce electricity costs while contributing to a cleaner environment through high-performance solar solutions.",
        logo: "logo-energy.png",
        badgeColor: "emerald"
      }
    ]
  },

  // 4. About Us
  about: {
    sectionBadge: "About FYN Engineers",
    title: "Engineering Solutions Designed \"For Your Needs\"",
    description1: "FYN Engineers Pvt. Ltd. is a professionally managed engineering solutions company specializing in integrated water, renewable energy, and electrical engineering solutions. Our name, FYN, stands for \"For Your Needs,\" reflecting our commitment to understanding every customer's unique requirements and delivering reliable, efficient, and sustainable solutions.",
    description2: "We believe engineering is more than supplying products—it's about designing the right solution, executing projects professionally, and providing dependable after-sales support throughout the system's lifecycle. With a customer-first approach, technical expertise, and commitment to quality, we help residential, commercial, industrial, and institutional clients optimize water usage, improve energy efficiency, and build sustainable infrastructure.",
    vision: "To become India's most trusted engineering company for integrated water and renewable energy solutions through innovation, quality, and exceptional customer service.",
    mission: [
      "Provide reliable and sustainable engineering solutions.",
      "Deliver professional design, supply, installation, and after-sales support.",
      "Build long-term customer relationships based on trust.",
      "Promote clean energy and efficient water management."
    ],
    coreValues: [
      {
        title: "Integrity",
        desc: "We conduct our business with honesty, transparency, and ethical practices. Trust is the foundation of relationship.",
        icon: "⚖️"
      },
      {
        title: "Innovation",
        desc: "We embrace new technologies, ideas, and engineering practices to deliver smarter, more efficient, and future-ready solutions.",
        icon: "💡"
      },
      {
        title: "Customer First",
        desc: "We begin by understanding our customers' needs. Designed with customer-focused approach for value, reliability, performance.",
        icon: "🤝"
      },
      {
        title: "Quality",
        desc: "We are committed to quality in products, design, installation, execution, and service for long-lasting solutions.",
        icon: "⭐"
      },
      {
        title: "Sustainability",
        desc: "We promote responsible use of energy and water through sustainable technologies and eco-friendly solutions.",
        icon: "🌱"
      },
      {
        title: "Service Excellence",
        desc: "Responsive, dependable, and professional after-sales service to support customers throughout system lifecycles.",
        icon: "🛠️"
      }
    ]
  },

  // 5. Business Verticals
  verticals: {
    sectionBadge: "Company at a Glance",
    title: "Our Core Services in Two Different Verticals",
    subtitle: "Two business verticals: FYN Aqua and FYN Energy",
    items: [
      {
        id: "aqua",
        name: "FYN Aqua",
        tagline: "Complete Water Solutions",
        accent: "cyan",
        logo: "logo-aqua.png",
        summary: "We deliver comprehensive water management solutions for residential, commercial, industrial, and institutional applications.",
        offerings: [
          "Complete Water Solutions",
          "Air Source Heat Pumps",
          "Drinking Water (RO) Systems",
          "Water Softeners",
          "Water Treatment Systems",
          "Pressure Pumps",
          "Hot Water Solutions"
        ]
      },
      {
        id: "energy",
        name: "FYN Energy",
        tagline: "Rooftop Solar, Electrical & Power Solutions",
        accent: "emerald",
        logo: "logo-energy.png",
        summary: "Helping customers reduce electricity costs while contributing to a cleaner environment through high-performance solar solutions.",
        offerings: [
          "Residential Solar Rooftop",
          "Commercial & Industrial Solar Rooftop",
          "Solar Street Lights",
          "Solar Water Pumping Systems",
          "Future Green Energy Solutions",
          "UPS Systems",
          "Voltage Stabilizers",
          "Power Backup Solutions",
          "Electrical Engineering Services"
        ]
      }
    ]
  },

  // 6. 6-Step Workflow Process
  process: {
    sectionBadge: "Our Engineering Process",
    title: "Site Survey → Design → Supply → Install → Service",
    subtitle: "Every project follows a systematic engineering approach to ensure quality, reliability, and long-term performance. We provide complete end-to-end engineering solutions, from consultation and system design to installation, commissioning, and long-term service support.",
    steps: [
      {
        step: "01",
        title: "Consultation",
        desc: "Understanding customer requirements and site conditions.",
        icon: "🔍"
      },
      {
        step: "02",
        title: "Engineering Design",
        desc: "Preparing optimized technical solutions.",
        icon: "📐"
      },
      {
        step: "03",
        title: "Product Selection",
        desc: "Choosing quality products from trusted manufacturers.",
        icon: "📦"
      },
      {
        step: "04",
        title: "Professional Installation",
        desc: "Safe and efficient installation by trained engineers.",
        icon: "⚙️"
      },
      {
        step: "05",
        title: "Testing & Commissioning",
        desc: "Ensuring optimum performance before handover.",
        icon: "✅"
      },
      {
        step: "06",
        title: "After-Sales Support",
        desc: "Regular maintenance, service support, and customer assistance.",
        icon: "🎧"
      }
    ]
  },

  // 7. Why Choose Us & Industries
  whyUs: {
    sectionBadge: "Why Choose FYN?",
    title: "Solution-led rather than product-led",
    features: [
      {
        title: "Solution-led Approach",
        desc: "We begin with the customer's application and objective.",
        icon: "⚖️"
      },
      {
        title: "Unified Operating Model",
        desc: "Engineering + execution + service under one operating model.",
        icon: "📦"
      },
      {
        title: "Site-Specific Sizing",
        desc: "Sizing and technology selection to improve performance and lifecycle economics.",
        icon: "📐"
      },
      {
        title: "Focused Portfolio",
        desc: "Focused portfolio across water and energy with strong cross-selling potential.",
        icon: "🔍"
      },
      {
        title: "Customer Relationships",
        desc: "Relationships built around responsiveness, transparency and long-term support.",
        icon: "🤝"
      },
      {
        title: "Channel-Friendly Model",
        desc: "Supported by technical assistance, project execution and after-sales capability.",
        icon: "🎧"
      }
    ]
  },

  industries: {
    sectionBadge: "Industries We Serve",
    title: "Sectors We Empower",
    subtitle: "Custom utility solutions for commercial, industrial, and institutional sectors",
    categories: ["All", "Industrial", "Commercial", "Healthcare & Institutional"],
    list: [
      { name: "Residential", category: "Commercial", icon: "🏡" },
      { name: "Commercial Buildings", category: "Commercial", icon: "🏢" },
      { name: "Hotels & Resorts", category: "Commercial", icon: "🏨" },
      { name: "Hospitals", category: "Healthcare & Institutional", icon: "🏥" },
      { name: "Educational Institutions", category: "Healthcare & Institutional", icon: "🎓" },
      { name: "Manufacturing Industries", category: "Industrial", icon: "🏭" },
      { name: "Pharmaceutical Industries", category: "Industrial", icon: "💊" },
      { name: "Food Processing Units", category: "Industrial", icon: "🥗" },
      { name: "Warehouses", category: "Industrial", icon: "📦" },
      { name: "Government Organizations", category: "Healthcare & Institutional", icon: "🏛️" }
    ]
  },

  // 8. Projects & Portfolio
  projects: {
    sectionBadge: "Track Record",
    title: "Featured Engineering Projects",
    subtitle: "Proven turnkey installations delivering high efficiency",
    items: [
      {
        id: 1,
        title: "Commercial & Industrial Rooftop Solar",
        category: "Completed",
        location: "Noida Industrial Area",
        vertical: "Solar Energy",
        desc: "Power rooftop solar grid deployment reducing peak grid power draw by 65%.",
        metric: "500 kW Output",
        icon: "☀️"
      },
      {
        id: 2,
        title: "Water Treatment & Softening Plant",
        category: "Completed",
        location: "Pharma Manufacturing Facility",
        vertical: "Water Solutions",
        desc: "Raw borewell water softeners and treatment plant installation.",
        metric: "50,000 LPD Capacity",
        logo: "logo-aqua.png"
      },
      {
        id: 3,
        title: "UPS Systems & Power Backup Solutions",
        category: "Completed",
        location: "Commercial Data Center",
        vertical: "Electrical Solutions",
        desc: "Zero-millisecond switchover online UPS backup with automatic AMF sync.",
        metric: "200 kVA Backup",
        logo: "logo-energy.png"
      }
    ]
  },

  // 9. Custom Extra Sections
  customSections: [
    {
      id: "brand-promise",
      badge: "Brand Promise",
      title: "“For Your Needs”",
      content: "Every solution we provide is designed around the customer's requirements with a strong commitment to quality, timely execution, and dependable after-sales support. We don't simply supply products—we partner with our customers to create systems that add long-term value through quality, innovation, and dependable service.",
      metrics: [
        { label: "Engineering Excellence", value: "100%" },
        { label: "After-Sales Lifecycle Support", value: "24/7" },
        { label: "Customer Relationships", value: "Long-term" }
      ]
    }
  ]
};
