import { useEffect } from "react";
import RegisterForm from "./RegisterForm";

const Register = () => {
    useEffect( () => {document.title = 'Inscription'}, []);

    return (
        <div>
            <h1 class='display-4 text-bg-light p-3 mb-5'>Inscription</h1>
            <RegisterForm/>
        </div>
    )
}

export default Register;