import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function RegisterForm() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/webuser/register', {email,username, password}, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            //redirige l'utilisateur vers la page de connexion, et envoie des states à LoginForm
            navigate('/login', { state: { fromInsciption : true, psedo : username }});
        //Au cas ou il y'aurais une errreur    
        } catch (error) {
            console.error('There was an error registering!', error);
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
            <button type="submit">Register</button>
        </form>
    );
}

export default RegisterForm