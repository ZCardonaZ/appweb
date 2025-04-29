import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">Acerca del Desarrollador</h1>
        
        <div className="profile-card">
          <div className="profile-header">
            <h2>Santiago Cardona</h2>
            <p className="profile-role">Desarrollador Frontend</p>
          </div>
          
          <div className="profile-details">
            <div className="detail-item">
              <span className="detail-label">Tecnologías:</span>
              <span className="detail-value">React, JavaScript, HTML/CSS</span>
            </div>
            
            <div className="detail-item">
              <span className="detail-label">Proyecto:</span>
              <span className="detail-value">Futurama Character Explorer</span>
            </div>
            
            <div className="detail-item">
              <span className="detail-label">Descripción:</span>
              <p className="detail-description">
                Aplicación para explorar personajes de Futurama con sistema de filtros avanzados, 
                persistencia de estado y diseño responsive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;