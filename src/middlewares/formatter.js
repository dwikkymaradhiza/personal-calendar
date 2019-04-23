module.exports = () => (req, res, next) => {
  res.response = (status, content, format) => {
    switch (format) {
      default:
      case 'json':
        res.status(status).json({
          status,
          message: content.message,
          data: content.data,
          error_code: content.error_code,
          error: content.error
        });
        break;
    }
  };

  next();
};
