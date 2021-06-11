
const Personnel = require ("../services/personnel.service");

// Create and Save a new Personnel
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create Personnel
    const personnel = new Personnel({
        cin: req.body.cin,
        nom: req.body.nom,
        prenom: req.body.prenom,
        sexe: req.body.sexe,
        fonction:req.body.fonction,
        password:req.body.password,
        telephone:req.body.telephone
    });
  
    // Save Personnel in the database
    Personnel.create(personnel, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Trip."
        });
      else res.send(data);
    });
  };



  //retreive Personnel by cin
  exports.findByCin = function(req, res) {
    Personnel.findByCin(req.params.cin, function(err, personnel) {
      if (err)
      res.send(err);
      res.json(personnel);
    });
    };
    
    
    //retreive Personnel by Name
      exports.findByName = function(req, res) {
        Personnel.findByName(req.params.nom, function(err, personnel) {
      if (err)
      res.send(err);
      res.json(personnel);
    });
    };
    
    //retreive Personnel by fonction
      exports.findByFonction = function(req, res) {
        Personnel.findByFonction(req.params.fonction, function(err, personnel) {
      if (err)
      res.send(err);
      res.json(personnel);
    });
    };

     //retreive Personnel by fonction
     exports.findByPrenom = function(req, res) {
        Personnel.findByPrenom(req.params.prenom, function(err, personnel) {
          if (err)
          res.send(err);
          res.json(personnel);
        });
        };
    
    //retreive All personnel
      exports.findAll = function(req, res) {
        Personnel.findAll(function(err, personnel) {
      if (err)
      res.send(err);
      res.json(personnel);
    });
    };
    
    
    //delete Personnel by cin
      exports.delete = function(req, res) {
        Personnel.delete(req.params.cin,function(err, personnel) {
      if (err)
      res.send(err);
      res.json(personnel);
    });
    };
       
           
    
    //update Personnel
    exports.update = function(req, res) {    
    
        const personnel = new Personnel({    
            cin: req.body.cin,    
            nom: req.body.nom,
            prenom: req.body.prenom,
            fonction: req.body.fonction,
            sexe: req.body.sexe,
            telephone: req.body.telephone,
            password:req.body.password        
        });
          
        Personnel.update(personnel,function(err, personnel) {
      if (err)
      res.send(err);
      res.json(personnel);
    });
    };




  