import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
// import axios from '../Axios/axiosConfig';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import Modal from '../SubComponent/Modal';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../redux/reducers/UserReducers';

function LoginForm() {
    //Propriété pour naviger
    const navigate = useNavigate();

    //recupere les state provenant de register
    const location = useLocation();
    const { fromInsciption, psedo } = location.state || {};

    const [username, setInputUsername] = useState(psedo || '')
    const [password, setPassword] = useState('')

    //Initialisation des données pour la modal
    const [modal, setModal] = useState({
        show : false,
        title : '',
        body : ''
    })

    const dispatch = useDispatch();

    //Fonction pour fermer la modal
    const handleCloseModal = () => {
        setModal({
          ...modal,
          show: false
        });
    };
    useEffect(() => {
        if (fromInsciption) {
          setModal({
            show: true,
            title: 'Inscription réussie',
            body: 'Votre inscription est terminer. Veuillez pouvez vous connecter.'
          });
        }
      }, [fromInsciption]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/webuser/login_check', { username, password }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const token = response.data.token;
            localStorage.setItem('token', token);
            const user = jwtDecode(token);
            dispatch(setUser({ user, token }));
            navigate('/');
        } catch (error) {
            console.error('There was an error logging in!', error.response ? error.response.data : error.message);
        }
    };
    return (
        <form onSubmit={handleSubmit} className='formRegLog'>
            <label htmlFor="username">Pseudo</label>
            <input type="text" name="username" placeholder="Pseudo" value={username} onChange={(e) => setInputUsername(e.target.value)} required />
            <label htmlFor="password">Mot de passe</label>
            <input type="password" name="password" placeholder="si non tu peut pas" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Login</button>
            <Modal show={modal.show} handleClose={handleCloseModal} title={modal.title} body={modal.body}/>
        </form>
    )
}

export default LoginForm