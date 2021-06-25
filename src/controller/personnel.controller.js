const Personnel = require("../services/personnel.service");
const bcrypt = require("bcryptjs");

// Create and Save a new Personnel
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  // Save Personnel in the database
  /*function cryptPassword(password)
      {
      bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, (err, hash) => {
        if(err) throw err;
        return hash;
    })
  });}*/

  // Create Personnel
  const personnel = new Personnel({
    cin: req.body.cin,
    nom: req.body.nom,
    prenom: req.body.prenom,
    sexe: req.body.sexe,
    password: req.body.password,
    telephone: req.body.telephone,
    id_role: req.body.id_role,
  });

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(personnel.password, salt, (err, hash) => {
      if (err) throw err;

      // Set the hashed password and save the model
      personnel.password = hash;
      Personnel.create(personnel, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Trip.",
          });
        else res.send(data);
      });
      //.then((user) => res.json(user))
      //.catch(error => console.log(error));
    });
  });
};

//retreive Personnel by cin

exports.findByCin = (req, res) => {
  console.log("hehehehehheheheheheeheheheheheheheheeheeh");
  Personnel.findByCin(req.params.cin, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: "didn't find employee with cin ${req.params.voyageId}.",
        });
        return;
      } else {
        res.status(500).send({
          message: "Error retrieving employee with cin " + req.params.cin,
        });
        return;
      }
    } else {
      res.send(data);
      console.log(data);
    }
    return;
  });
};

//retreive Personnel by Name
exports.findByName = function (req, res) {
  Personnel.findByName(req.params.nom, function (err, personnel) {
    if (err) res.send(err);
    res.json(personnel);
  });
};

exports.login = function (req, res) {
  Personnel.findByCin(
    req.body.cin,
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: "Couldn't find employee with cin " + req.body.cin,
          });
          return;
        } else {
          res.status(500).send({
            message: "Error retrieving employee with cin " + req.body.cin,
          });
          return;
        }
      } else {
        res.send(data);
        console.log(data);
      }
      return;
    },
    () => {
      bcrypt.compare(req.body.password, res.password, function (err, res1) {
        return res1 == true;
      });
    }
  );
};

//retreive Personnel by fonction
exports.findByRole = function (req, res) {
  Personnel.findByRole(req.params.role, function (err, personnel) {
    if (err) res.send(err);
    res.json(personnel);
  });
};

//retreive Personnel by fonction
exports.findByPrenom = function (req, res) {
  Personnel.findByPrenom(req.params.prenom, function (err, personnel) {
    if (err) res.send(err);
    res.json(personnel);
  });
};

exports.getNumber= function (req, res) {
  Personnel.getNumber(function (err,personnel) {
    if (err) res.send(err);
    res.json(personnel);
  });
};

//retreive All personnel
exports.findAll = function (req, res) {
  Personnel.findAll(function (err, personnel) {
    if (err) res.send(err);
    res.json(personnel);
  });
};

//delete Personnel by cin
exports.delete = function (req, res) {
  Personnel.delete(req.params.cin, function (err, personnel) {
    if (err) res.send(err);
    res.json(personnel);
  });
};

exports.update = (req, res) => {
  console.log("HOHOHOHOHOOHOHOHOHOHHOHHHHHHHHHHHHHHHHHHHH");
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const personnel = new Personnel({
    cin: req.body.cin,
    nom: req.body.nom,
    prenom: req.body.prenom,
    id_role: req.body.id_role,
    sexe: req.body.sexe,
    telephone: req.body.telephone,
    password: req.body.password,
  });
  Personnel.update(personnel, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: "Not found personnel with id " + personnel.cin,
        });
        return;
      } else {
        res.status(500).send({
          message: "Error updating personnel with id " + personnel.cin,
        });
        return;
      }
    } else res.send(data);
    return;
  });
};

exports.AffecterRole = function (req, res) {
  Personnel.affecterRole(
    req.params.cin,
    req.params.id_role,
    function (err, personnel) {
      if (err) res.send(err);
      res.json(personnel);
    }
  );
};
