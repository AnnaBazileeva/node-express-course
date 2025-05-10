const jwt = require('jsonwebtoken')
const {UnauthenticatedError} = require('../errors')

const authenticatitionMiddleware = async(req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        throw new UnauthenticatedError('No token provided');
    }

    const token = authHeader.split(' ')[1]
     console.log(req.headers.authorization)
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log('Decoded token:', decoded);
        const {id,username} = decoded
        req.user = {id, username}
        next()
    } catch (error) {
        console.error('JWT Error:', error);
        throw new UnauthenticatedError('Not authorized to access this route')
    }


 }

 module.exports = authenticatitionMiddleware