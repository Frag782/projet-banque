import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const Home = () => {
    useEffect( () => { document.title = 'Accueil'; }, []);
    const { username } = useParams();
    const { state } = useLocation();    // contient accounts - voir Login
    const { accounts } = state;
    
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