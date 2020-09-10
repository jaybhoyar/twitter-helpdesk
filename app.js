var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var logger = require("morgan");
var helmet = require("helmet");
var expressStaticGzip = require("express-static-gzip");
var mongoose = require("mongoose");
var passport = require("passport");
var cors = require("cors");
var tweetRouter = require("./routes/tweet");
var indexRouter = require("./routes/index");
var userRouter = require("./routes/user");

require("dotenv").config();
require("./utils/passport");

mongoose.connect(
	process.env.DBURL,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
	},
	(err) => {
		console.log(err ? err : "Connected to Database **");
	}
);

var app = express();
app.use(cors());
app.use(helmet());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

if (process.env.NODE_ENV === "development") {
	app.use(logger("dev"));
}

app.set("trust proxy", true);

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
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "DELETE, PUT");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	if ("OPTIONS" == req.method) {
		res.sendStatus(200);
	} else {
		next();
	}
});

app.use(
	"/dist/bundle",
	expressStaticGzip(path.join(__dirname, "dist/bundle"), {
		enableBrotli: true,
		orderPreference: ["br", "gz"],
		setHeaders: function (res, path) {
			res.setHeader("Cache-Control", "public, max-age=31536000");
		},
	})
);

// fix depreciation warning.

// webpack
if (process.env.NODE_ENV === "development") {
	var webpack = require("webpack");
	var webpackConfig = require("./webpack.config");
	var compiler = webpack(webpackConfig);

	app.use(
		require("webpack-dev-middleware")(compiler, {
			noInfo: true,
			publicPath: webpackConfig.output.publicPath,
		})
	);

	app.use(require("webpack-hot-middleware")(compiler));
}
app.use(passport.initialize());
// setInterval(getMentions, 5000);
// Route handler
app.use("/api/users", userRouter); // api route handler
app.use("/api/tweets", tweetRouter); // api route handler
app.use("/", indexRouter); // react handler

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.send(err.message);
});

module.exports = app;
