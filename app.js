const config = require('./config');
const express = require('express');
const bodyParser = require('body-parser');
const docs = require('./docs');
const formatter = require('./src/middlewares/formatter');
const routes = require('./src/routes');
const { httpStatus, messages, errorCodes } = require('./src/configs/constants');

/* eslint-disable no-console */

const app = express();
const port = config.get('PORT');

app.use(docs());
app.use(formatter());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/', routes);

// catch 404 and forward to error handler
app.use((req, res) => res.response(httpStatus.notFound, {
  message: messages.notFound,
  error_code: errorCodes.notFound
}));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = app;
