import React from 'react';
import { mockPortfolioData } from '../mock/data';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const { services } = mockPortfolioData;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-extralight mb-6">Services</h1>
            <p className="text-xl lg:text-2xl font-light text-gray-300 max-w-3xl mx-auto">
              Professional photography services tailored to your unique needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service) => (
              <div key={service.id} className="group">
                <div className="p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-light mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-light mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-light text-gray-900">{service.price}</span>
                    </div>
                    <Link to="/contact">
                      <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                        Get Quote
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extralight mb-6">My Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A seamless experience from initial consultation to final delivery
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl font-light mb-4 mx-auto">
                1
              </div>
              <h3 className="text-xl font-light mb-2">Consultation</h3>
              <p className="text-gray-600 text-sm">
                We discuss your vision, requirements, and create a customized plan for your session.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl font-light mb-4 mx-auto">
                2
              </div>
              <h3 className="text-xl font-light mb-2">Planning</h3>
              <p className="text-gray-600 text-sm">
                Location scouting, timeline creation, and preparation to ensure everything runs smoothly.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl font-light mb-4 mx-auto">
                3
              </div>
              <h3 className="text-xl font-light mb-2">Shooting</h3>
              <p className="text-gray-600 text-sm">
                Professional photography session with attention to detail and creative direction.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl font-light mb-4 mx-auto">
                4
              </div>
              <h3 className="text-xl font-light mb-2">Delivery</h3>
              <p className="text-gray-600 text-sm">
                Professionally edited images delivered within 2-3 weeks via online gallery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extralight mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create something beautiful together. Contact me to discuss your photography needs.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-3">
              Contact Me
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;