const router = require('express').Router();
const user = require(__dirname + '/user.controller');
const validate = require(__dirname + '/user.validation');
 
router.post('/user/register', validate.create, user.create);
router.post('/user', validate.login, user.login);
router.get('/user/:id', validate.show, user.show);
router.put('/user/:id', validate.update, user.update);
router.patch('/user/:id', validate.patch, user.patch);
 
module.exports = router;