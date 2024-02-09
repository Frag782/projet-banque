const { useState, useRef } = require("react");
const { useNavigate } = require("react-router-dom");
const bcrypt = require('bcryptjs');
const config = require('../../data/config.json');

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmation, setConfirmation] = useState('');
    const navigate = useNavigate();

    const register = async (e) => {
        e.preventDefault();
        const registerForm = e.target;

        if (password !== confirmation) {
            alert('Le mot de passe et la confirmation ne sont pas identiques');
            registerForm.reset();
            return;
        }

        const passwordHash = await bcrypt.hash(password, 10);

        fetch(`${config.apiURL}/register`, {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                username : username,
                passwordHash : passwordHash
            })
        })
            .then(res => res.json())
            .then(data => {
                alert(data.message);
                if (data.success) {
                    navigate('/login');
                }
            });
    }

    return (
        <form class='col-4 offset-4 col-lg-2 offset-lg-5 text-center' onSubmit={register}>
            <div class='form-group mb-2'>
                <input class='form-control' type='text' placeholder="Nom d'utilisateur" onChange={ e => setUsername(e.target.value) } required></input>
            </div>
            <div class='form-group mb-2'>
                <input class='form-control' type='password' placeholder='Mot de passe' onChange={ e => setPassword(e.target.value) } required></input>
            </div>
            <div class='form-group mb-3'>
                <input class='form-control' type='password' placeholder='Confirmer mot de passe' onChange={ e => setConfirmation(e.target.value) } required></input>
            </div>
            <div class='form-group mb-1'>
                <button type='submit' class='btn btn-primary form-control'>S'inscrire</button>
            </div>
            <div class='form-group mb-3'>
                <a class='link-secondary' href='/login'>J'ai déjà un compte</a>
            </div>
        </form>
    )
}

export default RegisterForm;