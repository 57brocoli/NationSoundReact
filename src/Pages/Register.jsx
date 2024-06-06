import React from 'react'
import RegisterForm from './../Components/Formulaires/RegisterForm'
import Navigation from '../Components/Navigation'

function Register() {
    return (
        <div className='backgroundColor'>
            <Navigation/>
            <header className='HeaderContainerLogin'>
                <h1 className='text-center titlePage'>Inscription</h1>
            </header>
            {/* <hr /> */}
            <RegisterForm/>
        </div>
    )
}

export default Register