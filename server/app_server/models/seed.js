const mongoose = require('mongoose');
const Trip = require('./travlr');

mongoose.connect('mongodb://127.0.0.1/travlr');

const trips = [
  {
    name: 'Gale Reef',
    image: 'reef1.jpg',
    description: 'Gale Reef Sed et augue lorem. In sit amet placerat arcu.'
  },
  {
    name: "Dawson's Reef",
    image: 'reef2.jpg',
    description: "Dawson's Reef Integer magna leo, posuere et dignissim vitae."
  },
  {
    name: "Claire's Reef",
    image: 'reef3.jpg',
    description: "Claire's Reef Donec sed felis risus. Nulla facilisi."
  }
];

Trip.insertMany(trips)
  .then(() => {
    console.log('Trips seeded');
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
    mongoose.connection.close();
  });
