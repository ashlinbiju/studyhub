const express = require('express');
const router = express.Router();
const { uploadNote, getNotes } = require('../controllers/note.controller');
const upload = require('../middleware/upload.middleware');

router.post('/upload', upload.single('file'), uploadNote);
router.get('/', getNotes);

module.exports = router;