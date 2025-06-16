const Content = require('../models/Content');
const path = require('path');

exports.upload = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }
  try {
    const content = new Content({
      user: req.user.id,
      name: req.file.originalname,
      type: req.file.mimetype,
      path: req.file.filename,
      tags: req.body.tags ? req.body.tags.split(',') : [],
      category: req.body.category,
    });
    await content.save();
    res.json(content);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.list = async (req, res) => {
  try {
    const contents = await Content.find({ user: req.user.id });
    res.json(contents);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
