const Trip = require('../../app_server/models/travlr');

// GET /api/trips
const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find().sort({ start: 1 });
    res.status(200).json(trips);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch trips', error: err.message });
  }
};

// GET /api/trips/:tripCode
const tripsFindByCode = async (req, res) => {
  try {
    const trip = await Trip.findOne({ code: req.params.tripCode });
    if (!trip) return res.status(404).json({ message: 'Trip not found' });
    res.status(200).json(trip);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch trip', error: err.message });
  }
};

// POST /api/trips
const tripsAddTrip = async (req, res) => {
  try {
    const trip = await Trip.create(req.body);
    res.status(201).json(trip);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create trip', error: err.message });
  }
};

// PUT /api/trips/:tripCode
const tripsUpdateTrip = async (req, res) => {
  try {
    const trip = await Trip.findOneAndUpdate(
      { code: req.params.tripCode },
      req.body,
      { new: true, runValidators: true }
    );
    if (!trip) return res.status(404).json({ message: 'Trip not found' });
    res.status(200).json(trip);
  } catch (err) {
    res.status(400).json({ message: 'Failed to update trip', error: err.message });
  }
};

// DELETE /api/trips/:tripCode
const tripsDeleteTrip = async (req, res) => {
  try {
    const result = await Trip.deleteOne({ code: req.params.tripCode });
    if (result.deletedCount === 0) return res.status(404).json({ message: 'Trip not found' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete trip', error: err.message });
  }
};

module.exports = {
  tripsList,
  tripsFindByCode,
  tripsAddTrip,
  tripsUpdateTrip,
  tripsDeleteTrip
};
