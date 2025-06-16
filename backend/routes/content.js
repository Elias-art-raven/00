const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { upload, list } = require('../controllers/contentController');
const auth = require('../middleware/auth');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.join(__dirname, '..', 'uploads'));
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const uploadMiddleware = multer({ storage });

router.post('/upload', auth, uploadMiddleware.single('file'), upload);
router.get('/', auth, list);

module.exports = router;
