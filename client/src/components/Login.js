import { useRef, useState } from 'react'

const bcrypt = require('bcryptjs')

const Login = () => {
    const loginForm = useRef();

    const postCredentials = () => {
        const form = loginForm.current;
        const serverURL = 'http://localhost:9000/'

        fetch(serverURL, {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify({
                username : form.username.value,
                password : form.password.value
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) alert('Connected')
        });
    }

    return (
        <div>
            <h1 class='display-4 text-bg-light p-3 mb-5'>Projet banque</h1>
            <form ref={loginForm} class='col-4 offset-4 col-lg-2 offset-lg-5'>
                <div class='form-group mb-2'>
                    <input name='username' class='form-control' type='text' placeholder="Nom d'utilisateur"></input>
                </div>
                <div class='form-group mb-3'>
                    <input name='password' class='form-control' type='password' placeholder='Mot de passe'></input>
                </div>
                <div class='form-group mb-1'>
                    <button type='submit' class='btn btn-primary' onClick={postCredentials}>Connexion</button>
                </div>
                <div class='form-group mb-3'>
                    <a class='link-secondary' href='#'>S'inscrire</a>
                </div>
            </form>
        </div>
    )
}

export default Login;
