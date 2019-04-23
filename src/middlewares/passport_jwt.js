const passport = require('passport');
const passportJWT = require('passport-jwt');
const config = require('../../config');
const { httpStatus, errorCodes, messages } = require('../configs/constants');
const userService = require('../services/user');

const { ExtractJwt, Strategy } = passportJWT;
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.get('JWT_SECRET')
};

const strategy = new Strategy(jwtOptions, (jwtPayload, next) => {
  userService.getById(jwtPayload._id).then((result) => {
    if (result === null) {
      next(null, false);
    } else {
      next(null, {
        _id: jwtPayload._id,
        first_name: jwtPayload.first_name,
        last_name: jwtPayload.last_name,
        username: jwtPayload.username,
        email: jwtPayload.email,
      });
    }
  });
});

passport.use(strategy);

module.exports = {
  authenticate: (req, res, next) => passport.authenticate('jwt', { session: false }, (error, user, info) => {
    // Error exist
    if (info) {
      // Return custom error token expired
      if (info.name === 'TokenExpiredError') {
        return res.response(httpStatus.unauthorized, {
          message: messages.expiredAuthToken,
          code: errorCodes.expiredAuthToken
        });
      }

      // Invalid token
      return res.response(httpStatus.unauthorized, {
        message: messages.invalidAuthToken,
        code: errorCodes.invalidAuthToken
      });
    }

    req.user = user;
    return next();
  })(req, res, next),
  passport
};
