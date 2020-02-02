const express = require('express');
const router = express.Router();
const guard = require('express-jwt-permissions')();
const maps = require('../controllers/map.controller');

// routes
//router.all('*', guard.check('status'));
router.get('/:mapAuthor', maps.get_map_by_author);
router.post('/:mapAuthor', maps.set_map_by_author);
router.param('mapAuthor', maps.check_map_by_author);

module.exports = router;