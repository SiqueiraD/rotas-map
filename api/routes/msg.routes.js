'use strict';
const express = require('express');
const router = express.Router();
const guard = require('express-jwt-permissions')()
const messages = require('../controllers/msg.controller');

router.all('/*', (guard.check('status')));

router.get('/messages', messages.list_all_messages);
router.post('/messages', messages.create_a_message);

router.get('/messages/:msgId', messages.read_a_message);
router.put('/messages/:msgId', messages.update_a_message);
router.delete('/messages/:msgId', messages.delete_a_message);

router.get('/messages/title/:title', messages.search_title_messages);

module.exports = router;