import React from 'react';
import { X, Check, ArrowRight } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  description: string;
  features: string[];
  pricing: string;
  details: string;
}

interface ServiceModalProps {
  service: Service;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  const handleBookConsultation = () => {
    // In a real app, this would integrate with a booking system
    alert(`Consultation booking for ${service.title} - This would integrate with a calendar system!`);
  };

  const handleRequestQuote = () => {
    // In a real app, this would open a quote request form
    alert(`Quote request for ${service.title} - This would open a detailed form!`);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-cyan-500 to-green-500 p-6 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center">
            <service.icon className="h-8 w-8 text-white mr-3" />
            <h2 className="text-2xl font-bold text-white">{service.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-300 text-lg mb-6">{service.details}</p>

          {/* Pricing */}
          <div className="bg-gradient-to-r from-cyan-500/20 to-green-500/20 rounded-lg p-6 mb-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-2">Pricing</h3>
            <p className="text-2xl font-bold text-cyan-400">{service.pricing}</p>
            <p className="text-gray-400 mt-2">Custom packages available based on your needs</p>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-4">What's Included</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-4">Why Choose This Service</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <ArrowRight className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Industry-certified experts with 10+ years experience</span>
              </div>
              <div className="flex items-start">
                <ArrowRight className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">24/7 support and monitoring included</span>
              </div>
              <div className="flex items-start">
                <ArrowRight className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Scalable solutions that grow with your business</span>
              </div>
              <div className="flex items-start">
                <ArrowRight className="h-5 w-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Free consultation and project assessment</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleBookConsultation}
              className="flex-1 bg-gradient-to-r from-cyan-500 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-green-600 transition-all duration-300"
            >
              Book Free Consultation
            </button>
            <button
              onClick={handleRequestQuote}
              className="flex-1 border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
            >
              Request Quote
            </button>
          </div>

          {/* Contact Info */}
          <div className="mt-6 p-4 bg-gray-900 rounded-lg border border-gray-700">
            <p className="text-gray-300 text-sm">
              Have questions? Call us at <span className="text-cyan-400 font-semibold">+1 (555) 123-4567</span> or email 
              <span className="text-green-400 font-semibold"> hello@niiishitech.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;