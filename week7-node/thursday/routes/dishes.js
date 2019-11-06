const express = require("express");
const router = express.Router();

//preapration: ["Excluding the milk, combine all ingredients for each smoothie in a resealable bag and freeze.","NOTE: They can be kept in the freezer for up to 6 months!", "Remove from freezer and pour your desired smoothie combination into the blender along with the milk. Blend until smooth, and add more milk if needed."], image: " 1 "}
const dishes = [
    { id:0, category: "Smoothie", title: "Orange Mango Carrot Smoothie", ingredients: ["2 oranges", "1 mango", "2 carrots", "1/2cup milk,  or nut milk"]}, 
    { id:1, category: "Smoothie", title: "Strawberry Banana Cauliflower Smoothie", ingredients:["2 cups strawberry", "2 bananas", "1 cup cauliflower", "1/2 cup milk, or nut milk"]},
    {id:2, category: "Smoothie", title: "Kiwi Pineapple Spinach Smoothie", ingredients: ["3 kiwis diced", "1 and 1/2 cups pineapple, diced", "2 cups spinach", "1/2 cup milk, or nut milk"]},
    {id:3, category: "Smoothie", title:"Berries & Broccoli Smoothie", ingredients: ["1 cup strawberry", "1 cup blackberry", "1 cup rasberry", "1 cup broccoli", "1/2 cup milk, or nut milk"]}
]

router.get("/:menu", (req, res) => {
    res.render("menu", {dishesKey: dishes});
});

router.get("/:menu/", (req, res) => {
    console.log(req)
    res.render("displayRecipe", {dishesKey: dishes});
});

module.exports = router;