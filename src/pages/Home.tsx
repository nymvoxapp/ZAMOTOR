import { Link } from 'react-router-dom';
import { Wrench, Zap, Paintbrush, Award, DollarSign, GraduationCap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { services, brands, whyChooseUs } from '../mock';

const Home = () => {
  const iconMap = {
    wrench: Wrench,
    zap: Zap,
    paint: Paintbrush
  };

  const whyChooseIcons = [Award, DollarSign, GraduationCap];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mechanical Repairs, Auto Electrical & Denting Painting Specialists
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Comprehensive vehicle care combining advanced mechanical repairs, specialized auto electrical diagnostics, and expert denting & painting. One workshop. Complete vehicle solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white" data-testid="hero-services-btn">
                  Our Services
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100 border-0" data-testid="hero-contact-btn">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From engine overhauls and wiring diagnostics to precision dent removal and baking oven spray painting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <Card key={service.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow flex flex-col" data-testid={`service-card-${service.id}`}>
                  <CardContent className="p-8 flex flex-col flex-1">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent size={32} className="text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6 flex-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                          <span className="text-red-600 font-bold mt-0.5">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link 
                      to={`/services/${service.slug}`} 
                      className="text-red-600 font-bold hover:text-red-700 transition-colors mt-auto inline-flex items-center gap-1.5 text-sm"
                    >
                      <span>Explore Service Details</span>
                      <span>→</span>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all text-sm"
            >
              <span>View All 11 Services & Full Workshop Guide</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyChooseUs.map((item, index) => {
              const IconComponent = whyChooseIcons[index];
              return (
                <div key={index} className="text-center" data-testid={`home-why-choose-${index}`}>
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-red-600" size={28} />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Brands We Service</h2>
            <p className="text-gray-600">We work on all major automotive brands</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {brands.map((brand, index) => (
              <div key={index} className="bg-white px-8 py-4 rounded-lg shadow-md">
                <span className="text-lg font-bold text-gray-700">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Service Your Vehicle?</h2>
          <p className="text-xl mb-8 text-red-100">Get an upfront quote with no hidden surprises</p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100" data-testid="cta-contact-btn">
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
