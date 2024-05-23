import React, { useState } from 'react'
import Modal from '../Modal';
import axios from 'axios';

function CommentForm({id, setArticle}) {

    //Initialisation du tableau des données du formulaire
    const [formData, setFormData] = useState({
        lastname: '',
        firstname: '',
        content: '',
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
        send();
    };

    //Fonction qui procéde à la connextion au serveur et envoie la requête
    const send = async () => {
        try {
            await fetch('https://pixelevent.site/api/comments', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                content: formData.content,
                authorMobile: `${formData.lastname} ${formData.firstname}`,
                relatedArticle: '/api/articles/' + id,
                created_at: date,
            }),
        });
        // Met a jours l'article pour récupérer tous les commentaires.
        axios.get(`https://pixelevent.site/api/articles/${id}`).then(res=>setArticle(res.data));
        //Affectation des valeurs pour la modal
        setModal({
            show: true,
            title: 'Message envoyer avec succes',
            body: 'Commentaire ajouter.'
            });
        // Réinitialisation des valeurs du formulaire
        setFormData({
            lastname: '',
            firstname: '',
            content: '',
        });       
        // Si une erreur est arriver
        } 
        catch (error) {
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
                    <label htmlFor="content">Commentaire :</label>
                    <textarea id="content" name="content" rows="5" value={formData.content} onChange={handleChange} required></textarea>
                </div>
                <input type="submit" value="Envoyer" className="btn btn-primary my-3" />
            </form>
            <Modal show={modal.show} title={modal.title} body={modal.body} handleClose={handleCloseModal}/>
        </div>
    );
}

export default CommentForm