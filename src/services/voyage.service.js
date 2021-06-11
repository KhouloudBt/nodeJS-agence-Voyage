const sql = require("../../config_DB/db");

// constructor
const Voyage = function(voyage) {
  this.dateDepart = voyage.dateDepart;
  this.dateArrive = voyage.dateArrive;
  this.nom = voyage.nom;
  this.capacite = voyage.capacite;
  this.stat = voyage.stat;
};

Voyage.create = (newVoyage, result) => {
    sql.query("INSERT INTO voyage SET ?", newVoyage, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created voyage: ", { id: res.insertId, ...newVoyage });
      result(null, { id: res.insertId, ...newVoyage });
    });
  };
  
  module.exports = Voyage;