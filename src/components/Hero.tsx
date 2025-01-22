
import { ChevronRight, Play, Sparkles, Star, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-gradient">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/20 rounded-full filter blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-green/20 rounded-full filter blur-[100px]" />
        </div>
        
        {/* Floating Elements */}
        <div className="animate-float absolute top-1/4 left-1/4">
          <Sparkles className="w-12 h-12 text-electric-blue" />
        </div>
        <div className="animate-float absolute top-1/3 right-1/4" style={{ animationDelay: '-2s' }}>
          <Star className="w-8 h-8 text-neon-green" />
        </div>
        <div className="animate-float absolute bottom-1/4 left-1/3" style={{ animationDelay: '-4s' }}>
          <Rocket className="w-10 h-10 text-electric-blue" />
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 text-gradient leading-tight">
          Turn Your Child into the Star of Their Own Story!
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto">
          Create magical, personalized video stories featuring your child as the superhero!
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button className="group w-full md:w-auto bg-electric-blue/10 hover:bg-electric-blue/20 text-electric-blue px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 neon-border flex items-center justify-center">
            Create a Story Now!
            <ChevronRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="group w-full md:w-auto bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-electric-blue/50 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center">
            Watch a Demo
            <Play className="ml-2 transform group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

