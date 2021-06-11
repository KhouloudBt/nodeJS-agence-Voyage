const Personnel = require ("./services/role.service");

// Create and Save a new Personnel
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create Personnel
    const role = new Role({
        title: req.body.title,
        description: req.body.description,
      
    });
  
    // Save Personnel in the database
    Role.create(role, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Trip."
        });
      else res.send(data);
    });
  };



  //retreive Personnel by cin
  exports.findById = function(req, res) {
    Role.findByCin(req.params.id, function(err, role) {
      if (err)
      res.send(err);
      res.json(role);
    });
    };
    
    
    //retreive Personnel by Name
      exports.findByTitle = function(req, res) {
        Role.findByName(req.params.title, function(err, role) {
      if (err)
      res.send(err);
      res.json(role);
    });
    };
    
       
    //retreive All personnel
      exports.findAll = function(req, res) {
        Role.findAll(function(err, role) {
      if (err)
      res.send(err);
      res.json(role);
    });
    };
    
    
    //delete Personnel by cin
      exports.delete = function(req, res) {
        Role.delete(req.params.id,function(err, role) {
      if (err)
      res.send(err);
      res.json(role);
    });
    };
       
           
    
    //update Personnel
    exports.update = function(req, res) {    
    
        const role = new Role({    
            title: req.body.title,    
            description: req.body.description,
                  
        });
          
        Personnel.update(role,function(err, role) {
      if (err)
      res.send(err);
      res.json(role);
    });
    };




  