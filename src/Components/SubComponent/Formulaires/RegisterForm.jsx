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
            navigate('/login');
        } catch (error) {
            console.error('There was an error registering!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='formRegLog'>
            <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="text" name="username" placeholder="Pseudo" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Register</button>
        </form>
    );
}

export default RegisterForm