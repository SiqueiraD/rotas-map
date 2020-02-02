require('rootpath')();
const express = require('express');
const router = express.Router();
const guard = require('express-jwt-permissions')();
const userCntrl = require('api/controllers/user.controller')

// routes
router.post('/authenticate', userCntrl.authenticate);
router.post('/register', userCntrl.register);
router.get('/', userCntrl.getAll);
router.get('/current', userCntrl.getCurrent);
router.get('/:id', userCntrl.getById);
router.put('/:id', userCntrl.update);
router.delete('/:id', userCntrl._delete);

module.exports = router;