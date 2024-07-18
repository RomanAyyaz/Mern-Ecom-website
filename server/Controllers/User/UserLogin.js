require('dotenv').config();
const User = require('../../Models/UserModel');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ error: 'User email does not exist' });
        }
        const UserPassword = await bcryptjs.compare(password, user.password);
        if (!UserPassword) {
            return res.status(401).json({ error: 'User password does not match' });
        }
        const payload = {
            id:user._id,
            email:user.email,
            name:user.name,
            role:user.role
        }
        const Token = jwt.sign(payload, process.env.SECRETKEY, { expiresIn: '20h' });
        return res.status(200).json({ user,Token });
    } catch (error) {
        console.error('Error in UserLogin:', error);
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    UserLogin
};
