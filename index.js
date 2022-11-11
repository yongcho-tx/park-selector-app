const PORT = 8000
const express = require("express")
const app = express()
const cors = require("cors")
const axios = require("axios")
require("dotenv").config()

const key = process.env.api_key

app.get("/", (req, res) => {
  res.json("hi")
})

app.use(cors())

app.get("/parks", (req, res) => {
  axios
    .get(`https://developer.nps.gov/api/v1/parks?&limit=468&api_key=${key}`)
    .then((response) => {
      res.json(response.data)
    })
    .catch((err) => console.error(err))
})

app.listen(8000, () => {
  console.log(`Server is running on port ${PORT}`)
})
