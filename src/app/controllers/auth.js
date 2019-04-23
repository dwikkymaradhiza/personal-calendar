
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userService = require('./../services/user');
const logger = require('../../libs/logger');
const config = require('../../../config');
const { httpStatus, messages, errorCodes } = require('./../../configs/constants');

module.exports = {
  /**
   * Sign In
   */
  login: async (req, res) => {
    try {
      const { username, password } = req.body;

      const user = await userService.getOneByAttribute({ username });
      // If user not exist
      if (!user) {
        return res.response(httpStatus.badRequest, {
          message: messages.invalidUserPassword,
          error_code: errorCodes.invalidUserPassword
        });
      }

      // If password didn't match
      if (!bcrypt.compareSync(password, user.password)) {
        return res.response(httpStatus.badRequest, {
          message: messages.invalidUserPassword,
          error_code: errorCodes.invalidUserPassword
        });
      }

      // Remove password from response
      user.password = undefined;

      const payload = user.toObject();
      const identityToken = jwt.sign(payload, config.get('JWT_SECRET'), { expiresIn: config.get('JWT_EXPIRED') });

      return res.response(httpStatus.ok, {
        message: messages.ok,
        data: {
          user: payload,
          token: identityToken
        },
      });
    } catch (e) {
      logger.error(`[auth.login]: ${JSON.stringify(e, null, 2)}`);
      return res.response(httpStatus.internalServerError, {
        message: e.message,
        error: e,
        error_code: errorCodes.internalServerError
      });
    }
  },

  /**
   * Sign Up
   */
  register: async (req, res) => {
    try {
      const {
        username,
        password,
        email,
        first_name: firstName,
        last_name: lastName
      } = req.body;

      // Hash Password
      const hashedPassword = bcrypt.hashSync(password, config.get('BCRYPT_HASH_ROUND'));

      // Register User
      const user = await userService.create({
        username,
        email,
        password: hashedPassword,
        first_name: firstName,
        last_name: lastName
      });

      // Remove password from response
      user.password = undefined;
      const payload = user.toObject();
      const identityToken = jwt.sign(payload, config.get('JWT_SECRET'), { expiresIn: config.get('JWT_EXPIRED') });

      res.response(httpStatus.ok, {
        message: messages.ok,
        data: {
          user: payload,
          token: identityToken
        }
      });
    } catch (e) {
      logger.error(`[auth.register]: ${JSON.stringify(e, null, 2)}`);
      res.response(httpStatus.internalServerError, {
        message: e.message,
        error: e,
        error_code: errorCodes.internalServerError
      });
    }
  },
};
