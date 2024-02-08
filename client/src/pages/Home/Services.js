import { useRef, useState } from "react";
const config = require('../../data/config.json');

const Services = () => {
    const [accountNumber, setAccountNumber] = useState('');
    const [balance, setBalance] = useState(0);
    const accountForm = useRef();

    const createAccount = (e) => {
        e.preventDefault();
            
        fetch(`${config.apiURL}/account`, {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify({
                username: 'frag782',    // A REMPLACER PAR SESSIONSTORAGE
                accountNumber: accountNumber,
                balance: balance
            })
        })
        .then(res => res.json())
        .then(data => {
            alert(data.message);
            if (data.success) accountForm.current.reset();
        })
    }

    return (
        <div class='col col-sm-4 offset-sm-4'>
            <h5 class='mb-3'>Mes services</h5>
            <div>
            <form ref={accountForm} class='text-center' onSubmit={createAccount}>
                <div class='form-group mb-2'>
                    <input name='accountNumber' class='form-control' type='text' placeholder="Numéro de compte" onChange={e => {setAccountNumber(e.target.value)}} required></input>
                </div>
                <div class='form-group mb-3'>
                    <input name='balance' class='form-control' type='number' min='0' placeholder='Solde' onChange={e => {setBalance(e.target.value)}}></input>
                </div>
                <div class='form-group mb-1'>
                    <button type='submit' class='btn btn-success form-control'>Ouvrir un compte</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Services;