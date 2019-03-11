//user.controller.js

var express = require ('express');
var bodyParser = require ('body-parser');


//-----------------------------------

exports.create = function (req, res) {
    console.log('create Function ...');
    console.log('body is ', req.body);
    res.send(req.body);
};
exports.login = function (req, res) {
    console.log('login Function ...');
    console.log('body is ', req.body);
    res.send(req.body);
};

exports.show = function (req, res) {
    console.log('show Function ...');
    console.log('body is ', req.body);
    res.send(req.body);
};

exports.update = function (req, res) {
    console.log('update Function ...');
    console.log('body is ', req.body);
    res.send(req.body);
};

exports.patch = function (req, res) {
    console.log('patch Function ...');
    console.log('body is ', req.body);
    res.send(req.body);
};


