
const Reservation = require ("./../services/reservation.service");

// Create and Save a new reservation
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create reservation
    const reservation = new Reservation({
		resId: req.body.resId,
		dateRes: req.body.dateRes,
        dateDebut: req.body.dateDebut,
        dateFin: req.body.dateFin,
        clientId: req.body.clientId,
        nbPlaces: req.body.nbPlaces,
        confirmation:req.body.confirmation,
		voyageId:req.body.voyageId
		
    });
  
    // Save reservation in the database
    Reservation.create(reservation, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the booking."
        });
      else res.send(data);
    });
  };
  

//retreive reservation by resId
  exports.findByResId = function(req, res) {
Reservation.findByResId(req.params.resId, function(err, reservation) {
  if (err)
  res.send(err);
  res.json(reservation);
});
};


//retreive reservation by ClientId
  exports.findByClientId = function(req, res) {
Reservation.findByClientId(req.params.resId, function(err, reservation) {
  if (err)
  res.send(err);
  res.json(reservation);
});
};

//retreive reservation by VoyageId
  exports.findByVoyageId = function(req, res) {
Reservation.findByVoyageId(req.params.resId, function(err, reservation) {
  if (err)
  res.send(err);
  res.json(reservation);
});
};

//retreive All reservation
  exports.findAll = function(req, res) {
Reservation.findAll(function(err, reservation) {
  if (err)
  res.send(err);
  res.json(reservation);
});
};


//delete reservation by resID
  exports.delete = function(req, res) {
Reservation.delete(req.params.resId,function(err, reservation) {
  if (err)
  res.send(err);
  res.json(reservation);
});
};



//delete reservation by clientID
  exports.delete = function(req, res) {
Reservation.delete(req.params.clientId,function(err, reservation) {
  if (err)
  res.send(err);
  res.json(reservation);
});
};



//delete reservation by voyageID
  exports.delete = function(req, res) {
Reservation.delete(req.params.voyageId,function(err, reservation) {
  if (err)
  res.send(err);
  res.json(reservation);
});
};




//update reservation
exports.update = function(req, res) {


    const reservation = new Reservation({
    resId: req.body.resId,
    dateRes: req.body.dateRes,
        dateDebut: req.body.dateDebut,
        dateFin: req.body.dateFin,
        clientId: req.body.clientId,
        nbPlaces: req.body.nbPlaces,
        confirmation:req.body.confirmation,
    voyageId:req.body.voyageId
    
    });
      
Reservation.update(reservation,function(err, reservation) {
  if (err)
  res.send(err);
  res.json(reservation);
});
};