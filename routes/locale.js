var express = require('express');
var locale = require('locale');
var supported = ["en", "zh"];

var app = express();

app.use(locale(supported));

function parse(req)
{
	return req.headers["accept-language"] + "\n" + req.locale;
};

exports.parse = parse;

