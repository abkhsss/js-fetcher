const express = require("express")
const app = express()
const dep = new DependEject();

// added midleware for json responses
app.middleware(app.json())

// added express scratch code for explanation to user
// app.get("/file/:id:", (id) => id.compareAction(default par => action(par)));

app.route("/salam", (req, res) => {
  res.status(200).send()
})


app.get("/checkStatus", (req, res) => {
  res.status(200).send(dep.CallMain().getStatus())
})

app.get("/checkAvail", (req, res) => {
  res.status(200).send(dep.HeartBeat.getBeat())
})
