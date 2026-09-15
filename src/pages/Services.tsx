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
  HelpCircle,
  ChevronDown,
  Banknote,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { detailedServices, companyInfo, serviceCategories, serviceGeneralFaqs, ServiceFAQ } from '../mock';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'mechanical' | 'electrical' | 'denting-painting'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // FAQ state
  const [faqCategory, setFaqCategory] = useState<'all' | 'pricing' | 'duration' | 'warranty'>('all');
  const [faqSearch, setFaqSearch] = useState('');
  const [openFaqIds, setOpenFaqIds] = useState<string[]>([
    'pricing-calculation',
    'duration-mechanical',
    'warranty-mechanical-parts'
  ]);

  const toggleFaq = (id: string) => {
    setOpenFaqIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const expandAllFaqs = () => {
    setOpenFaqIds(serviceGeneralFaqs.map((f) => f.id));
  };

  const collapseAllFaqs = () => {
    setOpenFaqIds([]);
  };

  // Filter FAQs
  const filteredFaqs = useMemo(() => {
    return serviceGeneralFaqs.filter((faq) => {
      const matchesCategory = faqCategory === 'all' || faq.category === faqCategory;
      const matchesQuery =
        faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
        faq.answer.toLowerCase().includes(faqSearch.toLowerCase()) ||
        (faq.highlight && faq.highlight.toLowerCase().includes(faqSearch.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [faqCategory, faqSearch]);

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

            <a
              href="#service-faqs"
              id="quick-jump-faqs"
              className="px-4 py-2 rounded-lg text-xs md:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-1.5 bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-600 ml-auto"
            >
              <HelpCircle size={15} className="text-red-600" />
              <span>Pricing, Duration & Warranty FAQs</span>
            </a>
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

      {/* Frequently Asked Questions Section (Pricing, Duration & Warranty) */}
      <section id="service-faqs" className="py-16 md:py-24 bg-gray-50/80 border-t border-gray-200 scroll-mt-20">
        <div className="container mx-auto px-4">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100 text-red-700 mb-3 border border-red-200">
              <HelpCircle size={14} />
              <span>Customer Help & Transparency</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Clear, upfront answers regarding our repair costs, expected turnaround times, and comprehensive warranty coverages across mechanical, electrical, and paint divisions.
            </p>
          </div>

          {/* 3 Core Commitments Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {/* Pricing Commitment */}
            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
                  <Banknote size={20} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-1.5">Upfront & Itemized Pricing</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Complimentary visual multi-point check, written itemized quotation before any wrench turns, and strictly zero hidden surcharges or surprise bills.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] font-bold text-blue-700">
                <span>Free Initial Assessment</span>
                <span>Transparent Labor Rates</span>
              </div>
            </div>

            {/* Duration Commitment */}
            <div className="bg-white p-6 rounded-2xl border border-amber-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-3">
                  <Clock size={20} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-1.5">Predictable Turnaround</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Same-day delivery (1.5 to 3 hours) for scheduled oil, brake, and tune-up jobs. 24–48 hours for panel denting & oven baking. Rapid-triage emergency bays.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] font-bold text-amber-700">
                <span>Same-Day Maintenance</span>
                <span>Fast Diagnostic Scans</span>
              </div>
            </div>

            {/* Warranty Commitment */}
            <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-1.5">Guaranteed Workmanship</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  6-month / 10,000 km warranty on mechanical repairs, full manufacturer parts warranty, and up to 3-year paint warranty against fading and clearcoat peeling.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] font-bold text-emerald-700">
                <span>6-Mo Mechanical</span>
                <span>Up to 3-Yr Paint Warranty</span>
              </div>
            </div>
          </div>

          {/* FAQ Interactive Controls: Search & Category Tabs */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-white p-4 rounded-2xl border border-gray-200/80 shadow-sm space-y-4">
              
              {/* FAQ Search Bar */}
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  type="text"
                  placeholder="Search questions (e.g. quote, timing, diagnostic fee, paint warranty, card payment, lounge)..."
                  value={faqSearch}
                  onChange={(e) => setFaqSearch(e.target.value)}
                  className="pl-10 pr-10 py-2.5 bg-gray-50 hover:bg-white focus:bg-white text-sm rounded-xl border-gray-200"
                />
                {faqSearch && (
                  <button
                    type="button"
                    onClick={() => setFaqSearch('')}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-400 hover:text-gray-600"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Category Filter Chips and Expand/Collapse Controls */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-gray-100">
                <div className="flex flex-wrap items-center gap-1.5">
                  <button
                    type="button"
                    id="faq-filter-all"
                    onClick={() => setFaqCategory('all')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                      faqCategory === 'all'
                        ? 'bg-red-600 text-white shadow-xs'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    All Questions ({serviceGeneralFaqs.length})
                  </button>

                  <button
                    type="button"
                    id="faq-filter-pricing"
                    onClick={() => setFaqCategory('pricing')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors ${
                      faqCategory === 'pricing'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Banknote size={14} />
                    <span>Pricing & Estimates (4)</span>
                  </button>

                  <button
                    type="button"
                    id="faq-filter-duration"
                    onClick={() => setFaqCategory('duration')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors ${
                      faqCategory === 'duration'
                        ? 'bg-amber-600 text-white shadow-xs'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Clock size={14} />
                    <span>Duration & Turnaround (4)</span>
                  </button>

                  <button
                    type="button"
                    id="faq-filter-warranty"
                    onClick={() => setFaqCategory('warranty')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors ${
                      faqCategory === 'warranty'
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <ShieldCheck size={14} />
                    <span>Warranty & Guarantee (4)</span>
                  </button>
                </div>

                {/* Expand / Collapse All Buttons */}
                <div className="flex items-center gap-2 text-xs">
                  <button
                    type="button"
                    onClick={expandAllFaqs}
                    className="text-gray-500 hover:text-red-600 font-semibold transition-colors"
                  >
                    Expand All
                  </button>
                  <span className="text-gray-300">|</span>
                  <button
                    type="button"
                    onClick={collapseAllFaqs}
                    className="text-gray-500 hover:text-red-600 font-semibold transition-colors"
                  >
                    Collapse All
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Accordion FAQ List */}
          <div className="max-w-4xl mx-auto space-y-3.5">
            {filteredFaqs.length === 0 ? (
              <div className="bg-white rounded-2xl p-10 text-center border border-gray-200">
                <HelpCircle size={36} className="text-gray-300 mx-auto mb-2" />
                <h4 className="font-bold text-gray-800 text-base mb-1">No matching questions found</h4>
                <p className="text-xs text-gray-500 mb-4">
                  We couldn't find an answer matching "{faqSearch}". Try another keyword or reset the filter.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFaqSearch('');
                    setFaqCategory('all');
                  }}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg text-xs font-bold"
                >
                  Reset FAQ Filter
                </button>
              </div>
            ) : (
              filteredFaqs.map((faq) => {
                const isOpen = openFaqIds.includes(faq.id);

                const categoryMeta =
                  faq.category === 'pricing'
                    ? { label: 'Pricing & Estimates', icon: Banknote, badge: 'bg-blue-50 text-blue-700 border-blue-200' }
                    : faq.category === 'duration'
                    ? { label: 'Duration & Timing', icon: Clock, badge: 'bg-amber-50 text-amber-700 border-amber-200' }
                    : { label: 'Warranty & Guarantee', icon: ShieldCheck, badge: 'bg-emerald-50 text-emerald-700 border-emerald-200' };

                const CategoryIcon = categoryMeta.icon;

                return (
                  <div
                    key={faq.id}
                    id={`faq-item-${faq.id}`}
                    className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen ? 'border-red-300 shadow-md ring-1 ring-red-100' : 'border-gray-200/90 shadow-xs hover:border-gray-300'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      aria-expanded={isOpen}
                      className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 group focus:outline-none"
                    >
                      <div className="space-y-1.5 flex-1">
                        <div className="flex items-center gap-2">
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold border uppercase tracking-wider ${categoryMeta.badge}`}>
                            <CategoryIcon size={11} />
                            <span>{categoryMeta.label}</span>
                          </span>
                        </div>
                        <h3 className={`font-bold text-base sm:text-lg transition-colors pr-2 leading-snug ${
                          isOpen ? 'text-red-600' : 'text-gray-900 group-hover:text-red-600'
                        }`}>
                          {faq.question}
                        </h3>
                      </div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 transition-all duration-200 ${
                        isOpen ? 'bg-red-100 text-red-600 rotate-180' : 'bg-gray-100 text-gray-500 group-hover:bg-red-50 group-hover:text-red-600'
                      }`}>
                        <ChevronDown size={18} />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-gray-100 text-gray-700 text-sm sm:text-base leading-relaxed animate-in fade-in slide-in-from-top-1 duration-150">
                        <p className="mb-4">
                          {faq.answer}
                        </p>

                        {faq.highlight && (
                          <div className="bg-gray-50 rounded-xl p-3.5 border border-gray-200 flex items-start gap-2.5 text-xs text-gray-800 font-medium">
                            <Sparkles size={15} className="text-red-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-bold text-gray-900">Key Takeaway: </span>
                              <span>{faq.highlight}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* FAQ Bottom Support Bar */}
          <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h4 className="font-bold text-gray-900 text-base">Still Have Questions About Your Car?</h4>
              <p className="text-xs text-gray-500 mt-0.5">
                Our workshop manager and master technicians in Sialkot are ready to assist you right now.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2.5 flex-shrink-0">
              <a
                href={`tel:${companyInfo.phone}`}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg shadow-sm transition-colors inline-flex items-center gap-1.5"
              >
                <Phone size={14} />
                <span>Call Workshop</span>
              </a>
              <a
                href={`https://wa.me/923086271825?text=Hello%20Z.A%20Auto%20Workshop,%20I%20have%20a%20question%20regarding%20pricing%20and%20service%20turnaround`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg shadow-sm transition-colors inline-flex items-center gap-1.5"
              >
                <MessageSquare size={14} />
                <span>WhatsApp Us</span>
              </a>
              <Link
                to="/contact"
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg shadow-sm transition-colors inline-flex items-center gap-1.5"
              >
                <Calendar size={14} />
                <span>Book Service</span>
              </Link>
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
