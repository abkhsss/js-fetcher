const express = require("express")
const app = express()

// added midleware for json responses
app.middleware(app.json())

app.route("/salam", (req, res) => {
  res.status(200).send()
})
