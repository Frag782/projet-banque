import { useEffect, useState } from "react";
const config = require('../../data/config.json');

const TransactionForm = ({ _accountId }) => {
    const [accountId, setAccountId] = useState(_accountId);
    const [transactionType, setTransactionType] = useState('deposit');
    const [amount, setAmount] = useState(0);

    const makeTransaction = (e) => {
        e.preventDefault();

        fetch(`${config.apiURL}/account/transaction`, {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify({
                accountId: accountId,
                transactionType: transactionType,
                amount: amount ? amount : 0
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) window.location.reload();
            alert(data.message);
        })
        .catch(error => {
            alert("Erreur lors de la transaction.");
        })
    }
    
    return (
        <form class='text-center' onSubmit={ makeTransaction }>
            <div class='form-group'>
                <select name='transactionType' class='form-select my-1 border-0 border-bottom' required defaultValue={'deposit'} onChange={e => { setTransactionType(e.target.value) }}>
                    <option value={'deposit'}>Dépot</option>
                    <option value={'withdraw'}>Retrait</option>
                </select>
            </div>
            <div class='form-group'>
                <input name='amount' class='form-control my-1 border-0 border-bottom' type="number" min="0" placeholder="Montant" required onChange={e => setAmount(e.target.valueAsNumber)}></input>
            </div>
            <div class='form-group'>
                <button class='col-4 btn btn-success' type="submit">Effectuer</button>
            </div>
        </form>
    )
}

export default TransactionForm;