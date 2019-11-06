const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const accountRouter = require("./routes/account");//account.js
const dishesRouter = require("./routes/dishes")
const PORT = 3000;
const app = express();

// you want to set pug first
app.set("view engine", "pug");

app.use(session({
    secret: "Whatever the heck we want because we can", 
    resave: false, //?
    saveUninitialized: true
})
);

//you want to set static why?
app.use(express.static("public"));

//use body parser also
app.use(bodyParser.urlencoded({extended: false}));//extended false = 1 type of array only

app.use("/account", accountRouter);

app.use("/menu", dishesRouter);

app.get("/", (req, res)=>{
    res.render("index");//("index", {title: "Hey", message: "Hello there!"});, if you want to use it
});

const menus = [
    { title: "Chicken", slug:"chicken"},
    { title: "Beef", slug:"beef"},
    { title: "Lamb", slug: "lamb"},
    {title: "Smoothie", slug: "smoothie"},
    { title: "Instant Pot", slug:"instantpot"},
    { title: "Slow Cooker", slug: "slowcooker"},
    { title: "Kids Lunch", slug: "kidslunch"}
];

app.get("/menus", (req, res)=>{
    console.log("there are frogs in my potataoes")
    res.render("menus", {menus: menus});
});

app.get("/menus/:menu", (req, res)=> {
    console.log(req.params)
    let filteredMenus = menus.filter(menu => {
        return menu.slug === req.params.menu;
    });
    console.log(filteredMenus);
    if (filteredMenus.length < 1) {
        res.send("Menu not found");
    }
    res.render("menus", {menus: filteredMenus[0]});
})

app.get("/aboutus", (req, res)=>{
    res.render("about", { title: "Hey", message: "Hello there!"});
});



//===============DISHES ROUTER===================


// app.get("/dashboard", (req, res)=>{
//     res.render("dashboard");
// });

app.listen(PORT, ()=>{
    console.log(`Port ${PORT} is running`);
});