import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    sectionId: string
  ): void => {
    event.preventDefault();

    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }

    window.history.replaceState(null, '', `#${sectionId}`);
  };

  return (
    <nav
      className={`fixed w-full z-50 ${isScrolled ? 'py-4 bg-glass' : 'py-6'}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-3xl font-bold text-gradient">
              StorySpark
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, 'home')}
              className="text-white/80 hover:text-electric-blue"
            >
              Home
            </a>
            <a
              href="#features"
              onClick={(e) => scrollToSection(e, 'features')}
              className="text-white/80 hover:text-electric-blue"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => scrollToSection(e, 'how-it-works')}
              className="text-white/80 hover:text-electric-blue"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              onClick={(e) => scrollToSection(e, 'pricing')}
              className="text-white/80 hover:text-electric-blue"
            >
              Pricing
            </a>
            <button className="bg-electric-blue/10 hover:bg-electric-blue/20 text-electric-blue px-8 py-3 rounded-full font-semibold neon-border">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-electric-blue"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-glass py-6 border-t border-electric-blue/20">
            <div className="flex flex-col space-y-6 px-6">
              <a
                href="#home"
                onClick={(e) => {
                  scrollToSection(e, 'home');
                  setIsMobileMenuOpen(false);
                }}
                className="text-white/80 hover:text-electric-blue"
              >
                Home
              </a>
              <a
                href="#features"
                onClick={(e) => {
                  scrollToSection(e, 'features');
                  setIsMobileMenuOpen(false);
                }}
                className="text-white/80 hover:text-electric-blue"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                onClick={(e) => {
                  scrollToSection(e, 'how-it-works');
                  setIsMobileMenuOpen(false);
                }}
                className="text-white/80 hover:text-electric-blue"
              >
                How It Works
              </a>
              <a
                href="#pricing"
                onClick={(e) => {
                  scrollToSection(e, 'pricing');
                  setIsMobileMenuOpen(false);
                }}
                className="text-white/80 hover:text-electric-blue"
              >
                Pricing
              </a>
              <button className="bg-electric-blue/10 hover:bg-electric-blue/20 text-electric-blue px-8 py-3 rounded-full font-semibold neon-border">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
