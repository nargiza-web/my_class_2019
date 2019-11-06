//Bismillah her hayirin basidir!!! BismillahiRahmaniRahim

// PART 1 -SETTING UP CONSTANTS 
const express = require('express'); //yes
const app = express();
const bodyParser = require('body-parser'); //yes
const session = require('express-session'); //yes
const db = require('./database'); //LOOK AT THIS!
const accountRouter = require('./routes/account')//LOOK AT THIS!
const port = 3000; //yes
//////////////////////////////////////////////////

// PART 2 -SETTING UP MIDDLEWARE AND PUG ALSO
app.set('view engine', 'pug'); //pug

app.use(    //session - cookie
    session({
        secret: "whatever the hack we want because we can",
        resave: false,
        saveUninitialized: true
    })
);

//use the following code to serve images, CSS files in a directory named public:
app.use(express.static('public'));
//Express looks up the files relative to the static directory, so the name of the static directory is not part of the URL.

//If extended is false, you can not post "nested object"
//If extended is true, you can do whatever way that you like.
app.use(bodyParser.urlencoded({extended: false}));

app.use("/account", accountRouter);
/////////////////////////////////////////////////////////////



