import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const config = require('../../data/config.json');

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();
        
        fetch(`${config.apiURL}/authenticate`, {
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
            if (data.success) {
                sessionStorage.setItem("authenticatedUser", username);
                navigate(`/home`);
            }
            else {
                alert(data.message);
                e.target.reset();
            }
        })
        .catch ( error => {
            alert("Erreur lors de l'authentification.");
        });
    }

    return (
        <form class='col-4 offset-4 col-lg-2 offset-lg-5 text-center' onSubmit={login}>
            <div class='form-group mb-2'>
                <input name='username' class='form-control' type='text' placeholder="Nom d'utilisateur" onChange={e => {setUsername(e.target.value)}} required></input>
            </div>
            <div class='form-group mb-3'>
                <input name='password' class='form-control' type='password' placeholder='Mot de passe' onChange={e => {setPassword(e.target.value)}} required></input>
            </div>
            <div class='form-group mb-1'>
                <button type='submit' class='btn btn-success form-control'>Connexion</button>
            </div>
            <div class='form-group mb-3'>
                <a class='link-secondary' href='/register'>S'inscrire</a>
            </div>
        </form>
    )
}

export default LoginForm;