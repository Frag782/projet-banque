import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import NavigationBar from "../../components/NavigationBar";
import { useAuth } from "../../providers/AuthProvider";

export const Home = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect( () => { 
        document.title = 'Accueil';
        if (!user) navigate('/login', { replace: true });
    }, [])
    
    return (
        <div>
            <NavigationBar />
            { user && <Dashboard /> }
        </div>
    )
}