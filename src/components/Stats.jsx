import React, { useContext } from "react"
import { ParksContext } from "../contexts/ParksProvider"

const Stats = () => {
  const { visited, toVisit } = useContext(ParksContext)
  return (
    <div className='w-full h-screen flex justify-center items-center m-2'>
      <div>
        <h2>Park Visit Wishlist and Stats</h2>
        <h3>Total Parks Available to Visit: 467</h3>
        <h3>Total Parks Visited: {visited.length}</h3>
        <ul>
          {visited.map((item) => (
            <li>
              <a target='_blank' rel='noreferrer' href={item.url}>
                {item.fullName}
              </a>
            </li>
          ))}
        </ul>
        <h3>Total Parks You Want to Visit: {toVisit.length} </h3>
        <ul>
          {toVisit.map((item) => (
            <li>
              <a target='_blank' rel='noreferrer' href={item.url}>
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
