module.exports = {
  httpStatus: {
    ok: 200,
    badRequest: 400,
    notFound: 404,
    unauthorized: 401,
    forbidden: 403,
    internalServerError: 500,
  },
  errorCodes: {
    badRequest: '0001',
    notFound: '0002',
    internalServerError: '0003',
    invalidUserPassword: '0004',
    expiredAuthToken: '0005',
    invalidAuthToken: '0006',
    forbiddenAccess: '0007',
    missingAuthToken: '0008',
  },
  messages: {
    ok: 'OK',
    badRequest: 'Invalid Input',
    notFound: 'Not Found',
    invalidUserPassword: 'Invalid User/Password',
    expiredAuthToken: 'Token Expired',
    invalidAuthToken: 'Invalid Token',
    forbiddenAccess: 'Forbidden Access',
    missingAuthToken: 'Missing Auth Token'
  }
};
