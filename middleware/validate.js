const jwt = require('jsonwebtoken')
module.exports = (req, res, next) => {
    const token = req.body.token;
    if (!token) {
        return res.status(401).send('Access denied. No token Provided');
    }
    try{
        jwt.verify(token, 'AJT_AJT');
        // res.send('Valid Token' );
        next();
    }catch(e){
        res.send('invalid Token');
    }
}
