const HeroSection = () => {
  return (
    <div className="relative w-full h-[200px] md:h-[250px] lg:h-[300px] overflow-hidden">
      
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4"
        alt="hero"
        className="w-full h-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        
        {/* Content */}
        <div className="text-center text-white px-4">
          
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">
            Discover Amazing Products
          </h1>

          <p className="mt-2 text-sm md:text-lg">
            Shop the latest trends at the best prices
          </p>

          <button className="mt-4 bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-200">
            Shop Now
          </button>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;