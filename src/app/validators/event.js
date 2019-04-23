const joi = require('joi');
const { httpStatus, errorCodes, messages } = require('../../configs/constants');

module.exports = {
  create: () => {
    const schema = {
      name: joi.required(),
      start_datetime: joi.required(),
      end_datetime: joi.required(),
      users_in_the_event: joi.array().required(),
      location: joi.array().optional()
    };

    return async (req, res, next) => {
      try {
        const { body } = req;
        await joi.validate(body, schema);
        next();
      } catch (err) {
        res.response(httpStatus.badRequest, {
          message: messages.message,
          error_code: errorCodes.badRequest,
          error: err.details
        });
      }
    };
  },

  update: () => {
    const schema = {
      name: joi.required(),
      start_datetime: joi.required(),
      end_datetime: joi.required(),
      users_in_the_event: joi.array().required(),
      location: joi.array().optional()
    };

    return async (req, res, next) => {
      try {
        const { body } = req;
        await joi.validate(body, schema);
        next();
      } catch (err) {
        res.response(httpStatus.badRequest, {
          message: messages.message,
          error_code: errorCodes.badRequest,
          error: err.details
        });
      }
    };
  },
};
