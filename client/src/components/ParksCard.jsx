import React, { useContext, useEffect, useState } from "react"
import { ParksContext } from "../contexts/ParksProvider"
import Card from "./Card"

const ParksCard = (props) => {
  const { parksData } = useContext(ParksContext)
  const [startingPosition, setStartingPosition] = useState(0)
  const [trialRandParks, setTrialRandParks] = useState([])
  const [parkHistory, setParkHistory] = useState([])
  const [showHistory, setShowHistory] = useState(false)
  const [scrollNumMin, setScrollNumMin] = useState(0)
  const [scrollNumMax, setScrollNumMax] = useState(0)

  const randomParks = (limit) => {
    let randParks = []
    if (parksData.length > 0) {
      for (let i = startingPosition; i < limit + startingPosition; i++) {
        let random = parksData[Math.floor(Math.random() * parksData.length)]
        randParks.push(random)
      }
    }

    setParkHistory((prevHistory) => [...prevHistory, ...randParks])
    console.log(parkHistory)
    return setTrialRandParks(randParks)
  }
  const displayParks = showHistory
    ? parkHistory &&
      parkHistory.map((park, index) => {
        if (index < scrollNumMax && index >= scrollNumMin) {
          return <Card park={park} />
        }
      })
    : trialRandParks.length === props.cardCount &&
      trialRandParks.map((park) => {
        return <Card park={park} />
      })

  useEffect(() => {
    setShowHistory(false)
    setScrollNumMin(parkHistory.length - 6)
    setScrollNumMax(parkHistory.length)
    randomParks(props.cardCount)
  }, [props.cardCount])

  return (
    <>
      {parksData.length <= 0 ? (
        <p>Is loading</p>
      ) : (
        <>
          {showHistory && (
            <div style={{ textAlign: "center" }}>
              <h1>
                {" "}
                Displaying Parks-list {scrollNumMin + 1} to{" "}
                {scrollNumMax > parkHistory.length
                  ? parkHistory.length
                  : scrollNumMax}{" "}
                of {parkHistory.length}
              </h1>
            </div>
          )}
          <div className='grid p-5 sm:grid-cols-2 lg:grid-cols-3 gap-8 m-5'>
            {displayParks}
          </div>
          <div className='flex justify-center mt-4 mb-8 gap-3'>
            <button
              // className='w-[fit] h-[56px] m-2 rounded bg-blue-200'
              type='button'
              data-mdb-ripple='true'
              data-mdb-ripple-color='light'
              className='inline-block mx-3 font-normal px-6 py-2.5 bg-sky-400 text-white sm:font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-500 hover:shadow-lg focus:bg-sky-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-600 active:shadow-lg transition duration-150 ease-in-out'
              onClick={() => randomParks(props.cardCount)}
            >
              Add {props.cardCount} New Parks To View
            </button>
            <button
              // className='w-[125px] h-[56px] m-2 rounded border-spacing-0 border-black bg-red-200'
              className='inline-block px-6 py-2.5 bg-sky-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-500 hover:shadow-lg focus:bg-sky-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-600 active:shadow-lg transition duration-150 ease-in-out'
              type='button'
              data-mdb-ripple='true'
              data-mdb-ripple-color='light'
              onClick={() => {
                setShowHistory(true)
                setScrollNumMin((prevScrollNumMin) =>
                  prevScrollNumMin - 6 <= 0 ? 0 : prevScrollNumMin - 6
                )
                setScrollNumMax((prevScrollNumMax) =>
                  prevScrollNumMax - 6 <= 6 ? 6 : prevScrollNumMax - 6
                )
              }}
            >
              Prev Parks
            </button>
            <button
              // className='w-[125px] h-[56px] m-2 rounded border bg-green-200'
              type='button'
              data-mdb-ripple='true'
              data-mdb-ripple-color='light'
              className='inline-block mx-3 px-6 py-3.5 bg-sky-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-500 hover:shadow-lg focus:bg-sky-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-600 active:shadow-lg transition duration-150 ease-in-out'
              onClick={() => {
                setShowHistory(true)
                setScrollNumMin((prevScrollNumMin) =>
                  prevScrollNumMin >= parkHistory.length - 6
                    ? prevScrollNumMin
                    : prevScrollNumMin + 6
                )
                setScrollNumMax((prevScrollNumMax) =>
                  prevScrollNumMax >= parkHistory.length
                    ? prevScrollNumMax
                    : prevScrollNumMax + 6
                )
              }}
            >
              Next Parks
            </button>
          </div>
        </>
      )}
    </>
  )
}

export default ParksCard
