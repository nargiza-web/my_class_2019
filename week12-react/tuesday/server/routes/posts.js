var express = require("express")
var router = express.Router();
var db = require("../database");

router.get("/", function(_, res){
    db.geko().then(data => {
        res.json(data)
    })
})

module.exports = router;