
import { Upload, Palette, Wand2 } from 'lucide-react';

const steps = [
  { 
    icon: <Upload className="w-12 h-12" />, 
    title: 'Upload a Photo', 
    description: 'Add your child\'s picture to personalize the hero.' 
  },
  { 
    icon: <Palette className="w-12 h-12" />, 
    title: 'Pick a Theme', 
    description: 'Choose from a variety of fun story themes.' 
  },
  { 
    icon: <Wand2 className="w-12 h-12" />, 
    title: 'Generate and Enjoy', 
    description: 'Watch a magical video story featuring your child!' 
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-electric-blue/5 to-neon-green/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-gradient">
          Creating a Story is as Easy as 1, 2, 3!
        </h2>
        <div className="grid md:grid-cols-3 gap-16">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center group">
              <div className="w-24 h-24 rounded-full bg-electric-blue/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 neon-border">
                <div className="text-electric-blue">
                  {step.icon}
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-electric-blue/50 to-neon-green/50" />
              )}
              <h3 className="text-2xl font-bold mb-4 text-gradient">{step.title}</h3>
              <p className="text-white/70 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

