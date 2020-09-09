var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var passport = require("passport");
var session = require("express-session");
var mongoose = require("mongoose");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var cors = require("cors");
require("dotenv").config();
require("./utils/twitter_auth");

mongoose.connect(
	process.env.DBURL,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
	},
	(err) => {
		console.log(err ? err : "Connected...");
	}
);

var app = express();

app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
	session({
		secret: "keyboard cat",
		resave: true,
		saveUninitialized: false,
	})
);

app.use(passport.initialize());
app.use(passport.session());
app.use("/", indexRouter);
app.use("/api/users", usersRouter);

app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	if (err.name == "ValidationError") {
		res.status(400).json({ err: { body: [err.message] } });
	}
	if (err.name == "JsonWebTokenError") {
		res.status(400).json({ err: { body: [err.message] } });
	}
	if (err.name == "MongoError") {
		res.status(400).json({ err: { body: [err.errmsg] } });
	}
	if (err.message == "Not Found") {
		res.status(404).json({ err: { body: [err.message] } });
	}
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page

	res.status(err.status || 500);
	res.send({ error: err.message });
});

module.exports = app;
