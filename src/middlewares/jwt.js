// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    console.log('the value of token is', token)

    if (!token) {
        console.log(token, 'is the value of token resulting in an error')
        //return res.status(403).json({ message: 'Token not provided' });
    } else {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                console.error('Token verification error:', err);
                return res.status(401).json({ message: 'Token invalid or expired' });
            }
            req.userId = decoded.userId; // Access user ID in subsequent middleware
            next();
        });
    }

    
};

module.exports = verifyToken;
