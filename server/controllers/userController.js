const mongoose = require('mongoose');
const User = require('../models/userModel')

exports.find_all_users = (req, res) => {
    User.find({})
        .then((users) => res.status(200).json(users))
        .catch(err => res.status(500).send(err));
}


exports.find_user = (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.userId)) {
        return res.status(404).json({ message: "L'utilisateur est introuvable." });
    }

    User.findById(req.params.userId)
        .then(user => res.status(200).json(user))
        .catch(err => res.status(500).send(err));
}


exports.create_user = async (req, res) => {
    const {username, passwordHash} = req.body;
    const existingUser = await User.findOne({username: username});
    
    if (existingUser) {
        return res.status(400).json({ message: "Le nom d'utilisateur est déjà pris.", success: false });
    }

    const user = new User({ username, passwordHash });
    user.save()
        .then(savedUser => res.status(201).json({ message: "Le compte a été créé.", success: true }))
        .catch(err => res.status(500).json({ message: "Erreur lors de l'inscription.", success: false }));
}


exports.update_user = (req, res) => {
    User.findOneAndUpdate({_id: req.params.userId}, req.body)
        .then(() => res.status(200).send({message: "L'utilisateur a été mis à jour."}))
        .catch(err => res.status(500).send(err));
}


exports.delete_all_users = (req, res) => {
    User.deleteMany({})
        .then(() => res.status(200).send({message: "Tous les utilisateurs ont été supprimés."}))
        .catch(err => res.status(500).send(err));
}


