const express = require("express");
const recipe = express();
const PORT = 3000;
const bodyParser =require("body-parser");
// const recipe1 = require("./recipe1.json");

recipe.use(bodyParser.json());

recipe.post("/", (req, res)=>{
    console.log(req.body);
    res.send("OK");
});

recipe.post("/smoothies/morning", (req, res)=>{
    console.log(req.body);
    res.send("Working");
})

//6 GETs for the exercise;

recipe.get("/", (req, res) =>{
    res.send("Welcome to cooking class");
    res.send(req.body);
});

recipe.get("/smoothies", (req, res) => {
    // res.send(" banana oatmeal smoothie");
    res.json([{
        name: "morning smoothie",
        ingredients: "banana, water, sugar", 
        year: 2019
    },{

    }])
});

recipe.get("/kidslunch", (req, res)=>{
    // res.send(" Lunch for kids");
    res.json([
        {name : "pizza",
        ingredients : "flour, salt",
        category: "any"},
        { name: "another pizza", 
        ingredients: "flour, mushroom", 
    category: "bakery"},
    ])
});

recipe.get("/dinner", (req, res) =>{
    res.send(" Dinner Menu");
    console.log(req.query(sort));
});

recipe.get(" /dinner/crockpot", (req, res) => {
    res.send("Easy crockpot dinner recipes");
});

recipe.get("/international/dinner", (req, res) => {
    res.send("Would like to try international recipe? ");
});

// 3params used

recipe.get("/kidslunch/:dayOfWeek", (req, res)=>{
    res.send(`${req.params.dayOfWeek} kids Lunch`);
});

recipe.get("/international/:country", (req, res) => {
    res.send (`${req.params.country} menu`);
    console.log(req.query(sort-by-last));
})

recipe.get("/international/:country/dish/:dish", (req, res)=>{
    res.send (`${req.params.dish} is your menu for today`);
});

// event listener

recipe.listen(PORT, () =>{
    console.log(`Express application is running on port ${PORT}`);
});