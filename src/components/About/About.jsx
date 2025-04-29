import React from 'react';
import './About.css'; // Importa el CSS

function About() {
  return (
    <div className="about-container">
      <h1>Acerca de mí</h1>
      <div className="about-content">
        <img src="/placeholder-profile.png" alt="Foto del estudiante" className="profile-image" />
        <div className="about-text">
          <h2>Información del Estudiante</h2>
          <p>
            Hola, soy [Tu Nombre], estudiante de [Tu Carrera] en [Tu Universidad].
            Me apasiona el desarrollo web y la creación de aplicaciones innovadoras.
            Este proyecto de Futurama es una muestra de mis habilidades y mi interés
            en aplicar lo aprendido en un contexto práctico.
          </p>
          <p>
            Algunas de las tecnologías que he utilizado en este proyecto incluyen:
          </p>
          <ul>
            <li>React</li>
            <li>React Router DOM</li>
            <li>Vite</li>
            <li>CSS</li>
            {/* Agrega más tecnologías si es necesario */}
          </ul>
          <p>
            ¡Gracias por visitar mi proyecto!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;