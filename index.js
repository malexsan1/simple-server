const cors = require("cors");
const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

const auth = require("./auth");
const todos = require("./todos");
const watches = require("./watches");
const authorizedMiddleware = require("./authorized");

const PORT = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", auth);
app.use("/api/todos", authorizedMiddleware, todos);
app.use("/api/watches", authorizedMiddleware, watches);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
