const userModel = require('../models/userModel');
const accountModel = require ('../models/accountModel');
const mongoose = require('mongoose');

exports.findAccounts = async (req, res) => {
    const user = req.session.user;

    if (!user) return res.status(401).send('Utilisateur non authentifié.');

    try {
        const accounts = await accountModel.find({ owner: user._id });
        res.status(200).send(accounts);
    }
    catch(error) {
        console.log(error);
        res.status(500).send('Erreur lors de la récupération des comptes.');
    }
}

exports.createAccount = async (req, res) => {
    const { accountNumber, balance } = req.body;
    const user = req.session.user;

    if (!user) return res.status(401).send('Utilisateur non authentifié.');
    
    try {
        const _user = await userModel.findOne({ username: user.username });
        if (!_user) return res.status(401).send('L\'utilisateur est introuvable.');

        const newAccount = await accountModel.create({ accountNumber: accountNumber, balance: balance, owner: _user._id });
        if (!newAccount) throw new Error('Échec de la création du compte.');

        res.status(201).send('Votre compte a été créé.');
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Erreur lors de la création du compte.');
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