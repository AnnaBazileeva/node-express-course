const jwt = require('jsonwebtoken')
const {BadRequest} = require('../errors')

const logon = async (req, res)=> {
    const {name, password} = req.body
    if(!name || !password ){
 throw new BadRequest('Please provide name  and password')
    }

    const token = jwt.sign({name}, process.env.JWT_SECRET, {expiresIn: '24h'})

    res.status(200).json({ token})
}

const hello = async (req, res) => {
    res.status(200).json({
        message: `Hello, ${req.user.name}! Welcome back.`,
    })
}


module.exports = {
    logon, hello
}