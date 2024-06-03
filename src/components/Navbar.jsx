import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faHouse, faMap, faEnvelope, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import "../style.css";
import "./Contact"
import "./PageAccueil"
import "./PageProjet"
import "./PageBTS"
import "./PageProjet"

function Navbar() {
  const [backgroundOpacity, setBackgroundOpacity] = useState(0.7);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const navbarHeight = 100;
      let newOpacity = 0.7 - scrollPosition / (navbarHeight * 14);
      newOpacity = Math.max(newOpacity, 0.4); // Limiter l'opacité à un minimum de 0.4
      setBackgroundOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDownloadCV = () => {
    // Spécifiez l'URL de votre fichier PDF ici
    const pdfUrl = process.env.PUBLIC_URL + '/CV - MartinKhyari.pdf';
  
    // Ouvre un nouvel onglet pour afficher le PDF
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="Navbar-content" style={{ backgroundColor: `rgba(0, 0, 0, ${backgroundOpacity})` }}>
      <div className="Navbar-NP">
        
          <a href="./">MartinKhyari.</a>
        
      </div>
      <div className="Navbar-links">
        <a href="./"><FontAwesomeIcon icon={faHouse} />  Accueil</a>
        <a href="./PageBTS"><FontAwesomeIcon icon={faGraduationCap} />  BTS</a>
        <a href="./PageProjet"><FontAwesomeIcon icon={faMap} />  Projets</a>
        <a href="./Contact"><FontAwesomeIcon icon={faEnvelope} />  Contact</a>
        <button className="CV-style" onClick={handleDownloadCV}>
          <FontAwesomeIcon icon={faFile} /> CV 
        </button>
      </div>
    </div>
  );
}

export default Navbar;
