
const { Event } = require('./../configs/database');

module.exports = {
  /**
   * Create event
   */
  create: params => Event.create(params),

  /**
   * Get one event by attributes
   */
  getOneByAttribute: params => Event.findOne(params),

  /**
   * Get one event by attributes
   */
  getById: id => Event.findById(id),

  /**
   * Update event
   */
  update: (condition, params) => Event.findOneAndUpdate(condition, params),

  /**
   * Delete event
   */
  delete: (condition, params) => Event.deleteOne(condition, params),
};
