import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // On non-home pages, the header might always need a background if there's no dark hero
  const headerBgClass = scrolled || !isHome ? 'bg-background/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6';
  const textColorClass = scrolled || !isHome ? 'text-ink' : 'text-white drop-shadow-md';
  const linkHoverClass = scrolled || !isHome ? 'hover:text-gold' : 'hover:text-gold';

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-out ${headerBgClass}`}>
      <div className="container-projects px-8 md:px-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 group">
          <div className="relative h-8 w-12 flex items-center justify-center">
            {/* Using a simple CSS filter for dark/light logo swap if needed, or just standard logo */}
            <img src="/logo.png" alt="Amaze Architects Logo" className={`h-full w-auto object-contain transition-all duration-300 ${!isHome || scrolled ? 'opacity-90' : 'opacity-100'}`} />
          </div>
          <span className={`text-[10px] tracking-luxe uppercase transition-colors duration-300 ${textColorClass}`}>Amaze Architects & Consultant</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-[11px] tracking-luxe uppercase font-medium">
          <Link to="/projects" className={`transition-colors duration-300 ${textColorClass} ${linkHoverClass}`}>Work</Link>
          {isHome ? (
            <a href="#studio" className={`transition-colors duration-300 ${textColorClass} ${linkHoverClass}`}>Studio</a>
          ) : (
            <Link to="/#studio" className={`transition-colors duration-300 ${textColorClass} ${linkHoverClass}`}>Studio</Link>
          )}
          {isHome ? (
            <a href="#testimonials" className={`transition-colors duration-300 ${textColorClass} ${linkHoverClass}`}>Testimonials</a>
          ) : (
            <Link to="/#testimonials" className={`transition-colors duration-300 ${textColorClass} ${linkHoverClass}`}>Testimonials</Link>
          )}
          <Link to="/contact" className={`transition-colors duration-300 ${textColorClass} ${linkHoverClass}`}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
