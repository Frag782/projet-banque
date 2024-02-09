const logo = require('../assets/logo_nouveau_CR.png');

const NavigationBar = () => {
    const logout = () => {
        sessionStorage.removeItem('authenticatedUser');
        return true;
    }

    return (
        <nav class='navbar bg-light navbar-expand sticky-top mb-3'>
            <a class='navbar-brand' href='/home'>
                <img src={logo} height={50} alt="Logo"></img>
            </a>
            <div class='container'>
                <ul class='navbar-nav'>
                    <li class='nav-item'>
                        <a class='nav-link' href='/login' onClick={logout}>Se déconnecter</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavigationBar;