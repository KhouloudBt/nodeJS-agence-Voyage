module.exports = app => {
    const transport = require("../controller/transport.controller");
  
    // Create a new transport
    app.post("/transport/create", Transport.create);

    app.get("/transport/getAll",Transport.findAll);
    app.get("/transport/getbyId/:Id",Transport.findById);
    app.get("/transport/getbyDispo/",Transport.findByDispo);

    

    app.delete("/transport/delete/:Id",Transport.delete);

    app.put("/transport/update",Transport.update);
  
    
  };