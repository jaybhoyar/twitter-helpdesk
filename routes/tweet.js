const router = require("express").Router();
var tweetController = require("../controllers/tweet");
// var passport = require("passport");
// var auth = require("../utils/auth");

router.get("/mentions", tweetController.getMentions);

module.exports = router;
