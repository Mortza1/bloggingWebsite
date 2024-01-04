const User = require('../model/user');
const bcrypt = require('bcrypt');

const authController = {
    async signup(req, res) {
        try {
            const { username, email, password } = req.body;
            // Hash password before saving it to the database
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await User.create({ username, email, password: hashedPassword });
            res.json(newUser);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    async login(req, res) {
        try {
            const { email, password } = req.body;
            // Find user by email
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            // Compare password
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }
            // Successful login
            res.json({ message: 'Login successful', user: user });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    // Other authentication actions...
};

module.exports = authController;
