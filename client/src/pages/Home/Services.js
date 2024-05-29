import { useRef, useState } from "react";
const config = require('../../data/config.json');

const Services = () => {
    const [accountNumber, setAccountNumber] = useState('');
    const [balance, setBalance] = useState(0);
    const accountForm = useRef();

    const createAccount = (e) => {
        fetch(`${config.apiURL}/account`, {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify({
                username: sessionStorage.getItem('authenticatedUser'),
                accountNumber: accountNumber,
                balance: (balance ? balance : 0)
            })
        })
        .then(res => res.json())
        .then(data => {
            alert(data.message);
            if (data.success) accountForm.current.reset();
        })
    }

    return (
        <div className='col col-md-6 offset-md-3 my-3'>
            <h5 className='mb-3'>Mes services</h5>
            <div>
            <form ref={accountForm} className='col-6 offset-3 text-center' onSubmit={createAccount}>
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
            </div>
        </div>
    )
}

export default Services;