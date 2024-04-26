const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/addUser', userController.addUser);
router.put('/updateUser', userController.updateUser);
router.get('/getLatestUser', userController.getLatestUser);

module.exports = router;
