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
  
  Voyage.findById = (voyageId, result) => {
    sql.query(`SELECT * FROM voyage WHERE id = ${voyageId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found voyage: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found voyage with the id
      result({ kind: "not_found" }, null);
    });
  };
  
  Voyage.getAll = result => {
    sql.query("SELECT * FROM voyage", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("voyages: ", res);
      result(null, res);
    });
  };
  
  Voyage.updateById = ( voyage, result) => {
    sql.query(
      "UPDATE voyage SET dateDepart = ?, dateArrive = ?, nom = ?, capacite = ?, stat = ? WHERE id = ?",
      [voyage.dateDepart, voyage.dateArrive, voyage.nom, voyage.capacite,voyage.stat, voyage.id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found voyage with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated voyage: ", { id: voyage.id, ...voyage });
        result(null, { id: voyage.id, ...voyage });
      }
    );
  };
  
  Voyage.remove = (id, result) => {
    sql.query("DELETE FROM voyage WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found voyage with the id
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("Successfully deleted voyage with id: ", id);
      result(null, res);
    });
  };
  
  Voyage.removeAll = result => {
    sql.query("DELETE FROM voyage", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log(`deleted ${res.affectedRows} voyages`);
      result(null, res);
    });
  };

  module.exports = Voyage;
