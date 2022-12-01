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

// post method because this is an api for pwa apps


app.post("/checkStatus", (req, res) => {
  res.status(200).send(dep.CallMain().getStatus())
})

app.post("/checkAvail", (req, res) => {
  res.status(200).send(dep.HeartBeat.getBeat())
})



app.route("/CheckMark", (req, res) => {
  res.status(200).send(dep.CheckMarks.getLastCheck())
})


app.route("/CheckBook", (req, res) => {
  res.status(200).send(dep.CheckMarks.getLastCheck())
})


app.route("/CheckLeft", (req, res) => {
  res.status(200).send(dep.CheckMarks.getLastCheck())
})
