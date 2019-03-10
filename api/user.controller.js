var express = require ('express');
var bodyParser = require ('body-parser');


//-----------------------------------

exports.create = function (req, res) {
  var collectionName = req.params.collectionName ;
    if (errObj)
      res.send(errObj);
    res.json(collectionName);
};
exports.login = function (req, res) {
  var collectionName = req.params.collectionName ;
    if (errObj)
      res.send(errObj);
    res.json(collectionName);
};

exports.show = function (req, res) {
  var collectionName = req.params.collectionName ;
    if (errObj)
      res.send(errObj);
    res.json(collectionName);
};

exports.update = function (req, res) {
  var collectionName = req.params.collectionName ;
    if (errObj)
      res.send(errObj);
    res.json(collectionName);
};

exports.patch = function (req, res) {
  var collectionName = req.params.collectionName ;
    if (errObj)
      res.send(errObj);
    res.json(collectionName);
};



