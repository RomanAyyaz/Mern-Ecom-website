require('dotenv').config();
const jwt = require('jsonwebtoken');

const UserAuth = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'User is not authorized' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.SECRETKEY);
        req.user = decoded;

        if (req.user.role === 'user') {
            next();
        } else {
            return res.status(403).json({ error: 'User is not authorized to access this route' });
        }
    } catch (error) {
        return res.status(401).json({ error: 'Invalid token' });
    }
};

const AdminAuth = async (req,res,next)=>{
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Admin is not authorized' });
    }
    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.SECRETKEY);
        req.user = decoded;
        if (req.user.role === 'admin') {
            next();
        } else {
            return res.status(403).json({ error: 'Admin is not authorized' });
        }
    } catch (error) {
        return res.status(401).json({ error: 'Invalid token' });
    }
}
module.exports = {
    UserAuth,
    AdminAuth
};
