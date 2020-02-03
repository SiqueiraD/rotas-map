const express = require('express');
const router = express.Router();
const guard = require('express-jwt-permissions')();
const maps = require('../controllers/map.controller');

// routes
//router.all('*', guard.check('status'));
router.get('/', maps.get_map_by_author);
router.get('/:id', maps.get_map_by_id)
router.post('/', maps.set_map_by_author);

module.exports = router;