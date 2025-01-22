
import * as lucideReact from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-electric-blue/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h4 className="text-2xl font-bold mb-6 text-gradient">StorySpark</h4>
            <p className="text-white/70">Bringing Stories to Life, One Hero at a Time!</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-gradient">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/70 hover:text-electric-blue transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-electric-blue transition-colors">FAQ</a></li>
              <li><a href="#" className="text-white/70 hover:text-electric-blue transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-electric-blue transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-gradient">Follow Us</h4>
            <div className="flex space-x-4">
              {[lucideReact.Facebook, lucideReact.Twitter, lucideReact.Instagram, lucideReact.YoutubeIcon].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-electric-blue/10 flex items-center justify-center hover:bg-electric-blue/20 transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-electric-blue transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-gradient">Download App</h4>
            <div className="space-y-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="App Store"
                className="h-10 hover:opacity-80 transition-opacity cursor-pointer"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Play Store"
                className="h-10 hover:opacity-80 transition-opacity cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="border-t border-electric-blue/20 mt-16 pt-8 text-center text-white/50">
          <p>&copy; 2024 StorySpark. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

