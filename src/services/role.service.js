const sql = require("../../config_DB/db");

const Role = function(role) {
  this.title = role.title;
  this.description = pers.description; 
};

Role.create = (newRole, result) => {
    sql.query("INSERT INTO role SET ?", newRole, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created role: ", { id: res.insertId, ...newPersonnel });
      result(null, { id: res.insertId, ...newPersonnel });
    });
  };
 Role.findById= function (id, result) {
    sql.query("Select * from role where id = ? ", id, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(null, res);
    }
    });
    };    
    
    Role.findByTitle = function (title, result) {
    sql.query("Select * from role where title = ? ", title, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(null, res);
    }
    });
    };
    
      
    
    
    //delete personnel by id
    Role.delete = function(id, result){
    sql.query("DELETE FROM role WHERE id = ?", id, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      result(null, res);
    }
    });
    };   
       
    
    Role.update = function(role, result){
    sql.query("UPDATE role SET title=?,description=? WHERE id = ?",
     [role.title,role.description, role.id],
      function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }else{
      result(null, res);
    }
    });
    };

  module.exports = Role;