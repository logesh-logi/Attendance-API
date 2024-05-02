const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./Routes/routes");
const sequelize = require("./config/db");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/hello", (req, res) => {
  res.send("hello world");
});

app.use("/api", routes);

//error handling with global catch
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.status || 500).json({ error: err.message });
});

sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error synchronizing models:", err);
  });
