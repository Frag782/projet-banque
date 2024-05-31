import { createContext, useContext, useEffect, useState } from 'react';
const { API } = require('../data/config.json');

const AccountContext = createContext();
export const useAccounts = () => useContext(AccountContext);

export const AccountProvider = ({ children }) => {
    const [accounts, setAccounts] = useState([]);

    const createAccount = (accountNumber, balance) => {
        fetch(API + '/account', {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify({ accountNumber: accountNumber, balance: balance })
        })
            .then( (response) => response.text() )
            .then( (text) => { getAccounts(); alert(text); } )
            .catch( (error) => { alert('Erreur lors de la création du compte.') } )
    }

    const getAccounts = () => {
        return fetch(API + '/accounts', {
            method: 'GET',
            credentials: 'include'
        })
            .then( (response) => response.json() )
            .then( (accounts) => { setAccounts(accounts); })
            .catch( (error) => console.log('Erreur du serveur.') )
    }

    return (
        <AccountContext.Provider value={{ accounts, getAccounts, createAccount }}>
            { children }
        </AccountContext.Provider>
    )
}