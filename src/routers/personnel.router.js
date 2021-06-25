module.exports = (app) => {
  const personnel = require("../controller/personnel.controller");

  // Create a new personnel
  app.post("/personnel/create", personnel.create);

  app.get("/personnel/getAll", personnel.findAll);
  app.get("/personnel/getbyCin/:cin", personnel.findByCin);
  app.get("/personnel/getbyName/:nom", personnel.findByName);
  app.get("/personnel/getbyPrenom/:prenom", personnel.findByPrenom);
  app.get("/personnel/getbyRole/:role", personnel.findByRole);
  app.get("/personnel/login", personnel.login);
  app.get("/personnel/getNumber", personnel.getNumber);

  app.delete("/personnel/delete/:cin", personnel.delete);

  app.put("/personnel/update", personnel.update);
  app.put("/personnel/affecterRole/:cin/:id_role", personnel.AffecterRole);
};
