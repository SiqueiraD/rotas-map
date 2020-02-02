require('rootpath')();

const expressJwt = require('express-jwt');
//const config = require('api/config');
const userService = require('api/services/user.service');

module.exports = jwt;

function jwt() {
    const secret = "config.secret";
    //const resultProperty = "locals.user";
    return expressJwt({ secret, isRevoked/*, resultProperty*/ }).unless({
        path: [
            // public routes that don't require authentication
            '/users/authenticate',
            '/users/register'
        ]
    });
}

async function isRevoked(req, payload, done) {
    const user = await userService.getById(payload.sub);

    // revoke token if user no longer exists
    if (!user) {
        return done(null, true);
    }

    done();
};