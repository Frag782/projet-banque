const userController = require('./userController');
const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');

exports.register = (req, res) => { userController.create_user(req, res) }

exports.authenticate = async (req, res) => {
    const {username, password} = req.body;
    
    await userModel.findOne({username: username})
        .then(user => {
            if (!user) return res.status(404).json({ message: "Ce nom d'utilisateur n'existe pas.", success:false})

            bcrypt.compare(password, user.passwordHash, (err, success) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ message: "Erreur lors de l'authentification.", success: false });
                }
                else if (success) {
                    return res.status(200).json({ 
                        message: `Bienvenue ${username}.`, 
                        success: true,
                        accounts: user.accounts
                    });
                }
                else {
                    return res.status(401).json({ message: "Mot de passe incorrect.", success: false });
                }
            })
        })
};