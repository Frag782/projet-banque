import { useEffect } from "react";
import TransactionForm from "./TransactionForm";

const Accounts = ({accounts}) => {
    return (
        <div class='col col-md-6 offset-md-3 my-3'>
            <h5 class='mb-3'>Mes comptes</h5>
            <ul class='list-group'>
                { accounts.map( (account, index) => (
                    <li class='list-group-item' key={index}>
                        <div class='row'>
                            <div class='col'>Compte #{account.accountNumber}</div>
                            <div class='text-end'>
                                <div class='col'>{account.balance} $</div>
                                <button class='col btn btn-light border-0 border-bottom' data-bs-toggle='collapse' data-bs-target={ `#tsForm${index}` }>Opérations</button>
                            </div>
                        </div>
                        <div class='collapse' id={ `tsForm${index}` }>
                            <TransactionForm _accountId={ account._id }/>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Accounts;