import { useAuth } from "../../providers/AuthProvider";
import { LoggedIn } from "./LoggedIn";
import { LoggedOut } from "./LoggedOut";

const NavigationBar = () => {
    const { user } = useAuth();

    return (
        <nav className='navbar bg-light navbar-expand sticky-top mb-3'>
            <a className='navbar-brand' href='/home'>
                <img src={'assets/logo_CR.png'} height={50} alt="Logo"></img>
            </a>
            
            { user ? <LoggedIn /> : <LoggedOut /> }
            
        </nav>
    )
}

export default NavigationBar;