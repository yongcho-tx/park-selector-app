import React, { useContext } from "react"
import { ParksContext } from "../contexts/ParksProvider"

const Stats = () => {
  const { visited, toVisit } = useContext(ParksContext)
  return (
    <div className='w-full h-screen flex justify-center items-center bg-yellow-50'>
      <div>
        <h1 className='text-4xl pb-8'>Visited Parks, Wishlist + Stats</h1>
        <h3 className='text-lg font-semibold'>
          # of parks available to Visit: 467
        </h3>
        <h3 className='text-lg font-semibold'>
          # of parks you visited: {visited.length}
        </h3>
        <ul>
          {visited.map((item) => (
            <li>
              <a
                className='hover:bg-green-200'
                target='_blank'
                rel='noreferrer'
                href={item.url}
              >
                {item.fullName}
              </a>
            </li>
          ))}
        </ul>
        <h3 className='text-lg font-semibold'>
          # of parks you want to visit: {toVisit.length}{" "}
        </h3>
        <ul>
          {toVisit.map((item) => (
            <li>
              <a
                className='hover:bg-green-200'
                target='_blank'
                rel='noreferrer'
                href={item.url}
              >
                {item.fullName}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Stats
