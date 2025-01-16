const Note = require('../models/note.model');

const uploadNote = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'Please upload a file' });
    }

    const note = new Note({
      title: req.body.title,
      description: req.body.description,
      fileUrl: `/uploads/${req.file.filename}`,
      fileName: req.file.originalname
    });

    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  uploadNote,
  getNotes
};
