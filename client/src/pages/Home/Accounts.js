import TransactionForm from "./TransactionForm";

const Accounts = ({accounts}) => {
    return (
        <div className='col col-md-6 offset-md-3 my-3'>
            <h5 className='mb-3'>Mes comptes</h5>
            <ul className='list-group'>
                { accounts.map( (account, index) => (
                    <li className='list-group-item' key={index}>
                        <div className='row'>
                            <div className='col'>Compte #{account.accountNumber}</div>
                            <div className='text-end'>
                                <div className='col'>{account.balance} $</div>
                                <button className='col btn btn-light border-0 border-bottom' data-bs-toggle='collapse' data-bs-target={ `#tsForm${index}` }>Opérations</button>
                            </div>
                        </div>
                        <div className='collapse' id={ `tsForm${index}` }>
                            <TransactionForm _accountId={ account._id }/>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Accounts;