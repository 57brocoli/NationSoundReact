import React from 'react'
import logo from './../../public/logo.jpg'
import Navigation from '../Components/Navigation'
import LoginForm from '../Components/SubComponent/Formulaires/LoginForm'

function Login() {
    return (
        <div className='backgroundColor'>
            <Navigation/>
            <header className='HeaderContainerLogin'>
                {/* <img src={logo} alt="logo" className='logoLogin' /> */}
                <h1 className='text-center titlePage'>Login</h1>
            </header>
            {/* <hr /> */}
            <LoginForm/>
        </div>
    )
}

export default Login