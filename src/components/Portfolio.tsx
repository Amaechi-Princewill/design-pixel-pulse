
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  type: "mobile" | "desktop";
  brand?: string;
}

const Portfolio = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Discover Your Style",
      description: "Explore a curated collection of clothing and accessories tailored to your unique taste.",
      image: "/lovable-uploads/10c8d0de-20b8-4137-a4fc-71ee632a9133.png",
      buttonText: "Get Started",
      type: "mobile"
    },
    {
      id: 2,
      title: "Modern Core Banking for Innovative Fintechs",
      description: "Launch faster, scale smarter, and innovate with confidence using our API-first, cloud-native core banking platform designed specifically for fintechs.",
      image: "/lovable-uploads/eff746fb-a662-4889-8345-20cbcbc87680.png",
      buttonText: "Get Started",
      type: "desktop",
      brand: "Omniwire"
    },
    {
      id: 3,
      title: "Get Your Groceries Delivered",
      description: "The best delivery app in town for delivering your daily fresh groceries.",
      image: "/lovable-uploads/c5c68fdd-3963-4eed-a4a0-e59ef1860423.png",
      buttonText: "Sign up",
      type: "mobile"
    },
    {
      id: 4,
      title: "Changing Your Mind of What Future Looks Like",
      description: "Our models are equipped with artificial intelligence, innovative sensors and autonomous control systems.",
      image: "/lovable-uploads/df373914-aeda-4b3b-a594-6679d738d426.png",
      buttonText: "Learn More",
      type: "desktop"
    },
    {
      id: 5,
      title: "Enhance Your Finance",
      description: "Your financial journey, simplified. Invest, spend, and grow your wealth with ease.",
      image: "/lovable-uploads/bb4c699d-abca-4287-b20c-34d8d8e26cd4.png",
      buttonText: "Get Started",
      type: "mobile"
    },
    {
      id: 6,
      title: "Track Your Performance",
      description: "Improve your ski performance, stay safe, and connect with other skiers.",
      image: "/lovable-uploads/32b20295-37bf-466b-b555-7c72dff0c73d.png",
      buttonText: "Get Started",
      type: "mobile"
    }
  ];

  return (
    <section className="px-6 md:px-8 py-12">
      <div className="flex gap-6 overflow-x-auto pb-4">
        {projects.map((project) => (
          <div key={project.id} className="flex-shrink-0 w-80">
            <PortfolioCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
