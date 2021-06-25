const Voyage = require ("../services/voyage.service");
const Voyage1 = require("../controller/Voyage1");
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
  
exports.getAll = (req,res)=>{
  Voyage.getAll((err,data)=>{
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Trip."
      });
    else res.send(data);
  });
}

// Find a single voyage with a voyageId
exports.findOne = (req, res) => {
  console.log("hehehehehheheheheheeheheheheheheheheeheeh");
  Voyage.findById(req.params.voyageId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found voyage with id ${req.params.voyageId}.`
          });
          return;
        } else {
          res.status(500).send({
            message: "Error retrieving voyage with id " + req.params.voyageId
          }); 
          return;
        }
      } else res.send(data);
      return;
    });
};
/*
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  console.log("HAHAHAHAHAHAAHAHAHAHAH");

  Voyage.updateById(req.params.voyageId, new Voyage(req.body),(err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found voyage with id ${req.params.voyageId}.`
          });
          return;
        } else {
          res.status(500).send({
            message: "Error updating voyage with id " + req.params.voyageId
          });
          return;
        }
      } else res.send(data);
      return;
    }
  );
};
*/

exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  console.log("HAHAHAHAHAHAAHAHAHAHAH");
  let v = new Voyage1(req.body);
  console.log(req.body);
  Voyage.updateById(v,(err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found voyage with id ${v.id}.`
          });
          return;
        } else {
          res.status(500).send({
            message: "Error updating voyage with id " + v.id
          });
          return;
        }
      } else res.send(data);
      return;
    }
  );
};
// Delete a voyage with the specified Id 
exports.delete = (req, res) => {
 Voyage.remove(req.params.voyageId, (err, data) => {
  console.log("HIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHI");

      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found voyage with id ${req.params.voyageId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete voyage with id " + req.params.voyageId
          });
        }
      } else res.send({ message: `voyage  was deleted successfully!` });
    });
};

// Delete all
exports.deleteAll = (req, res) => {
  Voyage.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all voyages."
        });
      else res.send({ message: `All voyages were deleted successfully!` });
    });
};

exports.getNumber= function (req, res) {
  Voyage.getNumber(function (err,personnel) {
    if (err) res.send(err);
    res.json(personnel);
  });
};

