import cropImage from '../assets/crop.jpg';


// Mock data for photographer portfolio
export const mockPortfolioData = {
  // Hero/Home section
  hero: {
    title: "Capturing Life's Precious Moments",
    subtitle: "Professional Photography Services",
    description: "From intimate weddings to dynamic commercial shoots, I specialize in creating timeless images that tell your story.",
    ctaText: "View My Work"
  },

  // Gallery/Portfolio images
  gallery: [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nfGVufDB8fHx8MTc1MjIxMzUzNXww&ixlib=rb-4.1.0&q=85",
      title: "Wedding Portrait",
      category: "Wedding",
      description: "Beautiful outdoor wedding ceremony"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHx3ZWRkaW5nfGVufDB8fHx8MTc1MjIxMzUzNXww&ixlib=rb-4.1.0&q=85",
      title: "Intimate Moment",
      category: "Wedding",
      description: "Capturing love in its purest form"
    },
    {
      id: 3,
      url: "https://images.pexels.com/photos/758898/pexels-photo-758898.png",
      title: "Wedding Celebration",
      category: "Wedding",
      description: "Joyful celebration moments"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHxwaG90b2dyYXBoeXxlbnwwfHx8fDE3NTIyMTM1Mjl8MA&ixlib=rb-4.1.0&q=85",
      title: "Studio Setup",
      category: "Commercial",
      description: "Professional studio photography"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1486916856992-e4db22c8df33?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHxwaG90b2dyYXBoeXxlbnwwfHx8fDE3NTIyMTM1Mjl8MA&ixlib=rb-4.1.0&q=85",
      title: "Detail Shot",
      category: "Commercial",
      description: "Precision and attention to detail"
    },
    {
      id: 6,
      url: "https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg",
      title: "On Location",
      category: "Commercial",
      description: "Professional on-location shoots"
    },
    {
      id: 7,
      url: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg",
      title: "In Action",
      category: "Behind the Scenes",
      description: "Photographer at work"
    },
    {
      id: 8,
      url: "https://images.pexels.com/photos/821749/pexels-photo-821749.jpeg",
      title: "Equipment",
      category: "Behind the Scenes",
      description: "Professional photography equipment"
    }
  ],

  // About section
  about: {
    title: "About Me",
    name: "Amol Sutar",
    bio: "With over 8 years of experience in professional photography, I specialize in capturing the essence of life's most important moments. From intimate weddings to dynamic commercial shoots, my passion lies in creating timeless images that tell compelling stories.",
    experience: "8+ Years Experience",
    projects: "500+ Projects Completed",
    clients: "200+ Happy Clients",
    image: cropImage
  },

  // Services section
  services: [
    {
      id: 1,
      title: "Wedding Photography",
      description: "Capture your special day with elegant and timeless wedding photography. From ceremony to reception, I document every precious moment.",
      features: ["Full day coverage", "Engagement sessions", "Photo albums", "Digital gallery"],
      price: "Starting from $2,500",
      icon: "❤️"
    },
    {
      id: 2,
      title: "Commercial Photography",
      description: "Professional commercial photography for businesses, products, and corporate events. High-quality images that represent your brand.",
      features: ["Product photography", "Corporate headshots", "Event coverage", "Brand campaigns"],
      price: "Starting from $800",
      icon: "📸"
    },
    {
      id: 3,
      title: "Portrait Sessions",
      description: "Personal and family portrait sessions in studio or outdoor locations. Professional portraits that capture your personality.",
      features: ["Individual portraits", "Family sessions", "Studio & outdoor", "Retouching included"],
      price: "Starting from $400",
      icon: "👤"
    },
    {
      id: 4,
      title: "Event Photography",
      description: "Complete event coverage for corporate gatherings, parties, and special occasions. Candid moments and formal shots.",
      features: ["Event coverage", "Candid photography", "Group photos", "Same day preview"],
      price: "Starting from $600",
      icon: "🎉"
    }
  ],

  // Testimonials section
  testimonials: [
    {
      id: 1,
      name: "Sarah & Michael Johnson",
      service: "Wedding Photography",
      text: "Alex captured our wedding day perfectly! The photos are absolutely stunning and we couldn't be happier with the results. Professional, creative, and a joy to work with.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdHxlbnwwfHx8fDE3NTIyMTM1Mjl8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      id: 2,
      name: "David Chen",
      service: "Commercial Photography",
      text: "Outstanding commercial photography for our product launch. Alex understood our vision perfectly and delivered images that exceeded our expectations.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdHxlbnwwfHx8fDE3NTIyMTM1Mjl8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      service: "Portrait Session",
      text: "Amazing family portrait session! Alex made us feel comfortable and natural. The photos captured our family's personality beautifully.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdHxlbnwwfHx8fDE3NTIyMTM1Mjl8MA&ixlib=rb-4.1.0&q=85"
    }
  ],

  // Contact info
  contact: {
    email: "amolsutar4999@gmail.com",
    phone: "+91 9552314999",
    address: "AT-POST Radhanagari, Kolhapur ",
    socialMedia: {
      instagram: "@amol_sutar_photography",
      // facebook: "photographybyalex",
      // linkedin: "alexrichardson"
    }
  }
};