import React from 'react';
import '../style.css'; 

function VeilleNumerique() {
  return (
    <div className='veille-container'>
      <div className="veille-title">
        <h1>Suivi des innovations de Nvidia dans le domaine de l'intelligence artificielle</h1>
      </div>
      
      <div className="veille-objective">
        <h2>Outils :</h2>
        <p>Restez à jour sur les dernières avancées technologiques de Nvidia en matière d'intelligence artificielle, notamment les nouveaux produits, les recherches et les partenariats.</p>
      </div>
      
      <div className="veille-methodology">
        <h2>Méthodologie :</h2>
        
        <div className="veille-information-sources">
          <h3>Sources d'information :</h3>
          <ul>
            <li>Site web de Nvidia : <a href="https://www.nvidia.com/en-us/">https://www.nvidia.com/en-us/</a></li>
            <li>Blog de Nvidia : <a href="https://blogs.nvidia.com/">https://blogs.nvidia.com/</a></li>
            <li>Communiqués de presse de Nvidia : <a href="https://nvidianews.nvidia.com/news/latest">https://nvidianews.nvidia.com/news/latest</a></li>
            <li>Alertes Google sur les mots-clés pertinents, tels que "Nvidia", "intelligence artificielle", "GPU", "apprentissage automatique", "deep learning", etc.</li>
            <li>Suivi des réseaux sociaux de Nvidia : <a href="https://twitter.com/NVIDIAGeForce">Twitter</a> / <a href="https://www.youtube.com/user/nvidia">YouTube</a> / <a href="https://www.facebook.com/NVIDIA/">Facebook</a> / <a href="https://www.linkedin.com/company/nvidia">LinkedIn</a></li>
            <li>Lecture d'articles de presse et de blogs sur Nvidia et l'intelligence artificielle</li>
            <li>Participation à des conférences et événements sur l'intelligence artificielle</li>
          </ul>
        </div>
        
        <div className="veille-frequency">
          <h3>Fréquence de la veille :</h3>
          <ul>
            <li>Quotidiennement pour les actualités les plus importantes</li>
            <li>Hebdomadairement pour une revue plus approfondie</li>
          </ul>
        </div>
        
        <div className="veille-format">
          <h3>Format de la veille :</h3>
          <ul>
            <li>Synthèse des informations les plus importantes</li>
            <li>Analyse des tendances et des enjeux</li>
            <li>Réflexion sur l'impact potentiel des innovations de Nvidia</li>
          </ul>
        </div>
      </div>
      
      <div className="example-content">
        <h2>Exemple de contenu :</h2>
        <div className='article-veille-container'>
          <h3>Date : 2024-04-25</h3>
          <h4>Sujet : Lancement de la nouvelle carte graphique GeForce RTX 4090</h4>
          <p>Description des principales caractéristiques de la carte</p>
          <p>Analyse des performances et des avantages par rapport aux modèles précédents</p>
          <p>Réflexion sur l'impact potentiel de la RTX 4090 sur le marché du jeu vidéo et de l'intelligence artificielle</p>
        </div>
        
        <div className='article-veille-container'>
          <h3>Date : 2024-04-18</h3>
          <h4>Sujet : Publication d'un article de recherche sur l'apprentissage automatique pour la détection du cancer</h4>
          <p>Résumé des principales conclusions de l'article</p>
          <p>Analyse de l'importance de cette recherche pour la lutte contre le cancer</p>
          <p>Réflexion sur le potentiel de l'intelligence artificielle pour améliorer le diagnostic et le traitement du cancer</p>
        </div>
        
        <div className='article-veille-container'>
          <h3>Date : 2024-04-11</h3>
          <h4>Sujet : Partenariat entre Nvidia et Microsoft pour développer des solutions d'intelligence artificielle pour le cloud</h4>
          <p>Description des termes du partenariat</p>
          <p>Analyse des avantages potentiels du partenariat pour les deux entreprises</p>
          <p>Réflexion sur l'impact potentiel de ce partenariat sur le marché du cloud computing</p>
        </div>
      </div>
      
      <div className="footer-veille">
        <h2>En plus de la veille numérique, il est important de :</h2>
        <ul>
          <li>Comprendre les enjeux technologiques et commerciaux du domaine de l'intelligence artificielle.</li>
          <li>Avoir une bonne connaissance des produits et services de Nvidia.</li>
          <li>Être capable d'analyser et d'interpréter les informations collectées.</li>
          <li>Communiquer efficacement les résultats de la veille à un public cible.</li>
        </ul>
      </div>
    </div>
  );
}

export default VeilleNumerique;
