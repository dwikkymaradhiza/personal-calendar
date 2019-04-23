const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const { Schema } = require('./schemas/event');

const Event = new mongoose.Schema(Schema, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

Event.plugin(mongoosePaginate);

module.exports = mongoose.model('Event', Event);
