const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');

exports.register = (req, res) => {
    const { username, password } = req.body;

    const isUsernameAvailable = (username) => {
        return userModel.findOne({ username: username })
            .then( (user) => !user )
    }

    const createUser = (username, password) => {
        bcrypt.hash(password, 10)
            .then( (passwordHash) => {
                userModel.create({ username: username, passwordHash: passwordHash });
                res.status(201).send('Votre compte a été créé.');
            })
    }

    isUsernameAvailable(username)
        .then( (available) => {
            if (available) createUser(username, password)
            else res.status(401).send('Ce nom d\'utilisateur est déjà pris.');
        })
        .catch( (error) => {
            console.log(error);
            res.status(500).send('Erreur lors de la création du compte.');
        })
}

exports.login = async (req, res) => {
    const { username, password } = req.body;

    const authenticate = () => {
        return userModel.findOne({ username: username })
        .then( (user) => {
            if (user) {
                return bcrypt.compare(password, user.passwordHash)
                    .then( (match) => {
                        if (match) return user;
                        else return null;
                    })
            }
        })
    }

    authenticate()
        .then( (user) => {
            if (!user) res.status(401).send('Nom d\'utilisateur et/ou mot de passe incorrect(s).');
            else {
                console.log(`${user.username} est maintenant connecté.`);
                req.session.user = user;
                res.status(200).send(user);
            }
        })
        .catch( (error) => {
            console.log(error);
            res.status(500).send('Erreur lors de la connexion.');
        })
};

exports.logout = (req, res) => {
    req.session.user = null;
    res.send('Vous êtes maintenant déconnecté.');
}

exports.authStatus = (req, res) => {
    if (req.session.user) res.status(200).send(req.session.user);
    else res.send('Non authentifié.');
}