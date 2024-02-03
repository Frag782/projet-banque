const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const usersFilePath = path.join(__dirname, '..', 'data', 'users.json');

const loadUsers = () => {
    try {
        const usersData = fs.readFileSync(usersFilePath, 'utf8');
        return JSON.parse(usersData);
    } catch (err) {
        return [];
    }
}

const saveUser = (username, passwordHash) => {
    const newUser = {username : username, passwordHash : passwordHash, accounts : []};
    const existingUsers = loadUsers();
    const users = [...existingUsers, newUser];
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2), 'utf8');
}

const findUser = (username) => {
    const users = loadUsers();
    return users.find(user => user.username === username);
}

const fetchAccounts = (req, res) => {
    const { username } = req.body;
    const user = findUser(username);

    if (!user) {
        res.status(401).json({
            accounts : [],
            success : false
        })
        return;
    }

    res.status(200).json({
        accounts : user.accounts,
        success : true
    })
}

module.exports = {
    loadUsers,
    saveUser,
    findUser,
    fetchAccounts,
};