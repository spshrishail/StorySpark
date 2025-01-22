import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  { 
    name: 'Free Trial', 
    price: '$0', 
    features: ['Create your first story', 'Basic themes', 'HD quality'] 
  },
  { 
    name: 'Premium', 
    price: '$9.99/mo', 
    features: ['Unlimited stories', 'All themes', '4K quality', 'Priority support'],
    popular: true
  },
  { 
    name: 'Family Pack', 
    price: '$19.99/mo', 
    features: ['Up to 4 children', 'All Premium features', 'Family sharing', 'Exclusive themes'] 
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-neon-green/5 to-electric-blue/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Affordable Plans for Every Family
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group p-8 rounded-2xl bg-glass hover:bg-electric-blue/5 transition-all duration-500 transform hover:-translate-y-2 relative ${
                plan.popular ? 'scale-105 md:scale-110' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-electric-blue to-neon-green text-black px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              <div className="neon-border absolute inset-0 rounded-2xl" />
              <h3 className="text-2xl font-bold mb-2 text-gradient">{plan.name}</h3>
              <p className="text-4xl font-bold mb-8 text-white">{plan.price}</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-white/80">
                    <Check className="w-5 h-5 text-neon-green mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-electric-blue/10 hover:bg-electric-blue/20 text-electric-blue px-6 py-3 rounded-full font-bold transition-all duration-300 neon-border group-hover:scale-105">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

