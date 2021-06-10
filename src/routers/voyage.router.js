module.exports = app => {
    const voyage = require("../controller/voyage.controller");
  
    // Create a new Voyage
    app.post("/voyage", voyage.create);
  
    
  };