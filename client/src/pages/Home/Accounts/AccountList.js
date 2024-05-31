export const AccountList = ({ accounts }) => {
    return (
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
                    {/* <div className='collapse' id={ `tsForm${index}` }>
                        <TransactionForm _accountId={ account._id }/>
                    </div> */}
                </li>
            ))}
        </ul>
    )
}