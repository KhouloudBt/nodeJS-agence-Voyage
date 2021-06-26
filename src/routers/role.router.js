module.exports = app => {
    const role = require("../controller/role.controller");
  
    // Create a new personnel
    app.post("/role/create", role.create);

    app.get("/role/getAll",role.findAll);
    app.get("/role/getbyId/:id",role.findById);    

    app.delete("/role/delete/:id",role.delete);

    app.put("/role/update",role.update);
  
    
  };