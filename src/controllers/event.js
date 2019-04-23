const logger = require('./../libs/logger');
const eventService = require('./../services/event');
const { httpStatus, messages, errorCodes } = require('../configs/constants');

module.exports = {
  /**
   * Get All Events
   */
  getAll: async (req, res) => {

  },

  /**
   * Get Event By ID
   */
  getById: async (req, res) => {

  },

  /**
   * Create Event
   */
  create: async (req, res) => {
    try {
      const {
        name,
        start_datetime: startDatetime,
        end_datetime: endDatetime,
        users_in_the_event: usersInTheEvent,
        location
      } = req.body;

      const event = await eventService.create({
        name,
        start_datetime: startDatetime,
        end_datetime: endDatetime,
        users_in_the_event: usersInTheEvent,
        location,
        owner: req.user._id
      });

      res.response(httpStatus.ok, {
        message: messages.ok,
        data: event
      });
    } catch (e) {
      logger.error(`[event.create]: ${JSON.stringify(e, null, 2)}`);
      res.response(httpStatus.internalServerError, {
        message: e.message,
        error: e,
        error_code: errorCodes.internalServerError
      });
    }
  },

  /**
   * Update Event
   */
  update: async (req, res) => {

  },

  /**
   * Delete Event
   */
  delete: async (req, res) => {

  },
};
