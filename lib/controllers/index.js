'use strict';

var path = require('path');

exports.index = function(req, res) {
    res.render('index', {env: process.env.NODE_ENV});
};
