import React, { useState } from 'react'
import RegisterForm from '../Formulaires/RegisterForm';
import LoginForm from '../Formulaires/LoginForm';

function ConnectModal({show, handleClose}) {

    //Si l'on veut uniquement se connecter
    const [onlyConnect, setOnlyConnect] = useState(false)

    //variable pour récupérer le user name apres inscription
    const [psedo, setPsedo] = useState(null)

    return (
        <div className={`modal ${show ? 'd-block' : 'd-none'} textModal`} tabIndex="-1">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Connexion</h5>
                </div>
                <div className="modal-body d-lg-flex">
                    <section className='col px-3 modalConnect'>
                        <h5 className="modal-title">Connexion</h5>
                        {onlyConnect &&
                            <p>Vous pouvez maintenant vous connecter</p>
                        }
                        <LoginForm handleClose={handleClose} psedoAuth={psedo}/>
                    </section>
                    {!onlyConnect &&
                    <section className='col px-3 modalConnect'>
                        <h5 className="modal-title">Crée un compte</h5>
                        <RegisterForm setOnlyConnect={setOnlyConnect} setPsedo={setPsedo}/>
                    </section>
                    }
                </div>
                <div className="modal-footer">
                    <button
                    className='btn btnClose'
                    type="button"
                    onClick={handleClose}
                    >
                    Fermer
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ConnectModal