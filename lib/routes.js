'use strict';

var index = require('./controllers/index');
var session = require('./controllers/session');
var users = require('./controllers/users');

var middleware = require('./middleware');

/**
 * Application routes
 */
module.exports = function(app) {

  // All undefined api routes should return a 404
  app.get('/api/*', function(req, res) {
    res.send(404);
  });

  app.get('/login*', session.login);
  app.get('/create*', users.create);

  app.get('/*', index.index);
};
