import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Wrench, 
  Zap, 
  Paintbrush, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  ShieldCheck, 
  Phone, 
  MessageSquare, 
  Calendar, 
  ArrowRight, 
  ChevronRight, 
  Car, 
  HelpCircle,
  MapPin
} from 'lucide-react';
import { detailedServices, companyInfo, submitContactForm } from '../mock';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Card, CardContent } from '../components/ui/card';
import { toast } from 'sonner';

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const service = detailedServices.find((s) => s.slug === slug);

  // Quick inquiry form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    carModel: '',
    preferredDate: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const iconMap = {
    wrench: Wrench,
    zap: Zap,
    paint: Paintbrush
  };

  if (!service) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center max-w-md">
          <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle size={32} />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Service Not Found</h1>
          <p className="text-gray-600 mb-6">
            The requested service could not be found or may have been moved.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow transition-colors"
          >
            <span>Browse All Services</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[service.icon];

  // Related services in the same category
  const relatedServices = detailedServices.filter(
    (s) => s.categorySlug === service.categorySlug && s.slug !== service.slug
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        service: service.name,
        name: formData.name,
        phone: formData.phone,
        carModel: formData.carModel,
        preferredDate: formData.preferredDate,
        message: `Booking request for ${service.name} (${formData.carModel || 'Car not specified'}). Notes: ${formData.notes || 'None'}`
      };

      const res = await submitContactForm(payload);
      if (res.success) {
        toast.success(`Booking request received for ${service.name}! Our team will contact you shortly.`);
        setFormData({
          name: '',
          phone: '',
          carModel: '',
          preferredDate: '',
          notes: ''
        });
      }
    } catch {
      toast.error('Unable to send booking request. Please call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const badgeTheme =
    service.icon === 'wrench'
      ? { bg: 'bg-blue-50 text-blue-700 border-blue-200', iconBg: 'bg-blue-600' }
      : service.icon === 'zap'
      ? { bg: 'bg-amber-50 text-amber-700 border-amber-200', iconBg: 'bg-amber-600' }
      : { bg: 'bg-emerald-50 text-emerald-700 border-emerald-200', iconBg: 'bg-emerald-600' };

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200 py-3">
        <div className="container mx-auto px-4 text-xs sm:text-sm text-gray-500 flex items-center flex-wrap gap-1.5">
          <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
          <ChevronRight size={14} className="text-gray-400" />
          <Link to="/services" className="hover:text-red-600 transition-colors">Services</Link>
          <ChevronRight size={14} className="text-gray-400" />
          <span className="text-gray-600">{service.category}</span>
          <ChevronRight size={14} className="text-gray-400" />
          <span className="font-semibold text-gray-900">{service.name}</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 text-white py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-blue-200 border border-white/20 mb-4">
              <IconComponent size={14} />
              <span>{service.category}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">
              {service.name}
            </h1>

            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
              {service.shortDescription}
            </p>

            {/* Quick Metrics Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/15">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                <div className="flex items-center gap-1.5 text-blue-200 text-xs mb-1">
                  <Clock size={14} />
                  <span>Turnaround</span>
                </div>
                <div className="font-bold text-sm text-white">{service.duration}</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                <div className="flex items-center gap-1.5 text-blue-200 text-xs mb-1">
                  <ShieldCheck size={14} />
                  <span>Warranty</span>
                </div>
                <div className="font-bold text-sm text-white">Guaranteed</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                <div className="flex items-center gap-1.5 text-blue-200 text-xs mb-1">
                  <Car size={14} />
                  <span>Vehicle Types</span>
                </div>
                <div className="font-bold text-sm text-white">All Makes & Models</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                <div className="flex items-center gap-1.5 text-blue-200 text-xs mb-1">
                  <MapPin size={14} />
                  <span>Location</span>
                </div>
                <div className="font-bold text-sm text-white">Sialkot Workshop</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            
            {/* Primary Details (Left 2 columns) */}
            <div className="lg:col-span-2 space-y-10">
              
              {/* Detailed Overview */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg ${badgeTheme.iconBg} text-white flex items-center justify-center flex-shrink-0`}>
                    <IconComponent size={18} />
                  </div>
                  <span>Service Overview</span>
                </h2>
                <p className="text-gray-700 leading-relaxed text-base mb-6">
                  {service.fullDescription}
                </p>
                <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-red-600 flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Warranty Standard</div>
                    <div className="text-sm font-bold text-gray-900">{service.warranty}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Estimated Time</div>
                    <div className="text-sm font-bold text-blue-700">{service.duration}</div>
                  </div>
                </div>
              </div>

              {/* What's Included */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2.5">
                  <CheckCircle2 size={24} className="text-emerald-600" />
                  <span>What's Included in This Service</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.included.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50 hover:bg-gray-100/80 transition-colors border border-gray-100"
                    >
                      <CheckCircle2 size={18} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-800 font-medium leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Warning Signs */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle size={22} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Signs Your Vehicle Needs This</h2>
                    <p className="text-xs text-gray-500">Notice any of these warning symptoms in your car?</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {service.signs.map((sign, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-xl bg-amber-50/70 border border-amber-200/60"
                    >
                      <span className="w-6 h-6 rounded-full bg-amber-200 text-amber-900 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                        !
                      </span>
                      <p className="text-sm font-semibold text-gray-900 leading-snug">
                        {sign}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4-Step Process */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Our Step-by-Step Service Procedure
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
                  {service.process.map((step) => (
                    <div
                      key={step.step}
                      className="relative bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-blue-400 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center">
                          {step.step}
                        </span>
                        <h3 className="font-bold text-gray-900 text-base">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed pl-11">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              {service.faqs && service.faqs.length > 0 && (
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2.5">
                    <HelpCircle size={24} className="text-blue-600" />
                    <span>Frequently Asked Questions</span>
                  </h2>
                  <div className="space-y-4">
                    {service.faqs.map((faq, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-gray-50 border border-gray-200/80">
                        <h3 className="font-bold text-gray-900 text-base mb-2">
                          {faq.question}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Services in this Division */}
              {relatedServices.length > 0 && (
                <div className="pt-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Other Services in {service.category}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {relatedServices.map((rel) => (
                      <Link
                        key={rel.slug}
                        to={`/services/${rel.slug}`}
                        className="group block p-4 bg-white rounded-xl border border-gray-200 hover:border-red-500 hover:shadow-md transition-all"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold text-gray-900 text-sm group-hover:text-red-600 transition-colors">
                            {rel.name}
                          </h4>
                          <ArrowRight size={16} className="text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
                        </div>
                        <p className="text-xs text-gray-500 line-clamp-2">
                          {rel.shortDescription}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sticky Sidebar (Right 1 column) */}
            <div className="space-y-6 lg:sticky lg:top-24">
              
              {/* Quick Booking Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-red-100">
                <div className="text-center pb-4 border-b border-gray-100 mb-5">
                  <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full uppercase tracking-wider inline-block mb-2">
                    Priority Booking
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">
                    Book {service.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Book an inspection slot or request a confirmed quote
                  </p>
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="book-name" className="text-xs font-semibold text-gray-700">
                      Your Name *
                    </Label>
                    <Input
                      id="book-name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. Muhammad Ali"
                      className="mt-1 text-sm"
                    />
                  </div>

                  <div>
                    <Label htmlFor="book-phone" className="text-xs font-semibold text-gray-700">
                      Phone Number (WhatsApp) *
                    </Label>
                    <Input
                      id="book-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+92 300 1234567"
                      className="mt-1 text-sm"
                    />
                  </div>

                  <div>
                    <Label htmlFor="book-carModel" className="text-xs font-semibold text-gray-700">
                      Car Make & Model
                    </Label>
                    <Input
                      id="book-carModel"
                      name="carModel"
                      value={formData.carModel}
                      onChange={handleInputChange}
                      placeholder="e.g. Toyota Corolla 2021"
                      className="mt-1 text-sm"
                    />
                  </div>

                  <div>
                    <Label htmlFor="book-preferredDate" className="text-xs font-semibold text-gray-700">
                      Preferred Date
                    </Label>
                    <Input
                      id="book-preferredDate"
                      name="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="mt-1 text-sm"
                    />
                  </div>

                  <div>
                    <Label htmlFor="book-notes" className="text-xs font-semibold text-gray-700">
                      Additional Notes / Issue Description
                    </Label>
                    <Textarea
                      id="book-notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={2}
                      placeholder="Briefly describe what you are experiencing..."
                      className="mt-1 text-sm"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded-lg shadow transition-all mt-2"
                  >
                    {isSubmitting ? 'Submitting Request...' : 'Confirm Service Appointment'}
                  </Button>
                </form>

                <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                  <span className="text-[11px] text-gray-400">
                    No payment needed today &bull; Free initial physical inspection
                  </span>
                </div>
              </div>

              {/* Direct Workshop Contact Card */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-md">
                <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                  <Phone size={18} className="text-red-400" />
                  <span>Call or WhatsApp Us</span>
                </h4>
                <p className="text-xs text-gray-300 mb-4">
                  Speak directly with Director {companyInfo.director} or our master technician.
                </p>

                <div className="space-y-2.5">
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-bold transition-colors"
                  >
                    <Phone size={16} />
                    <span>Call {companyInfo.phone}</span>
                  </a>

                  <a
                    href={`https://wa.me/923086271825?text=Hello%20Z.A%20Auto%20Workshop,%20I%20want%20to%20inquire%20about%20${encodeURIComponent(service.name)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-bold transition-colors"
                  >
                    <MessageSquare size={16} />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>

                <div className="mt-5 pt-4 border-t border-gray-800 text-xs space-y-2 text-gray-400">
                  <div className="flex items-start gap-2">
                    <MapPin size={14} className="text-red-400 mt-0.5 flex-shrink-0" />
                    <span>{companyInfo.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-red-400 flex-shrink-0" />
                    <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Workshop Guarantee Badge */}
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck size={24} className="text-blue-700 flex-shrink-0" />
                  <h4 className="font-bold text-blue-900 text-sm">
                    Z.A Auto Workshop Guarantee
                  </h4>
                </div>
                <p className="text-xs text-blue-800 leading-relaxed">
                  We stand 100% behind our workmanship and diagnostics. All parts installed come with warranty protection and thorough road testing before vehicle handover.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
