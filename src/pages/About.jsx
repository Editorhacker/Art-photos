import React from 'react';
import { mockPortfolioData } from '../mock/data';

const About = () => {
  const { about } = mockPortfolioData;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-extralight mb-6">About Me</h1>
            <p className="text-xl lg:text-2xl font-light text-gray-300 max-w-3xl mx-auto">
              The story behind the lens
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extralight mb-6">Meet {about.name}</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {about.bio}
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-light mb-4">My Approach</h3>
                  <p className="text-gray-600 leading-relaxed">
                    I believe that every photograph should tell a story. Whether it's the joy of a wedding day, 
                    the professionalism of a corporate headshot, or the intimacy of a family portrait, 
                    I strive to capture authentic moments that you'll treasure forever.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-light mb-4">Equipment & Technique</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Using professional-grade Fujifilm cameras and lenses, I combine technical expertise 
                    with creative vision to deliver exceptional results. My minimalist approach ensures 
                    that the focus remains on you and your story.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="relative">
                <img 
                  src={about.image} 
                  alt={about.name}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-light mb-2">8+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-light mb-2">500+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-light mb-2">200+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extralight mb-6">My Philosophy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Photography is more than just capturing images—it's about preserving emotions, 
              telling stories, and creating lasting memories.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-light mb-4">Attention to Detail</h3>
              <p className="text-gray-600">
                Every shot is carefully composed, considering lighting, composition, and emotion to create perfect moments.
              </p>
            </div>
            
            <div className="text-center p-8">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-xl font-light mb-4">Authentic Emotion</h3>
              <p className="text-gray-600">
                I capture genuine moments and real emotions, creating images that truly reflect who you are.
              </p>
            </div>
            
            <div className="text-center p-8">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-light mb-4">Timeless Quality</h3>
              <p className="text-gray-600">
                My minimalist approach ensures your photos will look as beautiful years from now as they do today.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;