const PORT = process.env.PORT || 8000
const express = require("express")
const morgan = require("morgan")
const app = express()
const cors = require("cors")
const axios = require("axios")
require("dotenv").config()
const path = require("path")

const API_KEY = process.env.API_KEY

// app.get("/", (req, res) => {
//   res.json("hi")
// })

app.use(express.json())
app.use(morgan("dev"))
app.use(cors())
app.use(express.static(path.join(__dirname, "client", "build")))

app.get("/parks", (req, res) => {
  axios
    .get(`https://developer.nps.gov/api/v1/parks?&limit=468&api_key=${API_KEY}`)
    .then((response) => {
      res.json(response.data)
    })
    .catch((err) => console.error(err))
})

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
