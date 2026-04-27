var tours = [
  {
    id: 1, title: "Sahara Luxury Camp", subtitle: "Desert Odyssey", category: "desert",
    duration: "3 Days / 2 Nights", price: "From \u20AC890",
    image: "https://picsum.photos/seed/sahara-golden-dunes-camp/800/600.jpg",
    gallery: [
      "https://picsum.photos/seed/sahara-luxury-tent-night/800/500.jpg",
      "https://picsum.photos/seed/sahara-camel-desert-sun/800/500.jpg",
      "https://picsum.photos/seed/sahara-starry-sky-desert/800/500.jpg"
    ],
    highlights: ["Private luxury desert camp", "Camel trek at sunset", "Traditional Berber dinner under stars", "4x4 desert excursion", "Sandboarding on golden dunes"],
    inclusions: ["Private A/C vehicle", "Luxury tent accommodation", "All meals & traditional tea", "Camel ride", "English-speaking guide", "Airport pickup & drop-off"],
    description: "Experience the magic of the Sahara in absolute luxury. This exclusive desert adventure takes you through the majestic Erg Chebbi dunes, where a private luxury camp awaits with all the comforts you desire. Watch the sunset from atop a camel, dine on traditional Berber cuisine under a canopy of stars, and wake to a desert sunrise that will take your breath away.",
    featured: true
  },
  {
    id: 2, title: "Imperial Cities Tour", subtitle: "Royal Heritage", category: "cultural",
    duration: "7 Days / 6 Nights", price: "From \u20AC1,850",
    image: "https://picsum.photos/seed/morocco-royal-palace-gate/800/600.jpg",
    gallery: [
      "https://picsum.photos/seed/marrakech-palace-entrance/800/500.jpg",
      "https://picsum.photos/seed/fes-ancient-tanneries/800/500.jpg",
      "https://picsum.photos/seed/rabat-royal-mausoleum/800/500.jpg"
    ],
    highlights: ["Marrakech medina exploration", "Fes ancient tanneries", "Rabat's royal landmarks", "Meknes imperial gates", "Private guided tours", "Traditional riad stays"],
    inclusions: ["Private transport throughout", "Luxury riad accommodation", "Daily breakfast & dinner", "Certified local guides", "Entrance fees", "Airport transfers"],
    description: "Journey through Morocco's four imperial cities \u2014 Marrakech, Fes, Rabat, and Meknes \u2014 each a treasure trove of history, architecture, and culture. Stay in hand-picked luxury riads, explore labyrinthine medinas with expert guides, and discover the royal heritage that shaped this extraordinary kingdom.",
    featured: true
  },
  {
    id: 3, title: "Ourika Valley Day Trip", subtitle: "Atlas Foothills Escape", category: "mountain",
    duration: "1 Day", price: "From \u20AC45",
    image: "https://picsum.photos/seed/ourika-valley-mountain-river/800/600.jpg",
    gallery: [
      "https://picsum.photos/seed/ourika-berber-village-green/800/500.jpg",
      "https://picsum.photos/seed/ourika-waterfall-setti-fatma/800/500.jpg",
      "https://picsum.photos/seed/ourika-valley-landscape-scenic/800/500.jpg"
    ],
    highlights: ["Discover the Berber village & tea with locals", "Visit the traditional Berber mill", "Argan oil cooperative by Berber women", "Setti Fatma waterfalls visit", "Breathtaking Atlas Mountains landscape", "Air-conditioned vehicle transport"],
    inclusions: ["Transport with experienced driver", "Air-conditioned vehicle", "Diesel fuel", "Transport insurance"],
    description: "Visiting the Ourika Valley during a stay in Marrakech is a must — a region very popular with tourists, where preserved nature and a magnificent river wind through the heart of the mountains. Explore the best of Morocco through this fascinating Marrakech day trip to the foothills of the Atlas Mountains. In the Ourika Valley you will enjoy the breathtaking landscape of the mountains, valley, and traditional Berber family earthen houses.",
    featured: false
  },
  {
    id: 4, title: "Essaouira Coastal Escape", subtitle: "Ocean Breeze", category: "coastal",
    duration: "2 Days / 1 Night", price: "From \u20AC490",
    image: "https://picsum.photos/seed/essaouira-blue-coast-town/800/600.jpg",
    gallery: [
      "https://picsum.photos/seed/essaouira-medina-port-view/800/500.jpg",
      "https://picsum.photos/seed/essaouira-sunset-beach/800/500.jpg",
      "https://picsum.photos/seed/essaouira-fortress-wall/800/500.jpg"
    ],
    highlights: ["Scenic coastal drive", "Medina of Essaouira", "Gnawa music experience", "Fresh seafood lunch", "Beach relaxation", "Argan oil cooperative visit"],
    inclusions: ["Private transport", "Boutique hotel", "Breakfast & seafood lunch", "Guided medina tour", "Essaouira transfers"],
    description: "Discover the enchanting coastal town of Essaouira, where Portuguese fortifications meet bohemian charm. Stroll through the windswept medina, savor the freshest seafood, listen to hypnotic Gnawa music, and relax on the expansive beach with the Atlantic breeze.",
    featured: false
  },
  {
    id: 5, title: "Fes Cultural Immersion", subtitle: "Spirit of Fes", category: "cultural",
    duration: "3 Days / 2 Nights", price: "From \u20AC750",
    image: "https://picsum.photos/seed/fes-ancient-medina-arch/800/600.jpg",
    gallery: [
      "https://picsum.photos/seed/fes-pottery-artisan/800/500.jpg",
      "https://picsum.photos/seed/fes-zellige-mosaic-art/800/500.jpg",
      "https://picsum.photos/seed/fes-narrow-alley-stone/800/500.jpg"
    ],
    highlights: ["UNESCO-listed medina", "Ancient tanneries visit", "Traditional pottery workshop", "Moroccan cooking class", "Sacred sites & madrasas"],
    inclusions: ["Private guide in Fes", "Luxury riad stay", "All meals", "Workshop fees", "Airport/train transfers"],
    description: "Dive deep into the spiritual and cultural heart of Morocco. Fes is the world's largest car-free urban area and a living museum of Islamic civilization. Experience its ancient tanneries, sacred madrasas, vibrant souks, and artisan workshops with a guide who brings centuries of history to life.",
    featured: false
  },
  {
    id: 6, title: "Marrakech Private Experience", subtitle: "Red City Exclusive", category: "cultural",
    duration: "4 Days / 3 Nights", price: "From \u20AC1,250",
    image: "https://picsum.photos/seed/marrakech-luxury-garden/800/600.jpg",
    gallery: [
      "https://picsum.photos/seed/marrakech-bahia-palace-room/800/500.jpg",
      "https://picsum.photos/seed/majorelle-garden-blue-botanical/800/500.jpg",
      "https://picsum.photos/seed/marrakech-souk-evening-lights/800/500.jpg"
    ],
    highlights: ["Private medina tour at sunrise", "Majorelle Garden access", "Luxury hammam & spa", "Jemaa el-Fnaa by night", "Atlas Mountains day trip", "Private cooking class"],
    inclusions: ["Private vehicle & driver", "5-star riad or hotel", "Daily breakfast", "Hammam experience", "All guided tours", "Airport transfers"],
    description: "Experience Marrakech like never before with this fully private, luxury-curated journey. From early-morning medina explorations to sunset rooftop views of the Atlas Mountains, every moment is designed to captivate. Includes exclusive spa treatments, private culinary experiences, and insider access to the city's most treasured spots.",
    featured: false
  }
];
