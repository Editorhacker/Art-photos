import React from 'react';
import { Link } from 'react-router-dom';
import Camera3D from '../components/Camera3D';
import { mockPortfolioData } from '../mock/data';
import { Button } from '../components/ui/button';

const Home = () => {
  const { hero, gallery } = mockPortfolioData;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-6xl lg:text-8xl font-extralight leading-tight mb-6">
                {hero.title.split(' ').map((word, index) => (
                  <span key={index} className="inline-block">
                    {word}
                    {index < hero.title.split(' ').length - 1 && <br />}
                  </span>
                ))}
              </h1>
              <p className="text-xl lg:text-2xl font-light mb-4 text-gray-300">
                {hero.subtitle}
              </p>
              <p className="text-lg mb-8 text-gray-400 max-w-md">
                {hero.description}
              </p>
              <Link to="/gallery">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-light">
                  {hero.ctaText}
                </Button>
              </Link>
            </div>
            <div className="flex justify-center">
              <Camera3D />
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extralight mb-4">Featured Work</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A glimpse into my recent photography sessions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gallery.slice(0, 6).map((image, index) => (
              <div key={image.id} className="group relative overflow-hidden rounded-lg aspect-square bg-gray-100">
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-xl font-light mb-2">{image.title}</h3>
                    <p className="text-sm opacity-80">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/gallery">
              <Button variant="outline" size="lg" className="px-8 py-3">
                View Full Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extralight mb-4">Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional photography services for every occasion
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockPortfolioData.services.map((service) => (
              <div key={service.id} className="text-center group">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-light mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description.substring(0, 100)}...</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg" className="px-8 py-3">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;