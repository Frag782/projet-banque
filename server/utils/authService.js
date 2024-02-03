const { loadUsers, saveUser, findUser } = require('./userService');
const bcrypt = require('bcryptjs');

const authenticate = async (req, res) => {
    const {username, password} = req.body;
    const users = loadUsers();

    try {
        for (let user of users) {
            if (user.username === username) {
                const success = await bcrypt.compare(password, user.passwordHash);

                if (success) {
                    res.status(200).json({
                        message: 'Connexion réussie',
                        success: true
                    });
                    return;
                }
            }
        }

        res.status(401).json({
            message: "Nom d'utilisateur et/ou mot de passe incorrect(s).",
            success: false
        });
    } catch (error) {
        console.error("Erreur lors de l'authentification", error);
        res.status(500).json({
            message: "Erreur lors de l'authentification",
            success: false
        });
    }
};

const register = (req, res) => {
    const {username, passwordHash} = req.body;

    if (findUser(username)) {
        res.status(401).json({
            message : `L'utilisateur ${username} existe déjà.`,
            success : false
        })
        return;
    }

    saveUser(username, passwordHash);
    res.status(200).json({
        message : `Félicitations ! Votre compte a été créé.`,
        success : true
    })
}

module.exports = {
    authenticate,
    register,
}