
import { Sparkles, Globe2, Video, Brain, Palette } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { 
    icon: <Sparkles className="w-8 h-8" />, 
    title: 'Personalized Adventures', 
    description: 'Stories tailored with your child\'s name, photo, and interests.' 
  },
  { 
    icon: <Globe2 className="w-8 h-8" />, 
    title: 'Multiple Languages', 
    description: 'Available in local languages to keep it relatable.' 
  },
  { 
    icon: <Video className="w-8 h-8" />, 
    title: 'Animated Videos', 
    description: 'High-quality animations bring the stories to life.' 
  },
  { 
    icon: <Brain className="w-8 h-8" />, 
    title: 'Educational Fun', 
    description: 'Stories that teach morals and spark creativity.' 
  },
  { 
    icon: <Palette className="w-8 h-8" />, 
    title: 'Interactive Themes', 
    description: 'Choose from superheroes, fairy tales, space adventures, and more!' 
  }
];

const Features = () => {
  return (
    <section id="features" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Why Kids and Parents Love StorySpark!
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group p-8 rounded-2xl bg-glass hover:bg-electric-blue/5 transition-all duration-500 transform hover:-translate-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.3, duration: 1.5 }} // Staggered slow appearance
            >
              <div className="text-electric-blue mb-6 group-hover:scale-110 transform transition-all duration-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gradient">{feature.title}</h3>
              <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

