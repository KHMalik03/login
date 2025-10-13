const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

const usersFilePath = path.join(__dirname, '../data/users.json');

// Helper function to read users from file
const getUsersFromFile = () => {
    try {
        const data = fs.readFileSync(usersFilePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading users file:', error);
        return [];
    }
};

// Function to save users to the json file
const saveUsersToFile = (users) => {
    try {
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
    } catch (error) {
        console.error('Error saving users to file:', error);
        throw new Error('Failed to save user data');
    }
};

// Function to find user by email
const findUserByEmail = (email) => {
    const users = getUsersFromFile();
    return users.find(user => user.email === email);
};

// Function to add a new user
const addUser = async (email, password) => {
    try {
        const users = getUsersFromFile();
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = {
            id: Date.now().toString(), 
            email, 
            password: hashedPassword
        };
        users.push(newUser);
        saveUsersToFile(users);
        return newUser;
    } catch (error) {
        console.error('Error adding user:', error);
        throw new Error('Failed to create user');
    }
};

// Function to authenticate user
const authenticateUser = async (email, password) => {
    try {
        const user = findUserByEmail(email);
        if (!user) {
            return false;
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        return isPasswordValid ? user : false;
    } catch (error) {
        console.error('Error authenticating user:', error);
        throw new Error('Authentication failed');
    }
};

module.exports = { 
    findUserByEmail, 
    addUser, 
    authenticateUser 
};