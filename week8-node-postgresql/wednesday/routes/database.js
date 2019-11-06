const pgp = require('pg-promise')();
const pgpDb = require('postgress://localhost:5432/bcrypt_site');

function checkForUser(email){
    return pgpDb.oneOrNone(
        'SELECT email, password, id FROM users WHERE email = $1', [email]
    ); 
}

module.exports = {
    checkForUser: checkForUser
}