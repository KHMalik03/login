const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

const usersFilePath = path.join(__dirname, '../data/users.json');

//function to save users to the json file
const saveUsersToFile = (users) => {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
};

//function to find user by email
const findUserByEmail = (email) => {
    const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
    return users.find(user => user.email === email);
};

//function to add a new user
const addUser = async (email, password) => {
    const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {id: Date.now().toString(), email, password: hashedPassword};
    users.push(newUser);
    saveUsersToFile(users);
    return newUser;
}

//function to authenticate user
const authenticateUser = async (email, password) => {
    const user = findUserByEmail(email);
    if(!user) return false;

    const isPasswordValid = await bcrypt.compare(password, user.password);
    return isPasswordValid ? user : false;
}

module.exports = { findUserByEmail, addUser, authenticateUser };

