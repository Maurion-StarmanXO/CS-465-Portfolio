const mongoose = require('mongoose');
const Trip = require('./travlr');
const trips = require('../../data/trips.json');

mongoose.connect('mongodb://127.0.0.1/travlr');

const seedDB = async () => {
  await Trip.deleteMany({});
  await Trip.insertMany(trips);
  console.log('Database seeded');
  mongoose.connection.close();
};

seedDB();
