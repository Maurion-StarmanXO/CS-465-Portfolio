const Trip = require('../models/travlr');

const travel = async (req, res) => {
  try {
    const trips = await Trip.find();
    res.render('travel', {
      title: 'Travlr Getaways',
      trips
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  travel
};

