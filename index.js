const express = require("express")
const app = express()

app.route("/salam", (req, res) => {
  res.status(200).send()
})
