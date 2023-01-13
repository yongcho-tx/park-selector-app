import React, { useState, useEffect } from "react"
import axios from "axios"
const PORT = process.env.PORT || 8000

const ParksContext = React.createContext()

const ParksProvider = (props) => {
  const [parksData, setParksData] = useState([])
  const [randomizedData, setRandomizedData] = useState([])
  const [visited, setVisited] = useState([])
  const [toVisit, setToVisit] = useState([])

  const getData = () => {
    console.log(process.env.NODE_ENV)
    axios
      .get(`/parks`)
      .then((res) => {
        const parks = res.data
        console.log(parks)
        console.log(parks.data)
        setParksData(parks.data)
        localStorage.setItem("visitedParks", JSON.stringify(parks))
        console.log(localStorage)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    localStorage.setItem("visited", JSON.stringify(visited))
    localStorage.setItem("toVisit", JSON.stringify(toVisit))

    console.log(localStorage)
  }, [visited, toVisit])

  return (
    <ParksContext.Provider
      value={{
        getData,
        parksData,
        randomizedData,
        setRandomizedData,
        visited,
        setVisited,
        toVisit,
        setToVisit,
      }}
    >
      {props.children}
    </ParksContext.Provider>
  )
}

export { ParksProvider, ParksContext }
