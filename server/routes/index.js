var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
	res.json({
		success: true,
		message: "user has successfully authenticated",
		user: req.user,
		cookies: req.cookies,
	});
});

router.get("/login/failed", (req, res) => {
	res.status(401).json({
		success: false,
		message: "user failed to authenticate.",
	});
});

module.exports = router;
