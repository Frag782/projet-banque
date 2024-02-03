import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import config from '../data/config.json';

const Login = () => {
    useEffect( () => {document.title = 'Connexion'}, []);
    const apiURL = config.apiURL;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const loginForm = useRef();
    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();
        
        fetch(`${apiURL}/login`, {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify({
                username : username,
                password : password
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) navigate(`/home/${username}`);
            else {
                alert(data.message);
                loginForm.current.reset();
            }
        })
        .catch ( error => {
            console.error("Erreur lors de l'authentification", error);
        });
    }

    return (
        <div>
            <h1 class='display-4 text-bg-light p-3 mb-5'>Connexion</h1>
            
            <form ref={loginForm} class='col-4 offset-4 col-lg-2 offset-lg-5' onSubmit={login}>
                <div class='form-group mb-2'>
                    <input name='username' class='form-control' type='text' placeholder="Nom d'utilisateur" onChange={e => {setUsername(e.target.value)}} required></input>
                </div>
                <div class='form-group mb-3'>
                    <input name='password' class='form-control' type='password' placeholder='Mot de passe' onChange={e => {setPassword(e.target.value)}} required></input>
                </div>
                <div class='form-group mb-1'>
                    <button type='submit' class='btn btn-primary form-control'>Connexion</button>
                </div>
                <div class='form-group mb-3'>
                    <a class='link-secondary' href='/register'>S'inscrire</a>
                </div>
            </form>
            
        </div>
    )
}

export default Login;
