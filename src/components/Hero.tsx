
const Hero = () => {
  return (
    <section className="px-6 md:px-8 py-12 md:py-20">
      <div className="max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
          <p className="text-gray-600 text-lg">
            I help startups and businesses with innovative ideas
          </p>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-black leading-tight mb-8">
          Transform your idea into reality. Bring your concepts to life.
        </h1>
        
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl leading-relaxed">
          Hi, I'm Evan C. Amaechi. As a UI/UX designer, I'm building a career grounded in one core belief: Design is not about decoration, it's about understanding people.
        </p>
      </div>
    </section>
  );
};

export default Hero;
