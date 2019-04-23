const logger = require('./../../libs/logger');
const eventService = require('./../services/event');
const { httpStatus, messages, errorCodes } = require('../../configs/constants');

module.exports = {
  /**
   * Get All Events
   */
  getAll: async (req, res) => {
    try {
      const events = await eventService.getAll({
        $or: [
          { owner: req.user._id },
          { users_in_the_event: { $in: [req.user._id] } }
        ]
      });

      res.response(httpStatus.ok, {
        message: messages.ok,
        data: events
      });
    } catch (e) {
      logger.error(`[event.getAll]: ${JSON.stringify(e, null, 2)}`);
      res.response(httpStatus.internalServerError, {
        message: e.message,
        error: e,
        error_code: errorCodes.internalServerError
      });
    }
  },

  /**
   * Get Event By ID
   */
  getById: async (req, res) => {
    try {
      const event = await eventService.getById(req.params.id);
      if (!event) {
        return res.response(httpStatus.notFound, {
          message: messages.notFound,
          error_code: errorCodes.notFound
        });
      }

      if (event.owner !== req.user._id && !event.users_in_the_event.includes(req.user._id)) {
        return res.response(httpStatus.forbidden, {
          message: messages.forbiddenAccess,
          error_code: errorCodes.forbiddenAccess
        });
      }

      return res.response(httpStatus.ok, {
        message: messages.ok,
        data: event
      });
    } catch (e) {
      logger.error(`[event.getById]: ${JSON.stringify(e, null, 2)}`);
      return res.response(httpStatus.internalServerError, {
        message: e.message,
        error: e,
        error_code: errorCodes.internalServerError
      });
    }
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
    try {
      const event = await eventService.getById(req.params.id);
      if (!event) {
        return res.response(httpStatus.notFound, {
          message: messages.notFound,
          error_code: errorCodes.notFound
        });
      }

      if (event.owner !== req.user._id) {
        return res.response(httpStatus.forbidden, {
          message: messages.forbiddenAccess,
          error_code: errorCodes.forbiddenAccess
        });
      }

      const {
        name,
        start_datetime: startDatetime,
        end_datetime: endDatetime,
        users_in_the_event: usersInTheEvent,
        location
      } = req.body;

      const updated = await eventService.update({
        _id: req.params.id,
        owner: req.user._id
      }, {
        name,
        start_datetime: startDatetime,
        end_datetime: endDatetime,
        users_in_the_event: usersInTheEvent,
        location,
      });

      return res.response(httpStatus.ok, {
        message: messages.ok,
        data: updated
      });
    } catch (e) {
      logger.error(`[event.update]: ${JSON.stringify(e, null, 2)}`);
      return res.response(httpStatus.internalServerError, {
        message: e.message,
        error: e,
        error_code: errorCodes.internalServerError
      });
    }
  },

  /**
   * Delete Event
   */
  delete: async (req, res) => {
    try {
      const event = await eventService.getById(req.params.id);
      if (!event) {
        return res.response(httpStatus.notFound, {
          message: messages.notFound,
          error_code: errorCodes.notFound
        });
      }

      if (event.owner !== req.user._id) {
        return res.response(httpStatus.forbidden, {
          message: messages.forbiddenAccess,
          error_code: errorCodes.forbiddenAccess
        });
      }

      const deleted = await eventService.delete({
        _id: req.params.id,
        owner: req.user._id
      });

      return res.response(httpStatus.ok, {
        message: messages.ok,
        data: deleted
      });
    } catch (e) {
      logger.error(`[event.delete]: ${JSON.stringify(e, null, 2)}`);
      return res.response(httpStatus.internalServerError, {
        message: e.message,
        error: e,
        error_code: errorCodes.internalServerError
      });
    }
  },
};
