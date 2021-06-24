
const sql = require('../../config_DB/db');

// constructor
const Personnel = function(pers) {
  this.cin = pers.cin;
  this.nom = pers.nom;
  this.prenom = pers.prenom;
  this.sexe = pers.sexe;
  this.telephone=pers.telephone;
  this.password=pers.password;
  this.id_role=pers.id_role;
};

Personnel.create = (newPersonnel, result) => {
  console.log("creating");
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
      result(null, res[0]);
    }
    });
    };    
    
    /*Personnel.login = function (password, cin, result) {
      sql.query("Select * from personnel where cin = ? and password =? ",cin,password , function (err, res) {
      if(err) {
        console.log("error: ", err);
        result(err, null);
      }
      else{
        result(null, res[0]);
      }
      });
      };    */
      
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
      Personnel.findByRole = function (role, result) {
        sql.query("Select * from personnel p ,role r where p.id_role = r.id_role and r.title = ? ", role, function (err, res) {
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
       
    
    Personnel.update = ( personnel, result) => {
      sql.query(
        "UPDATE personnel SET nom = ?, prenom = ?, id_role = ?, sexe = ?, telephone = ?, password = ? WHERE cin = ?",
        [personnel.nom, personnel.prenom, personnel.id_role, personnel.sexe,personnel.telephone, personnel.password, personnel.cin],
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
    
          console.log("updated personnel: ", { cin: personnel.cin, ...personnel });
          result(null, { cin: personnel.cin, ...personnel });
        }
      );
    };
    Personnel.affecterRole = function(id_role,cin, result){
      sql.query("UPDATE personnel SET id_role = ? WHERE cin = ?", [id_role,cin],
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