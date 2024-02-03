import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import config from '../data/config.json';

const Home = () => {
    useEffect( () => {
        document.title = 'Accueil';
        fetchAccounts();
    }, []);
    const apiURL = config.apiURL;
    const { username } = useParams();
    const [accounts, setAccounts] = useState([]);

    const fetchAccounts = () => {
        // appel à l'API pour récupérer les comptes pour username
        fetch(`${apiURL}/user/accounts`, {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                username : username
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setAccounts(data.accounts);
                }
            })
    }

    return (
        <div>
            <nav class='navbar bg-light navbar-expand-lg'>
                <a class='navbar-brand' href='#'>Accueil</a>
                <ul class='navbar-nav'>
                    <li class='nav-item'>
                        <a class='nav-link' href='#'>Gerér comptes</a>
                    </li>
                    
                    <li class='nav-item'>
                        <a class='nav-link' href='#'>Modifier profil</a>
                    </li>
                    
                    <li class='nav-item'>
                        <a class='nav-link' href='/login'>Se déconnecter</a>
                    </li>
                </ul>
            </nav>

            <h2>Comptes</h2>
            <ul class='col-md-4 offset-md-4 col-8 offset-2'>
                { accounts.map( account => (
                    <li class='card mb-3'>
                        <div class='card-body'>
                            <h5 class='card-title'>Compte #{account.accountNumber}</h5>
                            <p class='card-text'>Solde : {account.balance}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home;