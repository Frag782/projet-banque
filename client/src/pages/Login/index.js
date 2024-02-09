import { useEffect } from 'react'

import LoginForm from './LoginForm';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    useEffect( () => {
        document.title = 'Connexion';
        if (sessionStorage.getItem('authenticatedUser')) {
            navigate('/home');
        }
    }, []);
    
    return (
        <div>
            <h1 class='display-4 text-bg-light p-3 mb-5'>Connexion</h1>
            <LoginForm/>
        </div>
    )
}

export default Login;
