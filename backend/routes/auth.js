const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.post('/register', register);
router.post('/login', login);

module.exports = router;
