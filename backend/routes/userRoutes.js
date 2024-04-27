const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const apiTimeExecuter = require('../middlewares/apiTimeExecuter');

router.post('/addUser', apiTimeExecuter, userController.addUser);
router.put('/updateUser',apiTimeExecuter, userController.updateUser);
router.get('/getLatestUser',apiTimeExecuter, userController.getLatestUser);

module.exports = router;
