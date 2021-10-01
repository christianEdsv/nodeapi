const db = require("../models");
const ChristianHernandezDB = db.christianHernandezDB;

// Crear
exports.create = (req, res) => {
    // Validando los campos
    if (!req.body.codigo) {
      res.status(400).send({ message: "Campo no puede ir vacio" });
      return;
    }
  
    // Creando un producto
    const christianHernandezDB = new ChristianHernandezDB({
      codigo: req.body.codigo,
      nombre: req.body.nombre,
      precio: req.body.precio,
      existencias: req.body.existencias
    });
  
    // Guardando en la base
    christianHernandezDB
      .save(christianHernandezDB)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Error creando el producto"
        });
      });
  };

// Consultar todos
exports.findAll = (req, res) => {
    const codigo = req.query.codigo;
    var condicion = codigo ? { codigo: { $regex: new RegExp(codigo), $options: "i" } } : {};
  
    ChristianHernandezDB.find(condicion)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Error consultando los productos."
        });
      });
  };

// Actualizar
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Campos no pueden ir vacios"
      });
    }
  
    const id = req.params.id;
  
    ChristianHernandezDB.findByIdAndUpdate(id, req.body)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `No se puede actualixar el producto${id}`
          });
        } else res.send({ message: "Producto actualizado correctamente" });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error actualizando el codigo= " + id
        });
      });
  };

// Eliminar
exports.delete = (req, res) => {
  const id = req.params.id;

  ChristianHernandezDB.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `No se puede eliminar el id=${id}`
        });
      } else {
        res.send({
          message: "Producto eliminado!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "No se puede eliminar el codigo=" + id
      });
    });
};
