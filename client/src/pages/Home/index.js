import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";
import Services from "./Services";
import Accounts from "./Accounts";
import { useAuth } from "../../providers/AuthProvider";
const config = require('../../data/config.json');

export const Home = () => {
    const [accounts, setAccounts] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect( () => { 
        document.title = 'Accueil';
        if (!user) navigate('/login', { replace: true });
    }, [])
    
    return (
        <div>
            <NavigationBar />
            { dataLoaded ? (
                <>
                    <Accounts accounts={accounts} />
                    <Services />
                </>
            ) : (
                <div className='text-center my-5'>
                    <div className="spinner-border text-success" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )}
        </div>
    )
}