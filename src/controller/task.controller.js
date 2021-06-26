const Task = require("../services/task.service");

// Create and Save a new Personnel
exports.create = (req, res) => {
    console.log("heeeeeeeeelloooooooooo")
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  
  // Create Personnel
  const task = new Task({
    title: req.body.title,
    description: req.body.description,
    id_pers: req.body.id_pers,
    
  });
console.log(task);
 

      // Set the hashed password and save the model
      Task.create(task, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Task.",
          });
        else res.send(data);
      });
     
    };
 


exports.findById = (req, res) => {
  Task.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: "didn't find task with id ${req.params.id}.",
        });
        return;
      } else {
        res.status(500).send({
          message: "Error retrieving task with id " + req.params.id,
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
exports.findByPers = function (req, res) {
  Task.findByPers(req.params.id_pers, function (err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};




//retreive All personnel
exports.findAll = function (req, res) {
  Task.findAll(function (err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

//delete Personnel by cin
exports.delete = function (req, res) {
  Task.delete(req.params.id, function (err, task) {
    if (err) res.send(err);
    res.json(task);
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

  const task = new Task({
    id: req.body.id,
    title: req.body.title,
    description: req.body.description,
    id_pers: req.body.id_pers,
    
  });

  Task.update(task, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: "Not found task with id " + task.id,
        });
        return;
      } else {
        res.status(500).send({
          message: "Error updating task with id " + task.id,
        });
        return;
      }
    } else res.send(data);
    return;
  });
};

