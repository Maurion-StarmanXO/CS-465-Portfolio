const tripsAdd = async (req, res) => {
  try {
    const trip = await Trip.create({
      code: req.body.code,
      name: req.body.name,
      length: req.body.length,
      start: req.body.start,
      resort: req.body.resort,
      perPerson: req.body.perPerson,
      image: req.body.image,
      description: req.body.description
    });

    res.status(201).json(trip);
  } catch (err) {
    res.status(400).json(err);
  }
};
