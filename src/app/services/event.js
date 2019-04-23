
const { Event, User } = require('./../../configs/database');

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
   * Get all events
   */
  getAll: (condition, page, limit) => Event.paginate(condition, {
    page: page || 1,
    limit: limit || 10,
    populate: [{
      path: 'users_in_the_event',
      select: ['first_name', 'last_name', 'email'],
      model: User,
    }, {
      path: 'owner',
      select: ['first_name', 'last_name', 'email'],
      model: User,
    }]
  }),

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
  delete: condition => Event.deleteOne(condition),
};
