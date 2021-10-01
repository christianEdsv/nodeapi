const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Conectado a la base de datos!!");
  })
  .catch(err => {
    console.log("No se pudo conectar a la base de datos!", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({ message: "Hello world!!" });
});

require("./app/routes/christianHernandezDB.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server corriendo en el puerto ${PORT}.`);
});