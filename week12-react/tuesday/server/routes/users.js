var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(["You gotta be tough", "So Beat It", "Bismillahi RAhmani Rahim"]);
});

module.exports = router;
