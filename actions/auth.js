const jwt = require('jsonwebtoken');

let token = (req) => {
    return jwt.sign(req, 'AJT_AJT');
}
let verify = (token) => {
    jwt.verify(token, 'AJT_AJT')
}
module.exports =
    {
        token,
        verify,
    }