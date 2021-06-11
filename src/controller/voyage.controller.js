
const Voyage = require ("../services/voyage.service");

// Create and Save a new Voyage
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create Voyage
    const voyage = new Voyage({
      dateDepart: req.body.dateDepart,
        dateArrive: req.body.dateArrive,
        nom: req.body.nom,
        capacite: req.body.capacite,
        stat:req.body.stat
    });
  
    // Save Voyage in the database
    Voyage.create(voyage, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Trip."
        });
      else res.send(data);
    });
  };
  