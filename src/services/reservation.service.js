const sql = require('../../config_DB/db');

// constructor
const Reservation = function(reservation) {
  this.resId = reservation.resId;
  this.dateRes = reservation.dateRes;
  this.dateDebut = reservation.dateDebut;
  this.dateFin = reservation.dateFin;
  this.clientId = reservation.clientId;
  this.nbPlaces = reservation.nbPlaces;
  this.confirmation = reservation.confirmation;
  this.voyageId = reservation.voyageId;

};

//insert reservation
Reservation.create = (newReservation, result) => {
    sql.query("INSERT INTO reservation SET ?", newReservation, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created reservation: ", { id: res.insertId, ...newReservation });
      result(null, { id: res.insertId, ...newReservation });
    });
  };

//retreive reservation by resId
Reservation.findByResId = function (resId, result) {
sql.query("Select * from reservation where resId = ? ", resId, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};


//retreive reservation by clientId
Reservation.findByClientId = function (clientId, result) {
sql.query("Select * from reservation where clientId = ? ", clientId, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};

//retreive reservation by voyageId
Reservation.findByVoyageId = function (voyageId, result) {
sql.query("Select * from reservation where clientId = ? ", voyageId, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};

//retreive All reservation
Reservation.findAll = function (result) {
sql.query("Select * from reservation", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('reservation : ', res);
  result(null, res);
}
});
};


//delete reservation by resID
Reservation.deleteResId = function(resId, result){
sql.query("DELETE FROM reservation WHERE resId = ?", resId, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};



//delete reservation by clientID
Reservation.deleteClientId = function(clientId, result){
sql.query("DELETE FROM reservation WHERE clientId = ?", clientId, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};




//delete reservation by voyageID
Reservation.deleteVoyageId = function(voyageId, result){
sql.query("DELETE FROM reservation WHERE voyageId = ?", voyageId, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};



Reservation.update = function(resId,reservation, result){
sql.query("UPDATE reservation SET dateRes=?,dateDebut=?,dateFin=?,clientId=?,nbPlaces=?,confirmation=?,voyageId = ? WHERE resId = ?", [reservation.dateRes,reservation.dateDebut,reservation.dateFin,reservation.clientId,reservation.nbPlaces,reservation.confirmation,reservation.voyageId,resId], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};

  module.exports = Reservation;