const Accounts = ({accounts}) => {
    return (
        <div class='col col-sm-4 offset-sm-4 mb-3'>
            <h5 class='mb-3'>Mes comptes</h5>
            <ul class='list-group'>
                { accounts.map( account => (
                    <li class='list-group-item'>
                        <div class='row'>
                            <div class='col'>Compte {account.accountNumber}</div>
                            <div class='col text-end'>Solde : {account.balance} $</div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Accounts;