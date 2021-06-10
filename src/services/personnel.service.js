const sql = require("./../../config_DB/db");

// constructor
const Personnel = function(pers) {
  this.cin = pers.cin;
  this.nom = pers.nom;
  this.prenom = pers.prenom;
  this.sexe = pers.sexe;
  this.fonction = pers.fonction;
  this.telephone=pers.telephone;
  this.password=pers.password;
};

Personnel.create = (newPersonnel, result) => {
    sql.query("INSERT INTO personnel SET ?", newPersonnel, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created personnel: ", { id: res.insertId, ...newPersonnel });
      result(null, { id: res.insertId, ...newPersonnel });
    });
  };
 //retreive personnel by cin
 Personnel.findByCin = function (cin, result) {
    sql.query("Select * from personnel where cin = ? ", cin, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(null, res);
    }
    });
    };    
    
    //retreive personnel by name
    Personnel.findByName = function (name, result) {
    sql.query("Select * from personnel where nom = ? ", name, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(null, res);
    }
    });
    };
    
      //retreive personnel by fonction
      Personnel.findByFonction = function (fonction, result) {
        sql.query("Select * from personnel where fonction = ?", fonction, function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(err, null);
        }
        else{
          result(null, res);
        }
        });
        };
        
    //retreive personnel by prenom
    Personnel.findByPrenom = function (prenom, result) {
    sql.query("Select * from personnel where prenom = ? ", prenom, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(null, res);
    }
    });
    };
    
    //retreive All personnel
    Personnel.findAll = function (result) {
    sql.query("Select * from personnel", function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      console.log('personnel : ', res);
      result(null, res);
    }
    });
    };
    
    
    //delete personnel by cin
    Personnel.delete = function(cin, result){
    sql.query("DELETE FROM personnel WHERE cin = ?", cin, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      result(null, res);
    }
    });
    };   
       
    
    Personnel.update = function(personnel, result){
    sql.query("UPDATE personnel SET nom=?,prenom=?,sexe=?,fonction=?,telephone=?,password=? WHERE cin = ?",
     [personnel.nom,personnel.prenom,personnel.sexe,personnel.fonction,personnel.telephone,personnel.password,personnel.cin],
      function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }else{
      result(null, res);
    }
    });
    };

  module.exports = Personnel;