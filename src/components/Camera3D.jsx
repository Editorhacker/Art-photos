import React, { useRef, useEffect } from 'react';
import './Camera3D.css';

const Camera3D = () => {
  const cameraRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const camera = cameraRef.current;
    
    if (!container || !camera) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / centerY * 15;
      const rotateY = (x - centerX) / centerX * 15;
      
      camera.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      camera.style.transform = 'rotateX(0deg) rotateY(0deg)';
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="camera-3d-container" ref={containerRef}>
      <div className="camera-3d" ref={cameraRef}>
        {/* Camera Body */}
        <div className="camera-body">
          <div className="camera-top">
            <div className="viewfinder"></div>
            <div className="brand-name">FUJIFILM</div>
            <div className="mode-dial"></div>
          </div>
          
          <div className="camera-front">
            <div className="lens-mount">
              <div className="lens">
                <div className="lens-front">
                  <div className="lens-glass"></div>
                  <div className="lens-ring"></div>
                  <div className="lens-ring"></div>
                </div>
                <div className="lens-label">XF 35mm f/1.4</div>
              </div>
            </div>
            
            <div className="camera-grip">
              <div className="grip-texture"></div>
            </div>
            
            <div className="camera-logo">X</div>
          </div>
          
          <div className="camera-side">
            <div className="side-controls">
              <div className="control-button"></div>
              <div className="control-button"></div>
            </div>
          </div>
        </div>
        
        {/* Camera Details */}
        <div className="camera-details">
          <div className="hot-shoe"></div>
          <div className="lcd-screen"></div>
          <div className="control-dials">
            <div className="dial"></div>
            <div className="dial"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Camera3D;