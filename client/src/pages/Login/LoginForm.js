import { useState } from 'react';
import { useAuth } from '../../providers/AuthProvider';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();

    const onSubmit = (e) => {
        e.preventDefault();
        login(username, password);
        e.target.reset();
    }

    return (
        <form className='col-4 offset-4 col-lg-2 offset-lg-5 text-center' onSubmit={ onSubmit }>
            <div className='form-group mb-2'>
                <input name='username' className='form-control' type='text' placeholder="Nom d'utilisateur" onChange={ (e) => {setUsername(e.target.value)}} required></input>
            </div>
            <div className='form-group mb-3'>
                <input name='password' className='form-control' type='password' placeholder='Mot de passe' onChange={ (e) => {setPassword(e.target.value)}} required></input>
            </div>
            <div className='form-group mb-1'>
                <button type='submit' className='btn btn-success form-control'>Connexion</button>
            </div>
            <div className='form-group mb-3'>
                <a className='link-secondary' href='/register'>S'inscrire</a>
            </div>
        </form>
    )
}

export default LoginForm;