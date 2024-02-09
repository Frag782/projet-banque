import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";
import Services from "./Services";
import Accounts from "./Accounts";
const config = require('../../data/config.json');

const Home = () => {
    const [accounts, setAccounts] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect( () => { 
        document.title = 'Accueil';
        
        if (sessionStorage.getItem('authenticatedUser')) {
            fetch(`${config.apiURL}/accounts/${sessionStorage.getItem('authenticatedUser')}`)
                .then(res => res.json())
                .then(data => {
                    if (!data.success) alert(data.message);
                    else {
                        setAccounts(data.accounts);
                        setDataLoaded(true);
                    };
                })
                .catch ( error => {
                    alert("Erreur lors de la récupération des comptes.");
                });
        }

        else {
            (navigate('/login'));
        }
    }, []);
    
    return (
        <div>
            <NavigationBar />
            { dataLoaded ? (
                <>
                    <Accounts accounts={accounts} />
                    <Services />
                </>
            ) : (
                <div class='text-center my-5'>
                    <div class="spinner-border text-success" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Home;