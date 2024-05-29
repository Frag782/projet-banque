import { useEffect } from "react";
import RegisterForm from "./RegisterForm";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";

export const Register = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect( () => {
        document.title = 'Inscription';
        if (user) navigate('/home', { replace: true });
    }, [user, navigate]);

    return (
        <div>
            <h1 className='display-4 text-bg-light p-3 mb-5'>Inscription</h1>
            <RegisterForm/>
        </div>
    )
}