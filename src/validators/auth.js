const joi = require('joi');
const { httpStatus, errorCodes, messages } = require('../configs/constants');

module.exports = {
  login: () => {
    const schema = {
      username: joi.required(),
      password: joi.required()
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

  register: () => {
    const schema = {
      username: joi.required(),
      password: joi.required(),
      first_name: joi.required(),
      last_name: joi.required(),
      email: joi.required(),
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

  refresh: () => {
    const schema = {
      refresh_token: joi.required(),
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
