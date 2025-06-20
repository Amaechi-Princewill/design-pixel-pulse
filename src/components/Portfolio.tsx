
import PortfolioCard from "@/components/PortfolioCard";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Discover Your Style",
      description: "Explore a curated collection of clothing and accessories tailored to your unique taste.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=600&fit=crop",
      buttonText: "Get Started",
      type: "mobile"
    },
    {
      id: 2,
      title: "Modern Core Banking for Innovative Fintechs",
      description: "Launch faster, scale smarter, and innovate with confidence using our API-first, cloud-native core banking platform designed specifically for fintechs.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      buttonText: "Get Started",
      type: "desktop",
      brand: "Omniwire"
    },
    {
      id: 3,
      title: "Creative Solutions",
      description: "Innovative design approaches for modern businesses.",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=600&fit=crop",
      buttonText: "Explore",
      type: "mobile"
    }
  ];

  return (
    <section className="px-6 md:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
