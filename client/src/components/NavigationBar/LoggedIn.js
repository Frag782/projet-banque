import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider"

export const LoggedIn = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const onLogout = () => {
        logout();
        navigate('/login');
    }

    return (
        <div className='container'>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <button className='nav-link' onClick={ onLogout }>Se déconnecter</button>
                </li>
            </ul>
        </div>
    )
}