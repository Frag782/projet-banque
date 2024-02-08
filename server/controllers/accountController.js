const userModel = require('../models/userModel');
const accountModel = require ('../models/accountModel');

exports.find_all_accounts = () => {
    const accounts = accountModel.find({})
        .then (accounts => res.status(200).json(accounts))
        .catch (err => res.status(500).send(err));    
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