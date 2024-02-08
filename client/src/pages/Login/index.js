import { useEffect } from 'react'

import LoginForm from './LoginForm';

const Login = () => {
    useEffect( () => {document.title = 'Connexion'}, []);
    
    return (
        <div>
            <h1 class='display-4 text-bg-light p-3 mb-5'>Connexion</h1>
            <LoginForm/>
        </div>
    )
}

export default Login;
