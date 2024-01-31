const Subscribe = () => {

    const subscribe = () => {}

    return (
        <div>
            <h1 class='display-4 text-bg-light p-3 mb-5'>Inscription</h1>
            <form class='col-4 offset-4 col-lg-2 offset-lg-5'>
                <div class='form-group mb-2'>
                    <input class='form-control' type='text' placeholder="Nom d'utilisateur"></input>
                </div>
                <div class='form-group mb-2'>
                    <input class='form-control' type='password' placeholder='Mot de passe'></input>
                </div>
                <div class='form-group mb-3'>
                    <input class='form-control' type='password' placeholder='Confirmer mot de passe'></input>
                </div>
                <div class='form-group mb-1'>
                    <button type='submit' class='btn btn-primary' onClick={subscribe}>S'inscrire</button>
                </div>
                <div class='form-group mb-3'>
                    <a class='link-secondary' href='#'>J'ai déjà un compte</a>
                </div>
            </form>
        </div>
    )
}

export default Subscribe;