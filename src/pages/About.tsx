import { Wrench, Zap, Paintbrush, Award, DollarSign, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { companyInfo, aboutContent, brands, whyChooseUs } from '../mock';

const About = () => {
  const whyChooseIcons = [Award, DollarSign, GraduationCap];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-blue-100">Our Comprehensive Automotive Expertise</p>
        </div>
      </section>

      {/* Our Comprehensive Expertise */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Vehicle Care Under One Roof</h2>
            <p className="text-lg text-gray-600 mb-8">
              We provide comprehensive vehicle care by combining advanced mechanical repairs, specialized auto electrical diagnostics, and expert denting and painting. Whether your car is dealing with engine troubles, complex electronic faults, or accident body damage, our certified workshop gets you back on the road safely.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="border-0 shadow-lg bg-blue-50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Wrench className="text-white" size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Mechanical Repairs</h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    All major and minor repairs, suspension, brakes, transmission servicing, and complete engine overhauls.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-red-50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="text-white" size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Auto Electrical</h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Computer ECU scanning, wiring circuits, battery & starter systems, and AC climate controls.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-emerald-50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Paintbrush className="text-white" size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Denting & Painting</h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Paintless dent repair (PDR), baking oven spray painting, collision restoration, and scratch blending.
                  </p>
                </CardContent>
              </Card>
            </div>

            <p className="text-lg text-gray-600 mb-4">{aboutContent.mission}</p>
            <p className="text-lg text-gray-600">{aboutContent.experience}</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyChooseUs.map((item, index) => {
              const IconComponent = whyChooseIcons[index];
              return (
                <Card key={index} className="border-0 shadow-lg" data-testid={`why-choose-${index}`}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="text-blue-600" size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brands We Service */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Brands We Service</h3>
              <p className="text-gray-600 text-center mb-6">We work on all major automotive brands with equal expertise and care</p>
              <div className="flex flex-wrap justify-center gap-3">
                {brands.map((brand, index) => (
                  <span key={index} className="bg-white px-4 py-2 rounded-lg shadow-sm font-semibold text-gray-700">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Company Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-sm text-gray-500 mb-2">Established</div>
                <div className="text-2xl font-bold text-blue-600">{companyInfo.established}</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-sm text-gray-500 mb-2">Director</div>
                <div className="text-2xl font-bold text-blue-600">{companyInfo.director}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
