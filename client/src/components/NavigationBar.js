const NavigationBar = () => {
    return (
        <nav class='navbar bg-light navbar-expand mb-3'>
            <a class='navbar-brand' href='#'>Accueil</a>
            <div class='container'>
                <ul class='navbar-nav'>
                    <li class='nav-item'>
                        <a class='nav-link' href='#'>Mon profil</a>
                    </li>
                    
                    <li class='nav-item'>
                        <a class='nav-link' href='/login'>Se déconnecter</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavigationBar;