module.exports = app => {
    const reservation = require("../controller/reservation.controller");
  
    // Create a new reservation
    app.post("/reservation", reservation.create);


    app.get("/reservation/getAll",reservation.findAll);
    app.get("/reservation/getbyResId/:resId",reservation.findByResId);
    app.get("/reservation/getbyClientId/:resId",reservation.findByClientId);
    app.get("/reservation/getbyVoyageId/:resId",reservation.findByVoyageId);
    

    app.delete("/reservation/deletebyResId/:resId",reservation.deleteResId);
    app.delete("/reservation/deletebyClientId/:clientId",reservation.deleteClientId);
    app.delete("/reservation/deletebyvoyageId/:voyageId",reservation.deleteVoyageId);


    app.put("/reservation/update/:resId",reservation.update);
  };