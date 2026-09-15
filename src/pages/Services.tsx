import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  Zap, 
  Paintbrush, 
  CheckCircle2, 
  Search, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Phone, 
  Calendar,
  Layers,
  HelpCircle
} from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { detailedServices, companyInfo, serviceCategories } from '../mock';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'mechanical' | 'electrical' | 'denting-painting'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const iconMap = {
    wrench: Wrench,
    zap: Zap,
    paint: Paintbrush
  };

  // Filter services by category and search query
  const filteredServices = useMemo(() => {
    return detailedServices.filter((s) => {
      const matchesCategory = selectedCategory === 'all' || s.categorySlug === selectedCategory;
      const matchesSearch = 
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.included.some(inc => inc.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-600/90 text-white mb-4">
              Comprehensive Vehicle Solutions
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
              Automotive Services & Specialist Divisions
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              Explore our complete suite of mechanical repairs, specialized auto electrical diagnostics, and high-precision denting & oven spray painting. Every service is backed by transparent upfront pricing and our quality warranty.
            </p>

            {/* Live Search Bar */}
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search services (e.g. brakes, AC regas, denting, computer scan)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 bg-white text-gray-900 placeholder:text-gray-400 rounded-xl shadow-lg border-0 text-base focus-visible:ring-2 focus-visible:ring-red-500"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-400 hover:text-gray-600"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs Section */}
      <section className="bg-white border-b border-gray-200 sticky top-[69px] z-30 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 py-3 overflow-x-auto no-scrollbar">
            <button
              type="button"
              id="filter-all"
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg text-xs md:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                selectedCategory === 'all'
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Layers size={16} />
              <span>All Services ({detailedServices.length})</span>
            </button>

            <button
              type="button"
              id="filter-mechanical"
              onClick={() => setSelectedCategory('mechanical')}
              className={`px-4 py-2 rounded-lg text-xs md:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                selectedCategory === 'mechanical'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Wrench size={16} />
              <span>Mechanical (3)</span>
            </button>

            <button
              type="button"
              id="filter-electrical"
              onClick={() => setSelectedCategory('electrical')}
              className={`px-4 py-2 rounded-lg text-xs md:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                selectedCategory === 'electrical'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Zap size={16} />
              <span>Auto Electrical (4)</span>
            </button>

            <button
              type="button"
              id="filter-denting-painting"
              onClick={() => setSelectedCategory('denting-painting')}
              className={`px-4 py-2 rounded-lg text-xs md:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                selectedCategory === 'denting-painting'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Paintbrush size={16} />
              <span>Denting & Painting (4)</span>
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedCategory === 'all'
                  ? 'All Specialized Vehicle Services'
                  : selectedCategory === 'mechanical'
                  ? 'Core Mechanical Repairs'
                  : selectedCategory === 'electrical'
                  ? 'Auto Electrical & Computer Diagnostics'
                  : 'Denting & Baking Oven Painting'}
              </h2>
              <p className="text-sm text-gray-500">
                Showing {filteredServices.length} detailed automotive services
              </p>
            </div>
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-700"
            >
              <span>Need a custom quote?</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {filteredServices.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center max-w-md mx-auto border border-gray-100 shadow-sm">
              <Search size={40} className="text-gray-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-1">No services found</h3>
              <p className="text-xs text-gray-500 mb-4">
                No matching service found for "{searchQuery}". Try a different keyword or reset filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="px-4 py-2 bg-red-600 text-white text-xs font-bold rounded-lg"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => {
                const IconComponent = iconMap[service.icon];
                const badgeColor =
                  service.icon === 'wrench'
                    ? 'bg-blue-50 text-blue-700 border-blue-200'
                    : service.icon === 'zap'
                    ? 'bg-amber-50 text-amber-700 border-amber-200'
                    : 'bg-emerald-50 text-emerald-700 border-emerald-200';

                return (
                  <Card
                    key={service.slug}
                    className="border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group rounded-2xl overflow-hidden bg-white"
                  >
                    <CardContent className="p-6 flex flex-col flex-1">
                      {/* Top Meta Bar */}
                      <div className="flex items-center justify-between mb-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold border ${badgeColor}`}>
                          <IconComponent size={13} />
                          <span>{service.category}</span>
                        </span>
                        <span className="text-[11px] text-gray-500 font-medium flex items-center gap-1">
                          <Clock size={12} />
                          <span>{service.duration}</span>
                        </span>
                      </div>

                      {/* Service Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                        <Link to={`/services/${service.slug}`}>
                          {service.name}
                        </Link>
                      </h3>

                      {/* Short Description */}
                      <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                        {service.shortDescription}
                      </p>

                      {/* Key Inclusions Checklist */}
                      <div className="mb-6 flex-1 space-y-2 border-t border-gray-100 pt-4">
                        <div className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">
                          Key Service Highlights:
                        </div>
                        {service.included.slice(0, 3).map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                            <CheckCircle2 size={14} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                            <span className="line-clamp-1">{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3 mt-auto">
                        <Link
                          to={`/services/${service.slug}`}
                          id={`view-details-${service.slug}`}
                          className="inline-flex items-center gap-1 text-sm font-bold text-red-600 group-hover:text-red-700 transition-colors"
                        >
                          <span>Full Details & Guide</span>
                          <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                        <Link
                          to={`/contact`}
                          className="px-3 py-1.5 bg-gray-100 hover:bg-red-600 hover:text-white text-gray-700 text-xs font-bold rounded-lg transition-colors"
                        >
                          Book Now
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Workshop Standards Guarantee Banner */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider mb-2 block">
              Z.A Auto Workshop Quality Standard
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Sialkot Drivers Choose Our Combined Workshop
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              We eliminate the frustration of jumping between different mechanics, auto electricians, and body repair painters. We diagnose accurately, quote transparently, and test thoroughly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Wrench size={24} />
              </div>
              <h4 className="font-bold text-gray-900 text-base mb-1">OEM Grade Spares</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Only genuine manufacturer or OEM-certified fluids and replacement parts used.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center">
              <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap size={24} />
              </div>
              <h4 className="font-bold text-gray-900 text-base mb-1">Digital Diagnostics</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Advanced live-data multi-brand scanners to pinpoint faults without guesswork.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Paintbrush size={24} />
              </div>
              <h4 className="font-bold text-gray-900 text-base mb-1">Oven Baked Paint</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Dust-free pressurized spray booth baking for deep, scratch-resistant factory luster.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center">
              <div className="w-12 h-12 bg-red-100 text-red-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                <ShieldCheck size={24} />
              </div>
              <h4 className="font-bold text-gray-900 text-base mb-1">Service Warranty</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Clear warranty coverage on all installed parts, electrical repairs, and paint jobs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Bar */}
      <section className="py-14 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">
              Have a Specific Vehicle Problem or Need an Estimate?
            </h3>
            <p className="text-red-100 text-sm max-w-xl">
              Visit our workshop on Kashmir Road Sialkot or call us directly. We provide free initial physical assessments and honest advice.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 flex-shrink-0">
            <a
              href={`tel:${companyInfo.phone}`}
              className="px-6 py-3 bg-white text-red-600 hover:bg-red-50 font-bold rounded-xl shadow transition-colors inline-flex items-center gap-2 text-sm"
            >
              <Phone size={16} />
              <span>Call: {companyInfo.phone}</span>
            </a>
            <Link
              to="/contact"
              className="px-6 py-3 bg-red-800 hover:bg-red-900 text-white font-bold rounded-xl shadow transition-colors inline-flex items-center gap-2 text-sm"
            >
              <Calendar size={16} />
              <span>Schedule Inspection</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
