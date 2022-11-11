import React, { useState, useRef } from "react"
import ParksCard from "./ParksCard"

const Home = (props) => {
  const [inputNumber, setInputNumber] = useState(0)

  const parkForm = useRef(null)
  return (
    <div>
      {props.children}
      <h1>Discover National Parks</h1>
      <h2>
        Input Number of Parks to View:{" "}
        <input type='number' ref={parkForm}></input>
        <span>
          <button
            onClick={(e) => {
              setInputNumber(parkForm.current.value)
            }}
          >
            Add to Queue
          </button>
        </span>
      </h2>
      <ParksCard cardCount={parseInt(inputNumber)} />
    </div>
  )
}

export default Home
