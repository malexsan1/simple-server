const cors = require("cors")
const express = require("express")
const jwt = require("jsonwebtoken")
const bodyParser = require("body-parser")

const auth = require("./auth")
const todos = require("./todos")
const authorizedMiddleware = require("./authorized")

const PORT = 3000
const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use("/api/auth", auth)
app.use("/api/todos", authorizedMiddleware, todos)

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})
