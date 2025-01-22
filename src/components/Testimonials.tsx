import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  { 
    name: 'Maria', 
    location: 'California', 
    text: 'Seeing my son as the hero of a space adventure was incredible – he\'s watched it 20 times already!', 
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces' 
  },
  { 
    name: 'Rahul', 
    location: 'India', 
    text: 'Finally, a fun way to teach my daughter our local language!', 
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces' 
  }
];

const Testimonials = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          What Parents Are Saying
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-glass hover:bg-electric-blue/5 transition-all duration-500 transform hover:-translate-y-2 neon-border">
              <Quote className="w-12 h-12 text-electric-blue mb-6" />
              <p className="text-white/90 italic text-lg mb-8">"{testimonial.text}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 ring-2 ring-electric-blue/50"
                />
                <div>
                  <h3 className="font-bold text-gradient">{testimonial.name}</h3>
                  <p className="text-white/70">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;

