import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => onComplete(), 500);
          }, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="camera-loader">
          <div className="camera-body">
            <div className="camera-lens">
              <div className="lens-inner">
                <div className="aperture">
                  <div className="aperture-blade"></div>
                  <div className="aperture-blade"></div>
                  <div className="aperture-blade"></div>
                  <div className="aperture-blade"></div>
                  <div className="aperture-blade"></div>
                  <div className="aperture-blade"></div>
                </div>
              </div>
            </div>
            <div className="camera-flash"></div>
          </div>
        </div>
        
        <div className="loading-text">
          <h2>Loading Portfolio</h2>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <p>{progress}%</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;