const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  service: { type: String, required: true },
  preferredContactMethod: { type: String, required: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Lead', leadSchema);