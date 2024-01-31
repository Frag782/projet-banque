import { useRef, useState } from 'react'

const bcrypt = require('bcryptjs')

const Login = () => {
    const [passwords, setPasswords] = useState(['test', 'didou782'])
    const passwordInput = useRef()

    const validate = () => {
        const validHashes = []
        passwords.forEach(element => {
            validHashes.push(bcrypt.hashSync(element))
        });
        
        validHashes.forEach(element => {
            if (bcrypt.compareSync(passwordInput.current.value, element))
                alert('Connected !')
        })
    }

    return (
        <div>
            <h1 class='display-4 text-bg-light p-3 mb-5'>Projet banque</h1>
            <form class='col-4 offset-4 col-lg-2 offset-lg-5'>
                <div class='form-group mb-2'>
                    <input class='form-control' type='text' placeholder="Nom d'utilisateur"></input>
                </div>
                <div class='form-group mb-3'>
                    <input class='form-control' type='password' ref={passwordInput} placeholder='Mot de passe'></input>
                </div>
                <div class='form-group mb-1'>
                    <button type='submit' class='btn btn-primary' onClick={validate}>Connexion</button>
                </div>
                <div class='form-group mb-3'>
                    <a class='link-secondary' href='#'>S'inscrire</a>
                </div>
            </form>
        </div>
    )
}

export default Login;