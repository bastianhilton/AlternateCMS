const cors = require("cors");
const express = require("express");
const app = express();

global.__basedir = __dirname;

const corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

const initRoutes = require("./pages");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

const port = 8080;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});