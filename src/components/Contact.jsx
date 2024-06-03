import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "../style.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yfd8gp7', 'template_lpv1etk', e.target, 'an4Al5IPRgNn9Hf4kMvAt')
      .then((result) => {
        console.log(result.text);
        alert('Votre message a été envoyé avec succès !');
        setFormData({ name: '', email: '', message: '' }); // Réinitialiser le formulaire après l'envoi
      }, (error) => {
        console.log(error.text);
        alert('Une erreur s\'est produite. Veuillez réessayer plus tard.');
      });
  };

  return (
    <div className="Contact-container">
      <div className='Contact-content'>
        <h1>Contactez-Moi</h1>
        <form className="Contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nom :</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message :</label>
            <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
