import { useState } from "react";
import { useAccounts } from "../../../providers/AccountProvider"

export const CreateAccountForm = () => {
    const [accountNumber, setAccountNumber] = useState('');
    const [balance, setBalance] = useState(0);
    const { createAccount } = useAccounts();

    const onSubmit = (e) => {
        e.preventDefault();
        createAccount(accountNumber, balance);
        e.target.reset();
    }
    
    return (
        <form className='col-6 offset-3 text-center' onSubmit={ onSubmit }>
            <div className='form-group mb-2'>
                <input name='accountNumber' className='form-control' type='text' placeholder="Numéro de compte" onChange={e => {setAccountNumber(e.target.value)}} required></input>
            </div>
            <div className='form-group mb-3'>
                <input name='balance' className='form-control' type='number' min='0' placeholder='Solde' onChange={e => {setBalance(e.target.value)}}></input>
            </div>
            <div className='form-group mb-1'>
                <button type='submit' className='btn btn-success form-control'>Ouvrir un compte</button>
            </div>
        </form>
    )
}