import { NavLink } from 'react-router-dom';
import logo from '/logo.jpg'
import userIcon from './../../public/images/user/userIcon.png'
import { useDispatch, useSelector } from 'react-redux';
import { logout_user } from '../../redux/actions/UserAction';
// import { clearUser } from '../../redux/reducers/UserReducers';

const Navigation = () => {
    const user = useSelector(state => state.user.user); // Accéder à l'état de l'utilisateur
    const dispatch = useDispatch()

    //Fonction pour se déconnecter
    const deconexion = () => {
        // dispatch(clearUser()); // Appelle l'action logout pour effacer les informations utilisateur et le token
        dispatch(logout_user())
      };

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to='/'>
                        <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-text-top me-3"></img>
                        Nation Sound
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/actualite'>Actualité</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Programme
                            </a>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to='/programme'>Programme</NavLink></li>
                                <li><NavLink className="dropdown-item" to='/artiste'>Artiste</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/billetterie'>Billetterie</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/sponsor'>Sponsors</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/about'>A-propos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/map'>map</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav ">
                        <li className="btn-group dropstart ">
                            <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                            <img src={userIcon} alt="Logo" width="30" height="30" className="d-inline-block align-text-center ms-2"></img>
                            </button>
                            {user == null ?
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to="/register">Inscription</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/login">Connexion</NavLink></li>
                            </ul>
                            :
                            <ul className="dropdown-menu">
                                <li><button className="dropdown-item" onClick={deconexion}>Déconnexion</button></li>
                            </ul>
                            }
                            
                        </li>
                        {user != null &&
                            <li className="nav-item d-flex align-items-center">
                                    <p className='mb-0 mx-3'>{user.username}</p>
                            </li>
                        }
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;