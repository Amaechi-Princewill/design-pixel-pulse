
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-6 md:p-8">
      <div className="text-2xl font-bold text-black">
        FX
      </div>
      
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        <Button 
          className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
        >
          Contact
        </Button>
      </div>
    </header>
  );
};

export default Header;
