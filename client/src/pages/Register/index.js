import { useEffect } from "react";
import RegisterForm from "./RegisterForm";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

    useEffect( () => {
        document.title = 'Inscription';
        if (sessionStorage.getItem('authenticatedUser')) {
            navigate('/home');
        }
    }, []);

    return (
        <div>
            <h1 class='display-4 text-bg-light p-3 mb-5'>Inscription</h1>
            <RegisterForm/>
        </div>
    )
}

export default Register;