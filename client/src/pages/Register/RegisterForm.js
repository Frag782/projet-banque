import { useAuth } from "../../providers/AuthProvider";

const { useState } = require("react");

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmation, setConfirmation] = useState('');
    const { register } = useAuth();

    const onSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmation) {
            alert('Le mot de passe et la confirmation ne sont pas identiques');
        } else { register(username, password) }

        e.target.reset();
    }

    return (
        <form className='col-4 offset-4 col-lg-2 offset-lg-5 text-center' onSubmit={ onSubmit }>
            <div className='form-group mb-2'>
                <input className='form-control' type='text' placeholder="Nom d'utilisateur" onChange={ e => setUsername(e.target.value) } required></input>
            </div>
            <div className='form-group mb-2'>
                <input className='form-control' type='password' placeholder='Mot de passe' onChange={ e => setPassword(e.target.value) } required></input>
            </div>
            <div className='form-group mb-3'>
                <input className='form-control' type='password' placeholder='Confirmer mot de passe' onChange={ e => setConfirmation(e.target.value) } required></input>
            </div>
            <div className='form-group mb-1'>
                <button type='submit' className='btn btn-primary form-control'>S'inscrire</button>
            </div>
            <div className='form-group mb-3'>
                <a className='link-secondary' href='/login'>J'ai déjà un compte</a>
            </div>
        </form>
    )
}

export default RegisterForm;