const  authorize = (res, req, next) => {
    console.log('authorize')
    next()
}

module.exports = authorize