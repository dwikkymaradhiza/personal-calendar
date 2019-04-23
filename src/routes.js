const express = require('express');
const passport = require('./middlewares/passport_jwt');

const router = express.Router();

// Controllers
const authController = require('../src/controllers/auth');
const eventController = require('../src/controllers/event');

// Validators
const authValidator = require('../src/validators/auth');
const eventValidator = require('../src/validators/event');

//---------------------------
//        Route List        |
//---------------------------

// Auth
router.post('/auth/login', authValidator.login(), authController.login);
router.post('/auth/register', authValidator.register(), authController.register);
router.post('/auth/refresh', authValidator.refresh(), authController.refresh);

// Event
router.use('/events', passport.authenticate);
router.get('/events', eventController.getAll);
router.get('/events/:id', eventController.getById);
router.post('/events', eventValidator.create(), eventController.create);
router.put('/events/:id', eventValidator.update(), eventController.update);
router.delete('/events/:id', eventController.delete);

module.exports = router;
