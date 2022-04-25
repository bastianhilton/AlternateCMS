const middleware = {}

middleware['isAuthenticated'] = require('..\\middleware\\isAuthenticated.js')
middleware['isAuthenticated'] = middleware['isAuthenticated'].default || middleware['isAuthenticated']

export default middleware
