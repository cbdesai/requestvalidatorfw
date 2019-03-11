//user.routes.js
var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser');

var userController = require( __dirname + '/user.controller');

//const validate = require(__dirname + '/user.validation');
 
/*
router.post('/register', validate.create, userController.create);
router.post('/', validate.login, userController.login);
router.get('/:id', validate.show, userController.show);
router.put('/:id', validate.update, userController.update);
router.patch('/:id', validate.patch, userController.patch);
*/


router.post('/register',  userController.create);
router.post('/',  userController.login);
router.get('/:id', userController.show);
router.put('/:id',  userController.update);
router.patch('/:id', userController.patch);
 

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

// define the home page route
router.get('/', function (req, res) {
  res.send('User home page')
})

// define the about route
router.get('/about', function (req, res) {
  res.send('About users')
})

module.exports = router;
