const users = [
    {username : 'test', password : 'test'},
    {username : 'frag782', password : 'frag782'},
]

const showUsers = () => {
    users.forEach(user => console.log(user.username + " - " + user.password))
}

const authenticate = (username, password) => {
    for (let user of users)
        if (user.username === username && user.password === password)
            return true;
    return false;
}

module.exports = {
    showUsers : showUsers,
    authenticate : authenticate,
}