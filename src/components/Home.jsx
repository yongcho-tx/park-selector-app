import React, { useState, useRef } from "react"
import ParksCard from "./ParksCard"

const Home = (props) => {
  const [inputNumber, setInputNumber] = useState(0)

  const parkForm = useRef(null)
  return (
    <div className='w-full h-screen flex flex-col'>
      {props.children}
      <h1 className='text-center text-xl m-5'>Discover National Parks</h1>
      <div className='border-black'>
        <h2 className='flex items-center justify-evenly mb-5 border border-black'>
          Input Number of Parks to View:{" "}
          <input
            className='border-black bg-green-300 text-center w-[120px]'
            type='number'
            ref={parkForm}
          ></input>
          <button
            className='text-blue border-2 px-6 py-3 flex 
            items-centerhover:bg-[#b1a296] hover:border-[#b1a296]'
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
