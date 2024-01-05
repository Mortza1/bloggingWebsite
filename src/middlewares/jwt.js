// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(403).json({ message: 'Token not provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token invalid or expired' });
        }
        req.userId = decoded.userId; // Access user ID in subsequent middleware
        next();
    });
};

module.exports = verifyToken;
