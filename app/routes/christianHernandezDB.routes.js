module.exports = app => {
    const christianHernandezDB = require("../controllers/christianHernandezDB.controller.js");
  
    var router = require("express").Router();
  
    // Crear
    router.post("/", christianHernandezDB.create);
  
    // Consultar
    router.get("/", christianHernandezDB.findAll);
  
    // Actualizar
    router.put("/:id", christianHernandezDB.update);
  
    // Elimiar por codigo
    router.delete("/:codigo", christianHernandezDB.delete);
    
    app.use('/api/christianHernandezDB', router);
  };