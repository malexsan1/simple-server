const cors = require("cors")
const express = require("express")
const jwt = require("jsonwebtoken")
const bodyParser = require("body-parser")

const PORT = 3000
const JWT_SECRET = "TOP_SECRET"
const app = express()

app.use(cors())
app.use(bodyParser.json())

const users = []

const authorizedMiddleware = (req, res, next) => {
  const authorizationToken = req.headers.authorization || ""
  const token = authorizationToken.replace("Bearer ", "")

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      throw new Error("Unauthorized.")
    }
    req.user = decoded
    next()
  })
}

app.post("/api/login", (req, res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password
  }
  users.push(newUser)

  const token = jwt.sign(newUser, JWT_SECRET)

  res.json({
    token
  })
})

app.get("/api/users", authorizedMiddleware, (req, res) => {
  res.json(users)
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})
