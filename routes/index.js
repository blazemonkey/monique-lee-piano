module.exports = function() 
{
	var express = require('express');
	var app = express();

	app.get('*', function(req, res, next)
	{
		var first = req.path.indexOf('/');
		var sec = req.path.indexOf('/', first + 1);
		var path = '';

		if (sec === -1)
			path = req.path;
		else
			path = req.path.substring(first, sec);

		res.locals.path = path;
		next();
	});

	app.get('/setlocale/:lang', function(req, res)
	{	
		res.cookie('locale', req.params.lang);
		res.redirect('back');
	});

	app.get('/', function(req, res)
	{
	    res.render('index');
	});

	app.get('/about', function(req, res)
	{
	    res.render('about');
	});

	app.get('/blog', function(req, res)
	{
	    res.render('blog');
	});

	app.get('/contact', function(req, res)
	{
	    res.render('contact');
	});

	app.get('/*', function(req, res)
	{
		res.render('404');
	});

	return app;

}();
