import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../providers/AuthProvider';

import LoginForm from './LoginForm';

export const Login = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect( () => {
        document.title = 'Connexion';
        if (user) navigate('/home', { replace: true });
    }, [user, navigate]);
    
    return (
        <div>
            <h1 className='display-4 text-bg-light p-3 mb-5'>Connexion</h1>
            <LoginForm/>
        </div>
    )
}
