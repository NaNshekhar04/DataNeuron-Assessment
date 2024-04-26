const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/addUser', userController.addUser);
router.put('/updateUser', userController.updateUser);

module.exports = router;
