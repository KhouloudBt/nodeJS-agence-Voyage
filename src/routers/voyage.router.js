module.exports = app => {
    const voyage = require("../controller/voyage.controller");
  
    // Create a new Voyage
    app.post("/voyage", voyage.create);
    app.get("/all",voyage.getAll);
    app.get("/voyages/:voyageId",voyage.findOne);
    app.get("/trips/getNumber",voyage.getNumber);

   // app.put("/voyages/:voyageId",voyage.update);
   app.put("/voyages",voyage.update);
    app.delete("/voyages/:voyageId",voyage.delete);
    app.delete("/voyages",voyage.deleteAll);
  };