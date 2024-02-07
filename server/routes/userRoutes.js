const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// ces 2 methodes ne seront pas exposees
// la premiere est trop dangereuse - droits d'acces
// la deuxieme est juste la pour les tests
router.get('/users', userController.find_all_users);
router.delete('/all-users', userController.delete_all_users);

router.post('/user', userController.create_user);
router.route('/user/:userId')
    .get(userController.find_user)
    .put(userController.update_user);

module.exports = router;