import React from 'react';
import "../style.css";

function PageProjet() {
  // Supposons que vous avez une liste de projets
  const projets = [
    { id: 1, nom: "TARDYGRADE", description: "Le but du projet était de développer en binome, un réseau social de partage de raisons de retard entre les utilisateurs, et de le déployer sur les serveurs de l'école. Nous avons aussi développé une application avec WPF et une Web API, qui a pour but de donner les statistiques de l'application pour une période donnée (nombre d'utilisateurs, nombre de posts, etc).    " },
    { id: 2, nom: "Création Jeu Mobile", description: "Nous avons eu un cours qui nous a montré les bases de blender et d'unity. Pour l'évaluation nous devions réaliser un petit jeu mobile, comme un jeu où un personnage court pour récupérer des pièces.Comme je n'avais jamais fait de jeu et que l'exercice me semblait intéressant, j'ai voulu faire un un peu plus compliqué. Mon idée était que l'utilisateur arrivait dans la map où il devrait trouver une arme. Ensuite, on le confronterait à des ennemis de plus en plus puissants." },
    { id: 3, nom: "CRÉATION D'UN KEEPASS", description: "création d'un keepass à l'aide de mes connaissances acquises lors des années lycées via l'intérmediaire de phpmyadmin, qui est un logiciel permettant d'utiliser le language sql." }
  ];

  return (
    <div className="page-projet">
        <div className='description-projet'>
            <h1>Mes Projets</h1>
            <p>Retrouvez ici tous les documents nécessaire pour mon BTS.</p>
        </div>
      <div className="liste-projet">
        {projets.map(projet => (
          <div key={projet.id} className="projet">
            <h2>{projet.nom}</h2>
            <p>{projet.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PageProjet;
