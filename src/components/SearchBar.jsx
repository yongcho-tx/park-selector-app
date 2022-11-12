import React, { useState, useContext, useRef, useEffect } from "react"
import { ParksContext } from "../contexts/ParksProvider"
import Card from "./Card"

const filterParks = (parkArr, queryString) => {
  if (!queryString) {
    return []
  }

  return parkArr.filter((park) => {
    const parksName = park.fullName.toLowerCase()
    if (parksName.includes(queryString)) {
      return parksName.includes(queryString)
    }
    if (park.states.includes(queryString)) {
      return park.states.includes(queryString)
    }
    if (park.states === queryString) {
      return park.states === queryString
    }
  })
}

const SearchBar = () => {
  const { parksData, visited, toVisit, setVisited, setToVisit } =
    useContext(ParksContext)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredParks2, setFilteredParks2] = useState([])
  const [chosenState, setChosenState] = useState("")
  const states = [
    "AK",
    "AL",
    "AR",
    "AS",
    "AZ",
    "CA",
    "CO",
    "CT",
    "DC",
    "DE",
    "FL",
    "GA",
    "GU",
    "HI",
    "IA",
    "ID",
    "IL",
    "IN",
    "KS",
    "KY",
    "LA",
    "MA",
    "MD",
    "ME",
    "MI",
    "MN",
    "MO",
    "MS",
    "MT",
    "NC",
    "ND",
    "NE",
    "NH",
    "NJ",
    "NM",
    "NV",
    "NY",
    "OH",
    "OK",
    "OR",
    "PA",
    "PR",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VA",
    "VI",
    "VT",
    "WA",
    "WI",
    "WV",
    "WY",
  ]

  const filteredParksByState = parksData.filter(
    (park) => park.states === chosenState
  )
  const renderedFilteredParksByState = filteredParksByState.map((park) => (
    <Card park={park} />
  ))

  const dropDown = () => {
    document.getElementById("myDropdown").classList.toggle("show")
  }

  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      let dropdowns = document.getElementsByClassName("dropdown-content")
      let i
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i]
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show")
        }
      }
    }
  }

  useEffect(
    () =>
      setFilteredParks2((prevParks) => {
        return filterParks(parksData, searchQuery)
      }),
    [searchQuery]
  )
  return (
    <>
      <div className='flex justify-center items-center m-4'>
        <label htmlFor='header-search'>
          <span className='visually-hidden'>Search National Parks</span>
        </label>
        <input
          className='h-7 w-[500px] m-3 border border-black rounded p-2'
          type='text'
          placeholder='search national parks'
          value={searchQuery}
          onInput={(e) => setSearchQuery(e.target.value)}
        />
        <div className='relative inline-block'>
          <button
            className='p-3 text-xs dropbtn'
            onClick={() => {
              dropDown()
            }}
          >
            Dropdown
          </button>
          <div id='myDropdown' className='hidden min-w-[160px]'>
            {states.map((state) => (
              <button
                onClick={(e) => {
                  setSearchQuery((prevQuery) => e.target.name)
                  return setChosenState((prevState) => e.target.name)
                }}
                name={state}
              >
                {state}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className='ml-4'>
        <div className='grid grid-cols-3 gap-4 rounded-lg'>
          {filteredParks2.map((park) => (
            <Card park={park} />
          ))}
        </div>
      </div>
    </>
  )
}

export default SearchBar
