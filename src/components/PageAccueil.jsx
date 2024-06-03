import React from 'react';
import "../style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCaretUp} from "@fortawesome/free-solid-svg-icons";


function Accueil() {
  return (
    <div> 
        <div className='Accueil-container'>
          <div className='Accueil-content'>
            <h1 className='accueil-title'>Bienvenue sur mon portfolio !</h1>
            <div className='Accueil-description'>
              <p>Je suis Martin, développeur en deuxième année à l'EPSI.</p>
              <p>Explorez mon Portfolio et découvrez mon travail.</p>
            </div>
          </div>
        </div>
      <div className='About-me-section'>
        <div className='APropos-container'>
          <div className='About-me'>
            <h2 className='about-me-title'>À propos de moi</h2>
            <div className='about-me-description'>
              <p>Passionné par l'informatique, je suis constamment en quête de défis dans le monde du développement.</p>
              <p> Fort d'une solide formation et d'une expérience pratique, je m'épanouis particulièrement dans le développement fullstack, où je peux exploiter mes compétences tant en front-end qu'en back-end pour créer des solutions innovantes et efficaces.</p>
              <p>Actuellement à la recherche d'une alternance en tant que développeur fullstack, je suis déterminé à rejoindre une équipe dynamique où je pourrais mettre à profit ma passion pour la programmation et contribuer au succès de projets ambitieux. Mon objectif est d'acquérir une expérience professionnelle enrichissante tout en continuant à développer mes compétences techniques et relationnelles.</p>
            </div>
          </div>
        </div>
      </div> 
      <div className='separator-background'>
      <hr className="separator" />
      </div>
      <div className='timeline-section'>
        <h1>Mon Parcours</h1>
        <div className='fleche-timeline'><FontAwesomeIcon icon={faCaretUp} /></div>
      <div className="timeline">
      <div className="timeline-item">
          <div className="timeline-item-content">
            <span className="tag">Avril 2024 - Août 2024</span>
            <h3>Ruban Vert</h3>
            <p>Hôte d'accueil chez Ruban Vert à Sucé-sur-Erdre et accompagnement des clients dans la location de bateau sans permis à l'heure</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-item-content">
            <span className="tag">Septembre 2023 - Juin 2024</span>
            <h3>SN2 EPSI - BTS SIO option SLAM</h3>
            <p>Approfondissement des compétences en développement logiciel à l'EPSI, spécialité développement, et acquisition de connaissances pratiques en conception de solutions logicielles et applications métiers dans le cadre du BTS SIO option SLAM.</p>
           
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-item-content">
            <span className="tag">Janvier 2024 - Février 2024  </span>
            <h3>Stage Les Clés des Dunes</h3>
            <p>Développement d'un site Web WordPress, en mettant l'accent sur l'intégration et la personnalisation du plugin Ultimate Member</p>
          </div>
        </div>
       <div className="timeline-item">
          <div className="timeline-item-content">
            <span className="tag">Octobre 2022 - Août 2023</span>
            <h3>McDonald's</h3>
            <p>Accueil et service au client à la préparation des menus et application des normes et procédures en vigueur chez McDonald's.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-item-content">
            <span className="tag">Mai 2023 - Juin 2024</span>
            <h3>Stage La Tête dans la Toile</h3>
            <p>Stage en développement web Wordpress et applications embarquées  PHP, contribuant à Trou Blanc et Théâtre Vasse. Conception de plugins sur mesure. Expérience en gestion de projet et collaboration multidisciplinaire. </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-item-content">
            <span className="tag">Septembre 2022 - Mai 2023</span>
            <h3>SN1 EPSI - BTS SIO option SLAM</h3>
            <p>Approfondissement des compétences en développement logiciel à l'EPSI, spécialité développement, et acquisition de connaissances pratiques en conception de solutions logicielles et applications métiers dans le cadre du BTS SIO option SLAM.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-item-content">
            <span className="tag">2019 - 2022</span>
            <h3>Baccalauréat Général</h3>
            <p>Baccalauréat Général option Mathématiques, Science Économique et Social à La Perverie Sacré-Coeur</p>
          </div>
        </div>
      </div>
      </div>
  <div className="competences-section">
  <h1>Mes Compétences</h1>
  <div className="competences-container">
    <div className="competence">
      <div className='htmlcss-icon'>
      </div>
      <p>HTML/CSS</p>
    </div>
    <div className="competence">
    <div className='JS-icon'>
    </div>
      <p>JavaScript</p>
    </div>
    <div className="competence">
    <div className='symfony-icon'>
    </div>
      <p>Symfony</p>
    </div>
    <div className="competence">
    <div className='php-icon'>
      </div>
      <p>PHP</p>
    </div>
    <div className="competence">
      <div className='csharp-icon'>          
      </div>
      <p>C#</p>
    </div>
    <div className="competence">
    <div className='python-icon'>
  
    </div>
      <p>Python</p>
    </div>
    <div className="competence">
    <div className='Java-icon'>
    </div>
      <p>Java</p>
    </div>
    <div className="competence">
    <div className='React-icon'>
    </div>
      <p>React</p>
    </div>
    <div className="competence">
      <div className='SQL-icon'>
    </div>
      <p>SQL</p>
    </div>
  </div>
</div>
</div>

  );
}

export default Accueil;
