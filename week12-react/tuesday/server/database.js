const pgp = require("pg-promise")();
const db = pgp("postgres://localhost:5432/full_stack_blog_sample")

module.exports = {
    geko: () => {
        return db.any("SELECT * FROM users; ")
    }
}