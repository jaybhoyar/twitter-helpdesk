const router = require("express").Router();
var userController = require("../controllers/user");
var passport = require("passport");

/* GET users listing. */

router.post("/", userController.register);
router.post("/login", userController.login);

router.get("/auth/twitter", passport.authenticate("twitter"));

router.get(
	"/login/twitter/callback",
	passport.authenticate("twitter", { failureRedirect: "/" }),
	function (req, res) {
		res.redirect("/success");
	}
);

// when login failed, send failed msg

module.exports = router;
