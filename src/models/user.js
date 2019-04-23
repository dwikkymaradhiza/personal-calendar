const mongoose = require('mongoose');
const { Schema } = require('./schemas/user');

const User = new mongoose.Schema(Schema, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('User', User);
