const express = require('express');
const router = express.Router();

// IMPORTANT: express-jwt v7+ exports expressjwt
const { expressjwt: jwt } = require('express-jwt');

const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');

const auth = jwt({
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256'],
  requestProperty: 'payload'
});

// PUBLIC
router.get('/trips', tripsController.tripsList);
router.get('/trips/:tripCode', tripsController.tripsFindByCode);

// PROTECTED (admin CRUD)
router.post('/trips', auth, tripsController.tripsAddTrip);
router.put('/trips/:tripCode', auth, tripsController.tripsUpdateTrip);
router.delete('/trips/:tripCode', auth, tripsController.tripsDeleteTrip);

// AUTH
router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
