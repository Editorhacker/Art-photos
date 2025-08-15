import React, { useState } from 'react';
import { mockPortfolioData } from '../mock/data';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { gallery } = mockPortfolioData;

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-extralight mb-6">Gallery</h1>
            <p className="text-xl lg:text-2xl font-light text-gray-300 max-w-3xl mx-auto">
              A collection of moments captured through my lens, each telling a unique story
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gallery.map((image) => (
              <div 
                key={image.id} 
                className="group relative overflow-hidden rounded-lg aspect-square bg-gray-100 cursor-pointer"
                onClick={() => openModal(image)}
              >
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-xl font-light mb-2">{image.title}</h3>
                    <p className="text-sm opacity-80">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img 
              src={selectedImage.url} 
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain"
            />
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
            >
              ×
            </button>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-light mb-1">{selectedImage.title}</h3>
              <p className="text-sm opacity-80">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;