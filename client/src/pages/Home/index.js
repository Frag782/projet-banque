import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";
import Services from "./Services";
import Accounts from "./Accounts";

const Home = () => {
    useEffect( () => { document.title = 'Accueil'; }, []);
    const { username } = useParams();
    //const { state } = useLocation();    // contient accounts - voir Login
    //const { accounts } = state;
    /* JUSTE POUR TESTER */
    const [accounts, setAccounts] = useState([{accountNumber: "C1X", balance: 100}, {accountNumber: "X22", balance: 200},
    {accountNumber: "A13", balance: 300}, {accountNumber: "BW4", balance: 400}]);
    
    return (
        <div>
            <NavigationBar/>
            <Accounts accounts={accounts}/>
            <Services/>
        </div>
    )
}

export default Home;