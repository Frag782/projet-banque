const userModel = require('../models/userModel');
const accountModel = require ('../models/accountModel');
const mongoose = require('mongoose');

exports.find_all_accounts = (req, res) => {
    const accounts = accountModel.find({})
        .then (accounts => res.status(200).json(accounts))
        .catch (err => res.status(500).send(err));    
}


exports.find_user_accounts = async (req, res) => {
    const username = req.params.username;
    
    try{
        const user = await userModel.findOne({username: username});
        if (!user) {
            return res.status(404).json({ message: "L'utilisateur est introuvable.", success: false });
        }

        const accountsIds = user.accounts;
        const accounts = await accountModel.find({ _id: { $in: accountsIds } }, 'accountNumber balance');
        if (!accounts) {
            return res.status(404).json({ message: "Aucun compte n'a été trouvé.", success: false });
        }

        return res.status(200).json({ accounts: accounts, success: true });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Le serveur a rencontré une erreur.", success: false});
    }
}


exports.create_account = async (req, res) => {
    const { username, accountNumber, balance } = req.body;
    
    try {        
        const [user, existingAccount] = await Promise.all([
            userModel.findOne({ username: username }),
            accountModel.findOne({ accountNumber: accountNumber })
        ]);
        
        if (!user) {
            return res.status(400).json({ message: "L'utilisateur est introuvable." , success: false});
        }
        else if (existingAccount) {
            return res.status(400).json({ message: "Le numéro de compte existe déjà." , success: false});
        }

        const createdAccount = await accountModel.create({ accountNumber: accountNumber, balance: balance });
        if (!createdAccount) {
            return res.status(400).json({ message: "Échec de la création du compte." , success: false});
        } 

        const accountSaved = await userModel.updateOne( { _id: user._id }, { $push: { accounts: createdAccount }});
        if (!accountSaved) {
            return res.status(400).json({ message: "Échec de la création du compte." , success: false});
        }

        return res.status(201).json({ message: `Le compte ${accountNumber} a été créé.`  , success: true});
    } catch (err) {
        res.status(500).json({ message: "Le serveur a rencontré une erreur.", success: false});
    }
}


exports.make_a_transaction = async (req, res) => {
    const { accountId, transactionType, amount } = req.body;
    if (!mongoose.isValidObjectId(accountId)) {
        return res.status(400).json({ message: 'Le compte est introuvable.', success: false});
    }
    if (!['deposit', 'withdraw'].includes(transactionType)) {
        return res.status(400).json({ message: 'Le type de transaction est invalide.', success: false});
    }
    if (isNaN(amount)) {
        return res.status(400).json({ message: 'Le montant doit être une valeur numérique.', success: false});
    }
    else if (amount <= 0) {
        return res.status(400).json({ message: 'Le montant doit être supérieur à 0.', success: false});
    }

    try {
        const account = await accountModel.findOne({ _id: accountId });
        if (!account) {
            return res.status(400).json({ message: 'Le compte est introuvable.', success: false});
        }
        else if (transactionType === 'withdraw' && amount > account.balance) {
            return res.status(400).json({ message: 'Solde insuffisant.', success: false});
        }

        if (transactionType === 'deposit') {
            await account.deposit(amount);
            return res.status(200).json({ message: 'Dépot effectué.', success: true });
        }
        else if (transactionType === 'withdraw') {
            await account.withdraw(amount);
            return res.status(200).json({ message: 'Retrait effectué.', success: true });
        }
    } catch(err) {
        console.log(err);
        return res.status(500).json({ message: 'Le serveur a rencontré une erreur.', success: false });
    }
}