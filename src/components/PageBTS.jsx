import React from 'react';
import "../style.css";
import "./Veille"

function PageBTS  () {
    const handleDownloadcontrole = () => {
    const pdfUrl = process.env.PUBLIC_URL + '/2023-KHYARI-Martin-Portefeuille .xlsx';
  
    
    window.open(pdfUrl, '_blank');
  };
  return (
    <div className='BTS-container'>
      <div className="description-container">
        
        <h1>Documents pour mon BTS - SIO</h1>
        <p>Retrouvez ici tous les documents nécessaire pour mon BTS.</p>
      </div>
      
      
      <div className="documents-container">
      <h1>SOMMAIRE :</h1>
  
  {/* Sommaire */}
      <ul>
        <li><a href="#attestation-2024">1 . Attestation de stage 2024</a></li>
        <li><a href="#attestation-2023">2 . Attestation de stage 2023</a></li>
        <li><a href="#rapport-2023">3 . Rapport de stage 2023</a></li>
        <li><a href="#rapport-2024">4 . Rapport de stage 2024</a></li>
        <li><a href="#ControleConformite">5 . Controle de Conformité - E5</a></li>
        <li><a href="#PorteFeuille">6 . Porte Feuille de Compétences - E4</a></li>
        <li><a href="#Veille numérique">7 . Veille numérique</a></li>
      </ul>
  
  {/* Attestations de stage */}
      <div id="attestation-2024" className='documents-assets-container'>
        <h2>Attestation de stage 2024 :</h2>
        <iframe src="/AttestationStage-BTS-24.pdf" title="Attestation de stage 2024" width="100%" height="600px"></iframe>
      </div>
  
      <div id="attestation-2023" className='documents-assets-container'>
        <h2>Attestation de stage 2023 :</h2>
        <iframe src="/AttestationStage-BTS-23.pdf" title="Attestation de stage 2023" width="100%" height="600px"></iframe>
      </div>
      <div id='rapport-2023' className='doucments-assets-container'>
        <h2>Rapport de stage 2023 :</h2>
        <iframe src="/Rapport de stage - Martin Khyari 2023.pdf" title="Rapport de stage 2023" width="100%" height="600px"></iframe>
      </div>
      <div id='rapport-2024' className='documents-assets-container'>
        <h2>Rapport de stage 2024 :</h2>
        <iframe src="/Rapport de stage - Martin Khyari 2024.pdf" title="Rapport de stage 2024" width="100%" height="600px"></iframe>
      </div>
      <div id='ControleConformite' className='documents-assets-container'>
        <h2>Controle de Conformité - C# - E5 :</h2>
        <iframe src="/2024-Khyari-Martin-SLAM-1 .pdf" title="Rapport de stage 2024" width="100%" height="600px"></iframe>
      </div>
      <div className='documents-assets-container'>
        <h2>Controle de Conformité - Symfony - E5 :</h2>
        <iframe src="/2024-Khyari-Martin-SLAM-2.pdf" title="Rapport de stage 2024" width="100%" height="600px"></iframe>
      </div>
      
      <div id='PorteFeuille' className='documents-assets-container'>
        <h2>Portefeuille de Compétences - E4 :</h2>
        <button className="bts-download" onClick={handleDownloadcontrole}>
          Télécharger le Tableau de synthèse  
        </button>
      </div>
      <div id='Veille numérique' className='documents-assets-container'>
        <h2>Veille numérique :</h2>
          <div className='bouton-veille'>
            <a href="./Veille">Veille numérique</a>
          </div>
      </div>
    </div>
    </div>
  );
}

export default PageBTS;
