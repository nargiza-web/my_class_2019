//BISMILLAHI RAHMANI RAHIM
// install express, session, body-parser, init
// create the login page
// let the user logout
//when having password - just encrypt it

//set up the constants
const express = require('express');
const app = express();
const PORT = 3000;
const session = require('express-session');
const bodyParser = require('body-parser');
const db = require('./routes/database');

//set up your middleware and always use USE, only one set to SET- PUG
app.set("view engine", "pug");
app.use(bodyParser.urlencoded({extended: false})); 
app.use(session({
    secret: 'whatever hack I write',
    resave: false,
    saveUninitialized: true
}))

//// set up your GET to put things on the page

app.get('/login', (req, res) => {
try {
res.render("login");

}
catch (e) {
    res.send(e);
    console.log(e);
}
});

app.post('/user', (req, res) =>{
    db.checkForUsers(email);
})

app.get('/register', (req, res) => {
    res.render("register");
})


//LAST on page will be listening to PORT
app.listen(PORT, () =>{
    console.log(`Port ${PORT} is running successfully....`)
})