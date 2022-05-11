const middleware = {}

middleware['admin'] = require('..\\client\\middleware\\admin.js')
middleware['admin'] = middleware['admin'].default || middleware['admin']

middleware['auth'] = require('..\\client\\middleware\\auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['authenticated'] = require('..\\client\\middleware\\authenticated.js')
middleware['authenticated'] = middleware['authenticated'].default || middleware['authenticated']

middleware['feathers'] = require('..\\client\\middleware\\feathers.js')
middleware['feathers'] = middleware['feathers'].default || middleware['feathers']

middleware['guest'] = require('..\\client\\middleware\\guest.js')
middleware['guest'] = middleware['guest'].default || middleware['guest']

middleware['notAuthenticated'] = require('..\\client\\middleware\\notAuthenticated.js')
middleware['notAuthenticated'] = middleware['notAuthenticated'].default || middleware['notAuthenticated']

middleware['vue-kindergarten'] = require('..\\client\\middleware\\vue-kindergarten.js')
middleware['vue-kindergarten'] = middleware['vue-kindergarten'].default || middleware['vue-kindergarten']

export default middleware
