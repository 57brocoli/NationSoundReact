import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Modal from '../SubComponent/Modal';
import { useModal } from '../../Assets/Variables/Variable';

function RegisterForm({redirection, setOnlyConnect, setPsedo}) {
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {modal, handleCloseModal, registerFailed} = useModal()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // await axios.post('http://localhost:8000/webuser/register', {email,username, password}, {
            await axios.post('https://pixelfull.pixelevent.site/webuser/register', {email,username, password}, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            //dans le cas ou l'utilisateur est sur la page Register : redirige l'utilisateur vers la page de connexion, et envoie des states à LoginForm
            redirection &&
            navigate('/login', { state: { fromInsciption : true, psedo : username }});
            //dans le cas ou l'utilisateur crée son compte depuis la page Actualité : ferme le formulaire et envoie le psede
            if (setOnlyConnect && setPsedo ) {
                setOnlyConnect(true)
                setPsedo(username)
            }
        //Au cas ou il y'aurais une errreur    
        } catch (error) {
            registerFailed()
            // console.error('There was an error registering!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='formRegLog'>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="prenom@email.fr" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <label htmlFor="username">Pseudo <span>Attention:</span> votre pseudo sera votre identifiant pour vous connecter à l'avenir</label>
            <input type="text" name="username" placeholder="turlututu" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <label htmlFor="password">Mot de passe</label>
            <input type="password" name="password" placeholder="mot_de_passe_de_la_mort" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit" className='mt-3'>Envoyer</button>
            <Modal show={modal.show} handleClose={handleCloseModal} title={modal.title} body={modal.body}/>
        </form>
    );
}

export default RegisterForm