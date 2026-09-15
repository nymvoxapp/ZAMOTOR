import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, ChevronDown, Wrench, Zap, Paintbrush, Menu, X, ArrowRight } from 'lucide-react';
import { companyInfo, serviceCategories } from '../mock';

const Header = () => {
  const location = useLocation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location.pathname === path;
  const isServicesActive = location.pathname.startsWith('/services');

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [location.pathname]);

  const iconMap = {
    wrench: Wrench,
    zap: Zap,
    paint: Paintbrush
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Notification Bar */}
      <div className="bg-red-600 text-white py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex items-center gap-2 hover:text-red-100 transition-colors"
              id="header-phone-link"
            >
              <Phone size={15} />
              <span className="font-medium">{companyInfo.phone}</span>
            </a>
            <a
              href={`mailto:${companyInfo.email}`}
              className="hidden sm:flex items-center gap-2 hover:text-red-100 transition-colors"
              id="header-email-link"
            >
              <Mail size={15} />
              <span>{companyInfo.email}</span>
            </a>
          </div>
          <div className="text-xs text-red-100 font-medium">
            Sialkot &bull; Mon - Sat: 9:00 AM - 7:00 PM
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Logo */}
          <Link to="/" className="flex flex-col group" id="header-logo">
            <h1 className="text-2xl font-black text-blue-700 tracking-tight group-hover:text-blue-800 transition-colors">
              {companyInfo.name}
            </h1>
            <p className="text-xs text-gray-500 font-medium tracking-wide">
              {companyInfo.tagline}
            </p>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            <Link
              to="/"
              id="nav-link-home"
              className={`font-semibold text-sm transition-colors ${
                isActive('/') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown Menu */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                type="button"
                id="nav-services-dropdown-btn"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center gap-1.5 font-semibold text-sm transition-colors py-2 ${
                  isServicesActive ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
                }`}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180 text-red-600' : 'text-gray-500'}`}
                />
              </button>

              {/* Dropdown Content */}
              {isServicesOpen && (
                <div
                  id="header-services-dropdown-menu"
                  className="absolute left-1/2 -translate-x-1/2 top-full w-[760px] bg-white rounded-xl shadow-2xl border border-gray-100 p-6 z-50 transition-all duration-200 animate-in fade-in slide-in-from-top-2"
                >
                  <div className="grid grid-cols-3 gap-6">
                    {serviceCategories.map((category) => {
                      const IconComponent = iconMap[category.icon];
                      const badgeColor =
                        category.icon === 'wrench'
                          ? 'bg-blue-50 text-blue-700 border-blue-200'
                          : category.icon === 'zap'
                          ? 'bg-amber-50 text-amber-700 border-amber-200'
                          : 'bg-emerald-50 text-emerald-700 border-emerald-200';

                      return (
                        <div key={category.id} className="space-y-3">
                          {/* Category Header */}
                          <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
                            <div className={`w-7 h-7 rounded-md flex items-center justify-center border ${badgeColor}`}>
                              <IconComponent size={16} />
                            </div>
                            <h4 className="font-bold text-gray-900 text-sm leading-tight">
                              {category.title}
                            </h4>
                          </div>

                          {/* Category Services List */}
                          <ul className="space-y-1.5">
                            {category.services.map((service) => (
                              <li key={service.slug}>
                                <Link
                                  to={`/services/${service.slug}`}
                                  id={`dropdown-link-${service.slug}`}
                                  className="group/item block p-1.5 rounded-lg hover:bg-gray-50 transition-colors"
                                  onClick={() => setIsServicesOpen(false)}
                                >
                                  <div className="text-xs font-semibold text-gray-800 group-hover/item:text-red-600 transition-colors">
                                    {service.name}
                                  </div>
                                  <div className="text-[11px] text-gray-500 line-clamp-1">
                                    {service.description}
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>

                  {/* Dropdown Bottom Banner */}
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between bg-gray-50 -mx-6 -mb-6 p-4 rounded-b-xl">
                    <div className="text-xs text-gray-600">
                      Need a custom inspection or repair estimate in Sialkot?
                    </div>
                    <Link
                      to="/services"
                      id="dropdown-view-all-services"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <span>Explore All Services & Pricing</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              id="nav-link-about"
              className={`font-semibold text-sm transition-colors ${
                isActive('/about') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              About Us
            </Link>

            <Link
              to="/contact"
              id="nav-link-contact"
              className={`font-semibold text-sm transition-colors ${
                isActive('/contact') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              Contact
            </Link>

            {/* Book Now Button */}
            <Link
              to="/contact"
              id="nav-book-now-btn"
              className="ml-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg shadow-sm hover:shadow transition-all"
            >
              Book Service
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/contact"
              className="px-3 py-1.5 bg-red-600 text-white text-xs font-bold rounded-md"
            >
              Book
            </Link>
            <button
              type="button"
              id="mobile-menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-red-600 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div id="mobile-nav-drawer" className="md:hidden border-t border-gray-200 bg-white px-4 py-4 space-y-3">
          <Link
            to="/"
            className={`block py-2 text-sm font-semibold ${isActive('/') ? 'text-red-600' : 'text-gray-800'}`}
          >
            Home
          </Link>

          {/* Mobile Services Accordion */}
          <div className="border-t border-gray-100 pt-2">
            <div className="flex items-center justify-between py-2">
              <Link
                to="/services"
                className={`text-sm font-semibold ${isServicesActive ? 'text-red-600' : 'text-gray-800'}`}
              >
                All Services Overview
              </Link>
              <button
                type="button"
                id="mobile-services-expand-btn"
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="p-1.5 text-gray-500 hover:text-red-600"
                aria-label="Toggle services list"
              >
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180 text-red-600' : ''}`}
                />
              </button>
            </div>

            {isMobileServicesOpen && (
              <div className="pl-3 pr-1 py-2 space-y-4 bg-gray-50 rounded-lg mt-1 mb-2">
                {serviceCategories.map((cat) => (
                  <div key={cat.id} className="space-y-1.5">
                    <div className="text-xs font-bold text-gray-900 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                      {cat.title}
                    </div>
                    <ul className="pl-3 space-y-1 border-l-2 border-gray-200 ml-1">
                      {cat.services.map((s) => (
                        <li key={s.slug}>
                          <Link
                            to={`/services/${s.slug}`}
                            className="block py-1 text-xs text-gray-600 hover:text-red-600 font-medium"
                          >
                            {s.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/about"
            className={`block py-2 text-sm font-semibold border-t border-gray-100 ${isActive('/about') ? 'text-red-600' : 'text-gray-800'}`}
          >
            About Us
          </Link>

          <Link
            to="/contact"
            className={`block py-2 text-sm font-semibold border-t border-gray-100 ${isActive('/contact') ? 'text-red-600' : 'text-gray-800'}`}
          >
            Contact
          </Link>

          <div className="pt-2 border-t border-gray-100">
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-bold shadow-sm"
            >
              <Phone size={16} />
              <span>Call Now: {companyInfo.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

