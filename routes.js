const auth = require('./actions/auth');
const validate = require('./middleware/validate');
const jsonPatch = require('json-patch');
const image = require('./actions/thumbGen');
const express = require('express');
const router = express.Router();

/**
 * Login with arbitrary credentials.
 * @returns JWT token to use in later protected requests.
 */
router.post('/login', (req, res) => {
    if (req.body.name && req.body.password) {
        const token = auth.token(req.body)
        res.send('token: ' + token);
    }
    else {
        res.status(401)
        res.send('Please insert a "name" and "password"')
    }
});
/**
 * JSON patch request.
 * @requires JWT from login request "token".
 * @requires JSON object "json".
 * @requires patch json object to patch the original one "patch" .
 * @method validate is middleware callback function to verify the JWT token.
 * @returns Json patched object.
 */
router.post('/patch', validate, (req, res) => {
    const body = req.body.json;
    const patch = req.body.patch;
    res.send(jsonPatch.apply(body, patch));
});
/**
 * @requires token to be verified by validate method "token".
 * @requires path a valid image URL "path".
 * @method validate is middleware callback function to verify the JWT token.
 * @returns Image thumbnail with dimensions 50*50 (keeping the aspect ratio).
 */
router.post('/thumbgen', validate, async (req, res, next) => {
    if (!req.body.path) res.send('please insert a valid image path in "path" attribute');
    const path = '/' + await image.gen(req.body.path) + '?resize=50,50';
    res.redirect(path);


});


module.exports = router;