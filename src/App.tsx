import React, { useState, useEffect } from 'react';
import { Shield, Code, Zap, Menu, X, MessageCircle, Phone, Mail, MapPin, ChevronRight, Star, Users, Award, Clock } from 'lucide-react';
import Chatbot from './components/Chatbot';
import ServiceModal from './components/ServiceModal';
import ContactForm from './components/ContactForm';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const services = [
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Services',
      icon: Shield,
      description: 'Comprehensive security solutions to protect your digital assets',
      features: ['Penetration Testing', 'Security Audits', 'Incident Response', 'Compliance Management'],
      pricing: 'Starting from $2,999/month',
      details: 'Our cybersecurity experts provide end-to-end protection for your business infrastructure. We conduct thorough assessments, implement robust security measures, and provide 24/7 monitoring to ensure your data remains secure.'
    },
    {
      id: 'app-development',
      title: 'Application Development',
      icon: Code,
      description: 'Custom software solutions tailored to your business needs',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'Cloud Integration'],
      pricing: 'Starting from $15,000/project',
      details: 'We build scalable, modern applications using cutting-edge technologies. From concept to deployment, our development team ensures your software meets the highest standards of quality and performance.'
    },
    {
      id: 'subscription',
      title: 'Subscription Services',
      icon: Zap,
      description: 'Ongoing tech support and maintenance packages',
      features: ['24/7 Support', 'Regular Updates', 'Performance Monitoring', 'Backup Solutions'],
      pricing: 'Starting from $499/month',
      details: 'Our subscription model provides continuous support for your technology infrastructure. Get peace of mind with regular maintenance, updates, and dedicated support from our expert team.'
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '50+', label: 'Projects Completed' },
    { icon: Clock, value: '24/7', label: 'Support Available' },
    { icon: Star, value: '4.9', label: 'Client Rating' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md z-40 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                  niiishitech
                </h1>
              </div>
            </div>
            
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['home', 'services', 'about', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`px-3 py-2 text-sm font-medium transition-colors capitalize ${
                      activeSection === section
                        ? 'text-cyan-400 border-b-2 border-cyan-400'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700 rounded-md'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </nav>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
              {['home', 'services', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md w-full text-left capitalize"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-blue-900/20 to-green-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block">Innovative</span>
              <span className="block bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                Tech Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Empowering businesses with cutting-edge cybersecurity, application development, and subscription-based technology services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('services')}
                className="bg-gradient-to-r from-cyan-500 to-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105"
              >
                Explore Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to drive your business forward
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-700 hover:border-cyan-400"
                onClick={() => setActiveService(service)}
              >
                <div className="flex items-center mb-6">
                  <service.icon className="h-12 w-12 text-cyan-400 mr-4" />
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-400">
                      <ChevronRight className="h-4 w-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-cyan-400 font-semibold">{service.pricing}</span>
                  <button className="bg-gradient-to-r from-cyan-500 to-green-500 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-green-600 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">About Niiishitech</h2>
              <p className="text-gray-300 mb-6 text-lg">
                At Niiishitech, we're passionate about delivering innovative technology solutions that transform businesses. Our team of experienced professionals combines deep technical expertise with a commitment to excellence.
              </p>
              <p className="text-gray-300 mb-8 text-lg">
                Founded with the vision of making advanced technology accessible to businesses of all sizes, we specialize in cybersecurity, application development, and ongoing tech support services.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Shield className="h-6 w-6 text-cyan-400 mr-3" />
                  <span>Industry-leading security practices</span>
                </div>
                <div className="flex items-center">
                  <Code className="h-6 w-6 text-green-400 mr-3" />
                  <span>Cutting-edge development methodologies</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-purple-400 mr-3" />
                  <span>Dedicated customer support team</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/20 to-green-500/20 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-yellow-400 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Proven Excellence</h4>
                    <p className="text-gray-300">Recognized industry expertise with award-winning solutions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-blue-400 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">24/7 Support</h4>
                    <p className="text-gray-300">Round-the-clock assistance whenever you need it</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Star className="h-6 w-6 text-pink-400 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Client Satisfaction</h4>
                    <p className="text-gray-300">4.9/5 client rating with 500+ successful projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-400">
              Ready to transform your business? Let's discuss your project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-cyan-400 mr-4" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-green-400 mr-4" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-300">hello@niiishitech.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-purple-400 mr-4" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-300">123 Tech Avenue, Silicon Valley, CA 94025</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="text-xl font-bold mb-4">Business Hours</h4>
                <div className="space-y-2 text-gray-300">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                  <p>Saturday: 10:00 AM - 4:00 PM PST</p>
                  <p>Sunday: Emergency Support Only</p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent mb-4">
                niiishitech
              </h3>
              <p className="text-gray-400 mb-4">
                Empowering businesses with innovative technology solutions. Your success is our mission.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Cybersecurity</li>
                <li>App Development</li>
                <li>Subscription Services</li>
                <li>Consulting</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Niiishitech. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Service Modal */}
      {activeService && (
        <ServiceModal
          service={activeService}
          onClose={() => setActiveService(null)}
        />
      )}

      {/* Chatbot */}
      <Chatbot
        isOpen={isChatbotOpen}
        onToggle={() => setIsChatbotOpen(!isChatbotOpen)}
      />

      {/* Floating Chat Button */}
      {!isChatbotOpen && (
        <button
          onClick={() => setIsChatbotOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-cyan-500 to-green-500 text-white p-4 rounded-full shadow-lg hover:from-cyan-600 hover:to-green-600 transition-all duration-300 transform hover:scale-110 z-30"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
}

export default App;