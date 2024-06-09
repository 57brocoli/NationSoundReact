import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import Modal from '../SubComponent/Modal';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../redux/actions/UserAction';
import { useModal } from '../../Assets/Variables/Variable';
// import { setUser } from '../../../redux/reducers/UserReducers';

function LoginForm({redirection, handleClose, psedoAuth}) {
    //Importation de dispatch
    const dispatch = useDispatch();

    //Propriété pour naviger
    const navigate = useNavigate();

    //Fonction pour les modals
    const {modal, handleCloseModal, conectFailed, fromInsciptionPage} = useModal()

    //recupere les state provenant de register
    const location = useLocation();
    const { fromInsciption, psedo } = location.state || {};

    //lorsque l'utilisateur vient de la page inscription
    const [execModal, setExecModal] = useState(true)
    useEffect(() => {
        if (fromInsciption && execModal) {
            fromInsciptionPage()
            setExecModal(false)
        }
    }, [fromInsciption,fromInsciptionPage, execModal]);

    // Dans le cas ou l'utilisateur est sur la page actualité : Si psedoAuth change, mettre à jour username
    useEffect(() => {
        if (psedoAuth) {
            setUsername(psedoAuth);
        }
    }, [psedoAuth]);

    //Variable du formulaire
    const [username, setUsername] = useState(psedo || '')
    const [password, setPassword] = useState('')

    //Fonction de connection
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/webuser/login_check', { username, password }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const token = response.data.token;
            // localStorage.setItem('token', token);
            const user = jwtDecode(token);
            dispatch(setUser(user));
            //Si l'utilisateur vient de la page Inscrition : redirige vers la page accueil
            if (redirection) {
                navigate('/');
            //Si l'utilisateur est sur la page actualité : ferme la modal d'inscription
            } else {
                handleClose();
            }
            ;
        } catch (error) {
            conectFailed()
        }
    };

    return (
        <form onSubmit={handleSubmit} className='formRegLog'>
            <label htmlFor="username">Pseudo</label>
            <input type="text" name="username" placeholder="Pseudo" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <label htmlFor="password">Mot de passe</label>
            <input type="password" name="password" placeholder="si non tu peut pas" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Connexion</button>
            <Modal show={modal.show} handleClose={handleCloseModal} title={modal.title} body={modal.body}/>
        </form>
    )
}

export default LoginForm