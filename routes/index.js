var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res) {
//  res.render('index', { title: 'Express' });
// });

router.get('*', function(req, res, next)
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

router.get('/setlocale/:lang', function(req, res)
{	
	res.cookie('locale', req.params.lang);
	res.redirect('back');
});

router.get('/', function(req, res)
{
    res.render('index');
});

router.get('/about', function(req, res)
{
    res.render('about');
});

router.get('/recordings', function(req, res)
{
    res.render('recordings');
});

router.get('/blog', function(req, res)
{
    res.render('blog');
});

router.get('/contact', function(req, res)
{
    res.render('contact');
});

module.exports = router;
