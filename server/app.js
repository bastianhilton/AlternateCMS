const path = require('path');
const protect = require('@risingstack/protect')
const redis = require('redis')
const createError = require('http-errors');
const cookieParser = require('cookie-parser')
const csrf = require('csurf')
const express = require('express')

const bodyParser = require('body-parser')
const multer  = require('multer')
const upload = multer({ dest: '../client/media/' })
const cors = require('cors')
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
const csrfProtection = csrf({ cookie: true })
const parseForm = bodyParser.urlencoded({ extended: false })
const client = redis.createClient()

app.use(cookieParser())

app.get('/form', csrfProtection, function (req, res) {
  res.render('send', { csrfToken: req.csrfToken() })
})

app.post('/process', parseForm, csrfProtection, function (req, res) {
  res.send('data is being processed')
})
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

app.use(cors())

app.get('/products/:id', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
  })
  
app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
  })

app.post('../client/media/', upload.array('files', 12), function (req, res, next) {
  })

  res.status(err.status || 500);
  res.render('error');
});

app.use(bodyParser.json({
  extended: false
}))

app.use(protect.express.sqlInjection({
  body: true,
  loggerFunction: console.error
}))

app.use(protect.express.xss({
  body: true,
  loggerFunction: console.error
}))

app.use(protect.express.rateLimiter({
  db: client,
  id: (request) => request.connection.remoteAddress
}))

app.get('/', (request, response) => {
  response.send('hello protect!')
})

app.post('/login', protect.express.rateLimiter({
  db: client,
  id: (request) => request.body.email,
  // max 10 tries per 2 minutes
  max: 10,
  duration: 120000
}), (request, response) => {
  response.send('wuut logged in')
})

module.exports = app;
