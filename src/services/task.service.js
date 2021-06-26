
const sql = require('../../config_DB/db');

// constructor
const Task = function(task) {
    if (task.id)
  this.id = task.id;
  this.title = task.title;
  this.description = task.description;
  this.id_pers = task.id_pers;
};

Task.create = (newTask, result) => {
  console.log("creating");
     sql.query("INSERT INTO task SET ?", newTask, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created Task: ", { id: res.insertId, ...newTask });
      result(null, { id: res.insertId, ...newTask });
    });
  };

  Task.findById = function (id, result) {
    sql.query("Select * from task where id = ? ", id, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(null, res[0]);
    }
    });
    };   
       
    Task.findByPers = function (id_pers, result) {
    sql.query("Select * from task where id_pers = ? ", id_pers, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
        result(null, res[0]);
    }
    });
    };
    
        
    //retreive personnel by prenom
    
    
    //retreive All personnel
    Task.findAll = function (result) {
    sql.query("Select * from task", function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      console.log('Tasks : ', res);
      result(null, res);
    }
    });
    };
    
    
    Task.delete = function(id, result){
    sql.query("DELETE FROM task WHERE id = ?", id, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      result(null, res);
    }
    });
    };   
       
    
    Task.update = ( task, result) => {
      sql.query(
        "UPDATE task SET title = ?, description = ?, id_pers = ? WHERE id = ?",
        [task.title, task.description, task.id_pers, task.id],
        (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          }
    
          if (res.affectedRows == 0) {
            // not found personnel with the id
            result({ kind: "not_found" }, null);
            return;
          }
    
          console.log("updated personnel: ", { id: task.id, ...task });
          result(null, { id: task.id, ...task });
        }
      );
    };
          
  module.exports = Task;