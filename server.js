const path = require('path');
const { Nuxt, Builder } = require('nuxt')
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const flash = require('express-flash');
const session = require('express-session');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const corsOptions = {
  origin: "http://localhost:8071"
};
 
const db = require('./api/config/db');

app.use(cors(corsOptions));

app.use(session({ 
  secret: 'h$_6NM/Db0*Qq6>',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.use(flash());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to AlternateCMS." });
});

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(function(req, res, next) {
  next(createError(404));
});
 
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
 
  res.status(err.status || 500);
  res.render('error');
});

const isProd = process.env.NODE_ENV === 'production'
const nuxt = new Nuxt({ dev: !isProd })
// No build in production
if (!isProd) {
  const builder = new Builder(nuxt)
  builder.build()
}
app.use(nuxt.render)
app.listen(3000)
console.log('Server is listening on http://localhost:3000')