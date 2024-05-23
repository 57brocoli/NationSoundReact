import React, { useState } from 'react'
import Modal from '../Modal';

function RequesteForm() {

    //Initialisation du tableau des données du formulaire
    const [formData, setFormData] = useState({
        lastname: '',
        firstname: '',
        email: '',
        motif: '',
        content: ''
    });
    // Initialisation d'une nouvelle date
    const date = new Date();

    // Affectation des données du formulaire au tableau
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    //Initialisation des données pour la modal
    const [modal, setModal] = useState({
        show : false,
        title : '',
        content : ''
    })

    //Fonction pour fermer la modal
    const handleCloseModal = () => {
        setModal({
          ...modal,
          show: false
        });
    };

    //Fonction exécuter au moment ou l'utilisateur envoie le formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // condition de test email/regex 
        if (reg.test(formData.email)) {
            // exécute la fonction send
            send();
        } else {
            setModal({
                show: true,
                title: 'Erreur',
                body: 'Votre email est incorect.'
              });
        }
    };

    //Fonction qui procéde à la connextion au serveur et envoie la requête
    const send = async () => {
        try {
            await fetch('https://pixelevent.site/api/requests', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstname: formData.firstname,
                    lastname: formData.lastname,
                    email: formData.email,
                    motif: formData.motif,
                    content: formData.content,
                    statut: false,
                    ouvert: false,
                    createdAt: date.toISOString(),
                }),
            });
            //Affectation des valeurs pour la modal
            setModal({
                show: true,
                title: 'Message envoyer avec succes',
                body: 'Votre message a été envoyé. Il sera traité dans les plus brefs délais. Vous recevrez une réponse à l’adresse e-mail communiquée.'
              });
            // Réinitialisation des valeurs du formulaire
            setFormData({
                lastname: '',
                firstname: '',
                email: '',
                motif: '',
                content: ''
            });
        // Si une erreur est arriver
        } catch (error) {
            setModal({
                show: true,
                title: 'Erreur',
                body: 'Une erreur est survenue, veuillez essayer plus tard.'
              });
        }
    };

    return (
        <div className="containerRequestForm">
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group mt-2">
                    <label htmlFor="lastname">Nom :</label>
                    <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} required />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="firstname">Prénom :</label>
                    <input type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} required />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="email">Adresse e-mail :</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="motif">Sujet :</label>
                    <input type="text" id="motif" name="motif" value={formData.motif} onChange={handleChange} required />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="content">Message :</label>
                    <textarea id="content" name="content" rows="5" value={formData.content} onChange={handleChange} required></textarea>
                </div>
                <input type="submit" value="Envoyer" className="btn btn-primary my-3" />
            </form>
            {/* modal */}
            <Modal show={modal.show} handleClose={handleCloseModal} title={modal.title} body={modal.body}/>
        </div>
    );
}

export default RequesteForm