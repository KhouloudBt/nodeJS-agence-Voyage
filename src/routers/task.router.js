module.exports = (app) => {
    const task = require("../controller/task.controller");

app.post("/task/create", task.create);

  app.get("/task/getAll", task.findAll);
  app.get("/task/getbyPers/:pers", task.findByPers);
  app.get("/task/getbyId/:id", task.findById);

  app.delete("/task/delete/:id", task.delete);

  app.put("/task/update", task.update);

};