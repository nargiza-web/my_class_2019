const express = require("express");
const router = express.Router();

// if already logged in, first checking
function loginRedirect(req, res, next){
    if (req.session.name){
        res.redirect("/account/dashboard");
    }else{
        next();
    }
}

function authenticate(req, res, next){
    //if not logged in go to login page
    if(!req.session.name){
        res.redirect("/account/login");
    }else{
        //otherwise continue what you were doing
        next();
    };
};
//you are not using functions yet
//time to GET into those pages

//URI: /account/       , use (router) require("express").Router()
router.get("/", authenticate, (req, res)=>{
    res.render("account/account");
});

// /account/dashboard get in there
router.get("/dashboard", authenticate, (req, res)=>{
    if (!req.session.favMenus)req.session.favMenus = [];
    res.render("account/dashboard", {
        favMenus: req.session.favMenus,
        name: req.session.name || "buddy"
    });
});

router.get("/settings", authenticate, (req, res)=>{
    res.render("account/settings");
});

router.post("/add", authenticate, (req, res)=>{
    if (req.session) {
        req.session.favMenus.push({title: req.body.title});
    };
    res.redirect("/account/dashboard");
});

router.get("/login", loginRedirect, function(req, res){
    res.render("account/login");
});

router.get("/logout", (req, res)=>{
    req.session.destroy();
    res.redirect("/account/login");
});

router.post("/login", (req, res)=>{
    console.log(req.body);
    if(req.session){
        console.log("session is working");
        req.session.name=req.body.name;
    };
    //check if user's email and password are valid
    //save login state for browser
    res.redirect("/account/dashboard");
});

module.exports = router;


