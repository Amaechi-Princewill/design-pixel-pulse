
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  type: "mobile" | "desktop";
  brand?: string;
}

interface PortfolioCardProps {
  project: Project;
}

const PortfolioCard = ({ project }: PortfolioCardProps) => {
  const isMobile = project.type === "mobile";
  const isDesktop = project.type === "desktop";

  return (
    <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105">
      <div className={`
        relative bg-cover bg-center overflow-hidden rounded-3xl shadow-lg h-96
        ${isMobile ? 'aspect-[3/4]' : 'aspect-[4/3]'}
      `}
      style={{ backgroundImage: `url(${project.image})` }}>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Content overlay */}
        <div className="relative h-full p-6 flex flex-col justify-end text-white z-10">
          {project.brand && (
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-white rounded"></div>
              <span className="text-white font-semibold">{project.brand}</span>
            </div>
          )}
          
          <div className="space-y-3">
            <h3 className="text-xl font-bold leading-tight">{project.title}</h3>
            <p className="text-gray-200 text-sm leading-relaxed">{project.description}</p>
            <Button className="w-full bg-white text-black hover:bg-gray-100 rounded-xl py-3">
              {project.buttonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
