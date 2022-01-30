import helmet from "helmet";
const http = require("http");
const path = require('path');
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const flash = require('express-flash');
const session = require('express-session');

app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const productRouter = require('./api/routes/products');

const corsOptions = {
  origin: "http://localhost:8071"
};
 
const db = require('./api/config/db');

const index = require('./api/index');

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

app.use('./pages/admin/shop/products', productRouter);

db.sequelize.sync({ force: true }).then(() => {
  // eslint-disable-next-line no-console
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

require("./api/routes/article")(app);
require("./api/routes/billing_agreements")(app);
require("./api/routes/cart_price_rules")(app);
require("./api/routes/catalog_price_rules")(app);
require("./api/routes/categories")(app);
require("./api/routes/cities")(app);
require("./api/routes/comments")(app);
require("./api/routes/countries")(app);
require("./api/routes/coupons")(app);
require("./api/routes/creditmemos")(app);
require("./api/routes/currencyrates")(app);
require("./api/routes/currencysymbols")(app);
require("./api/routes/customers")(app);
require("./api/routes/giftcertificates")(app);
require("./api/routes/glossary")(app);
require("./api/routes/invoices")(app);
require("./api/routes/newsletterqueue")(app);
require("./api/routes/newslettersubscribers")(app);
require("./api/routes/orders")(app);
require("./api/routes/pages")(app);
require("./api/routes/polls")(app);
require("./api/routes/productattribute")(app);
require("./api/routes/productattributeset")(app);
require("./api/routes/products")(app);
require("./api/routes/quotes")(app);
require("./api/routes/rating")(app);
require("./api/routes/reports")(app);
require("./api/routes/reviews")(app);
require("./api/routes/rewardpoints")(app);
require("./api/routes/role")(app);
require("./api/routes/shipments")(app);
require("./api/routes/shops")(app);
require("./api/routes/source")(app);
require("./api/routes/specialdiscounts")(app);
require("./api/routes/states")(app);
require("./api/routes/statistics")(app);
require("./api/routes/stocks")(app);
require("./api/routes/tags")(app);
require("./api/routes/taxrate")(app);
require("./api/routes/taxrule")(app);
require("./api/routes/themes")(app);
require("./api/routes/urlrewrites")(app);
require("./api/routes/users")(app);

const PORT = process.env.PORT || 8070;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${PORT}.`);
});

const server = http.createServer(index);
server.listen(PORT);

module.exports = app;