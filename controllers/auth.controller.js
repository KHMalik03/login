const { findUserByEmail, addUser, authenticateUser } = require('./user.controller');

// Register controller
exports.register = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Check if user already exists
        const existingUser = findUserByEmail(email);
        if (existingUser) {
            return res.status(409).json({ 
                message: 'User with this email already exists' 
            });
        }

        // Create new user
        const newUser = await addUser(email, password);
        
        // Don't send password back in response
        const { password: _, ...userWithoutPassword } = newUser;
        
        res.status(201).json({ 
            message: 'User registered successfully',
            user: userWithoutPassword
        });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ 
            message: 'Error registering user',
            error: error.message 
        });
    }
};

// Login controller
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const user = await authenticateUser(email, password);
        
        if (!user) {
            return res.status(401).json({ 
                message: 'Invalid email or password' 
            });
        }

        // Don't send password back in response
        const { password: _, ...userWithoutPassword } = user;
        
        res.status(200).json({ 
            message: 'Login successful',
            user: userWithoutPassword
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ 
            message: 'Error logging in',
            error: error.message 
        });
    }
};