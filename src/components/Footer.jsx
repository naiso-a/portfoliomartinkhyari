import React from "react";
import "../style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";


function Footer() {
    const date = new Date();
    const annee = date.getFullYear();
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© {annee} Martin Khyari. Tous droits réservés.</p>
                <div className="social-icons">
                    <a href="https://github.com/naiso-a" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/martin-khyari/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://www.instagram.com/martin.khr/  " target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
