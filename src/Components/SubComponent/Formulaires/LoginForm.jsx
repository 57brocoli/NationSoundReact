import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import axios from '../Axios/axiosConfig';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

function LoginForm() {
    // const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value
    //     });
    // };

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

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
            console.log(token);
            if (token) {
                const user = jwtDecode(token);
                console.log(user);
            }
            navigate('/');
        } catch (error) {
            console.error('There was an error logging in!', error.response ? error.response.data : error.message);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="email" placeholder="Email" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm