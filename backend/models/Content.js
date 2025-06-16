const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  path: { type: String, required: true },
  tags: [String],
  category: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Content', ContentSchema);
