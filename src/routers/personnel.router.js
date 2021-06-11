module.exports = app => {
    const personnel = require("./controller/personnel.controller");
  
    // Create a new personnel
    app.post("/personnel/create", personnel.create);

    app.get("/personnel/getAll",personnel.findAll);
    app.get("/personnel/getbyCin/:cin",personnel.findByCin);
    app.get("/personnel/getbyName/:nom",personnel.findByName);
    app.get("/personnel/getbyPrenom/:prenom",personnel.findByPrenom);
    app.get("/personnel/getbyFonction/:fonction",personnel.findByFonction);

    

    app.delete("/personnel/delete/:cin",personnel.delete);

    app.put("/personnel/update",personnel.update);
  
    
  };