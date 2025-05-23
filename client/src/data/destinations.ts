// A collection of destination data for the application
export interface Destination {
  id: string;
  name: string;
  cruiseCount: number;
  image: string;
  description: string;
}

export const destinations: Destination[] = [
  {
    id: "caribbean",
    name: "Caribbean",
    cruiseCount: 28,
    image: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    description: "Experience crystal-clear waters, white sand beaches, and vibrant island culture across multiple tropical paradises."
  },
  {
    id: "mediterranean",
    name: "Mediterranean",
    cruiseCount: 42,
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    description: "Explore ancient history, stunning coastal towns, and delicious cuisine along the shores of the Mediterranean Sea."
  },
  {
    id: "alaska",
    name: "Alaska",
    cruiseCount: 19,
    image: "https://pixabay.com/get/g33a91d3b1c7293c1116481bed4e65b7c36333b2a5feb01aa0b7001252c56001e1a53448409f64da69badef209bc878fdbfb2eb9f8162f1e30de7a557f2c40353_1280.jpg",
    description: "Witness majestic glaciers, stunning wildlife, and breathtaking mountain landscapes in America's last frontier."
  },
  {
    id: "baltic-sea",
    name: "Baltic Sea",
    cruiseCount: 15,
    image: "https://pixabay.com/get/g062b484c303152f7456e576327a22666db61706a98ca8f582a06dae59f0ea6d939b5ed99171ad7d618b7ce7da9c0a7d6132ba75fc32882e739e6f85118f22dd7_1280.jpg",
    description: "Visit charming Nordic and Baltic cities with rich history, stunning architecture, and fascinating cultural landmarks."
  },
  {
    id: "bahamas",
    name: "Bahamas",
    cruiseCount: 23,
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    description: "Experience paradise with pristine beaches, crystal-clear waters, and vibrant coral reefs perfect for snorkeling and diving."
  },
  {
    id: "pacific",
    name: "Pacific Islands",
    cruiseCount: 17,
    image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    description: "Discover remote island paradises with lush landscapes, unique cultures, and some of the most beautiful beaches in the world."
  },
  {
    id: "norway",
    name: "Norway Fjords",
    cruiseCount: 12,
    image: "https://pixabay.com/get/g4da8a6b3d959d9046e26da89c3fb735919f86237f5e0e1efd3c96a74cad7c462e060139607ae3d6ea8785d62bcba6c0b4e99af7067c224d9a2503dd749c8a0eb_1280.jpg",
    description: "Sail through dramatic fjords with towering cliffs, cascading waterfalls, and picturesque villages nestled between mountains."
  },
  {
    id: "asia",
    name: "Asia",
    cruiseCount: 31,
    image: "https://images.unsplash.com/photo-1536599424071-0b215a388ba7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    description: "Experience the rich tapestry of Asian cultures, ancient temples, bustling markets, and beautiful coastal scenery."
  }
];
