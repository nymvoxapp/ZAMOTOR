import { Phone, Mail, MapPin } from 'lucide-react';
import { companyInfo, brands } from '../mock';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-red-500 mb-4">{companyInfo.name}</h3>
            <p className="text-gray-400 mb-4">{companyInfo.tagline}</p>
            <p className="text-sm text-gray-400">Serving quality automotive services since {companyInfo.established}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-red-500 mt-1" />
                <a href={`tel:${companyInfo.phone}`} className="text-gray-400 hover:text-white transition-colors">
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-red-500 mt-1" />
                <a href={`mailto:${companyInfo.email}`} className="text-gray-400 hover:text-white transition-colors">
                  {companyInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-red-500 mt-1" />
                <span className="text-gray-400">{companyInfo.address}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Brands We Service</h4>
            <div className="flex flex-wrap gap-2">
              {brands.map((brand, index) => (
                <span key={index} className="bg-gray-800 text-gray-300 px-3 py-1 rounded text-sm">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
