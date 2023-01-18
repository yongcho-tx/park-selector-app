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
        <h2 className='text-center'>
          Input Number of Parks to View:
          <input
            className='border-2 text-center w-[60px] m-3'
            type='number'
            ref={parkForm}
          ></input>
          <button
            className='inline-block px-6 py-2 bg-green-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-500 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-600 active:shadow-lg transition duration-150 ease-in-out'
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
