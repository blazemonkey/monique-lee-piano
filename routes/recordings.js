module.exports = function() 
{
	var express = require('express');
	var app = express();

	app.get('*', function(req, res, next)
	{
		path = '/recordings';
		res.locals.path = path;
		next();
	});

	app.get('/', function(req, res)
	{
	    res.render('recordings');
	});

	app.get('/compositions', function(req, res)
	{
	    res.render('recordings/compositions');
	});

	return app;
}();