import React, { useState, useRef } from "react"
import ParksCard from "./ParksCard"

const Home = (props) => {
  const [inputNumber, setInputNumber] = useState(0)
  const parkForm = useRef(null)

  return (
    <div className='w-full flex flex-col'>
      {props.children}
      <h1 className='text-center text-3xl m-8'>Discover National Parks</h1>
      <div className='border-y-2 flex items-center justify-center p-2'>
        <h2>
          Input Number of Parks to View:
          <input
            className='border-2 text-center w-[60px] m-3'
            type='number'
            ref={parkForm}
          ></input>
          <button
            className='text-blue-400 border-2 px-6 hover:bg-[#b1a296] hover:border-[#b1a296]'
            onClick={(e) => {
              setInputNumber(parkForm.current.value)
            }}
          >
            Add to Queue
          </button>
        </h2>
      </div>
      <ParksCard cardCount={parseInt(inputNumber)} />
    </div>
  )
}

export default Home
