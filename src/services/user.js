
const { User } = require('./../configs/database');

module.exports = {
  /**
   * Create user
   */
  create: params => User.create(params),

  /**
   * Get one user by attributes
   */
  getOneByAttribute: params => User.findOne(params),

  /**
   * Get one user by attributes
   */
  getById: id => User.findById(id),
};
