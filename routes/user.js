const router = require("express").Router();
var userController = require("../controllers/user");
var passport = require("passport");
var auth = require("../utils/auth");

/* GET users listing. */
router.get("/", auth.validateJwt, userController.getCurrentUser);
router.post("/", userController.register);
router.post("/login", userController.login);

// auth.validateJwt

router.get("/auth/twitter", passport.authenticate("twitter"));

router.get(
	"/login/twitter/callback",
	passport.authenticate("twitter", {
		failureRedirect: "/",
	}),
	async function (req, res) {
		var token = await auth.generateJwt(req.user);
		res.redirect(`/oauth/${token}`);
	}
);

// when login failed, send failed msg

module.exports = router;
