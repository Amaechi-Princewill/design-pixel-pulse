
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
        relative bg-gradient-to-br overflow-hidden rounded-3xl shadow-lg
        ${isMobile ? 'aspect-[3/4] bg-gradient-to-br from-orange-100 to-orange-50' : ''}
        ${isDesktop ? 'aspect-[4/3] bg-gradient-to-br from-gray-900 to-black' : ''}
        ${project.id === 3 ? 'aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-50' : ''}
      `}>
        
        {/* Mobile Card 1 - Fashion */}
        {project.id === 1 && (
          <div className="relative h-full p-6 flex flex-col">
            <div className="flex-1 flex items-center justify-center">
              <img 
                src={project.image} 
                alt={project.title}
                className="max-h-64 object-contain"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-black">{project.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
              <Button className="w-full bg-orange-400 hover:bg-orange-500 text-white rounded-xl py-3">
                {project.buttonText}
              </Button>
            </div>
          </div>
        )}

        {/* Desktop Card - Omniwire */}
        {project.id === 2 && (
          <div className="relative h-full p-8 flex flex-col text-white">
            {project.brand && (
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 bg-white rounded"></div>
                <span className="text-white font-semibold">{project.brand}</span>
              </div>
            )}
            
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed max-w-md">{project.description}</p>
              <Button className="bg-green-400 hover:bg-green-500 text-black rounded-xl px-6 py-3 w-fit">
                {project.buttonText}
              </Button>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-green-400 transform rotate-45 translate-x-16 translate-y-16"></div>
            <div className="absolute top-1/2 right-8 w-20 h-20 bg-green-400/20 rounded-lg transform rotate-12"></div>
          </div>
        )}

        {/* Mobile Card 3 */}
        {project.id === 3 && (
          <div className="relative h-full p-6 flex flex-col">
            <div className="flex-1 flex items-center justify-center">
              <img 
                src={project.image} 
                alt={project.title}
                className="max-h-64 object-contain"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-black">{project.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
              <Button className="w-full bg-black hover:bg-gray-800 text-white rounded-xl py-3">
                {project.buttonText}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioCard;
