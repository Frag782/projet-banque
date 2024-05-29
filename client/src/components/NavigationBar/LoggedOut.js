export const LoggedOut = () => {
    return (
        <div className='container'>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <a className='nav-link' href='/login'>Se connecter</a>
                    <a className='nav-link' href='/register'>S'inscrire</a>
                </li>
            </ul>
        </div>
    )
}