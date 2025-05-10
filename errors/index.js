const CustomAPIError = require('./custom-error')
const UnauthenticatedError = require('./unauthentication')
const BadRequest = require('./bad-request')

module.exports = {
    CustomAPIError,
    BadRequest,
    UnauthenticatedError
}