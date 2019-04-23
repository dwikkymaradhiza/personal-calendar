const request = require('request-promise');
const config = require('./../config');
const userPushTokenModel = require('../models/user_push_token');
const logger = require('./logger');

module.exports = {
  getAuthToken: async () => {
    try {
      const basicAuthToken = Buffer.from(`${config.get('COGNITO_API_BASIC_AUTH_USER')}:${config.get('COGNITO_API_BASIC_AUTH_PASS')}`).toString('base64');
      const options = {
        url: `${config.get('COGNITO_API_HOST')}/token`,
        method: 'GET',
        headers: {
          Authorization: `Basic ${basicAuthToken}`
        }
      };

      return await request(options);
    } catch (e) {
      logger.error(`ERROR COGNITO : ${JSON.stringify(e.error)}`);
      return false;
    }
  },

  setMsisdn: (number) => {
    if (!number) {
      return null;
    }

    let msisdn = number.replace('+', '');
    if (msisdn.charAt(0) === '0') {
      msisdn = `62${msisdn.slice(1)}`;
    }

    return msisdn;
  },

  setMsisdnToZero: (number) => {
    if (!number) {
      return null;
    }

    let msisdn = number.replace('+', '');
    if (msisdn.charAt(0) === '6' && msisdn.charAt(1) === '2') {
      msisdn = `0${msisdn.slice(2)}`;
    }

    return msisdn;
  },
  getRandomNumber: () => Math.floor(1000 + (Math.random() * 9000)),
  /* eslint camelcase: off  */
  pushnotif: (msisdn, title, body, webpush_icon, android_icon, color, url) => {
    userPushTokenModel.findOne({ where: { msisdn } })
      .then((usertoken) => {
        if (usertoken !== null) {
          // send notif to service push notif
          const dataNotif = {
            token: usertoken.push_token,
            title,
            body,
            webpush_icon,
            android_icon,
            color,
            url
          };
          logger.info(`REQUEST - NOTIF FROM APP TO SERVICE PUSH NOTIF : ${JSON.stringify(dataNotif, null, 2)}`);
          // fire and forget method
          request.post({
            headers: {
              'content-type': 'application/json'
            },
            url: `${config.get('SERVICE_PUSH_NOTIFICATION')}/notif/single`,
            json: dataNotif
          });
        }
      });
  }
};

