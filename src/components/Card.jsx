import { ParksContext } from "../contexts/ParksProvider"
import { useState, useContext } from "react"

const Card = ({ park }) => {
  const { visited, toVisit, setVisited, setToVisit } = useContext(ParksContext)
  const [isChecked, setIsChecked] = useState({ visited: false, toVisit: false })
  const parkStates = park.states.split(",").join(", ")

  const handleChange = (e) => {
    if (e.target.checked === true) {
      if (e.target.value === "visited") {
        const newVisited = [...visited, park]
        localStorage.setItem("visited", newVisited)
        setVisited(newVisited)
      } else {
        const newToVisit = [...toVisit, park]
        localStorage.setItem("toVisit", newToVisit)
        setToVisit(newToVisit)
      }
    }
    console.log(e.target.checked)
    return setIsChecked((prev) => ({
      ...prev,
      [e.target.name]: !prev[e.target.name],
    }))
  }

  return (
    <div className='border-2 rounded-lg w-full' key={park.id}>
      <h2 className='font-bold text-center m-4 hover:bg-yellow-50 text-xl sm:text-2xl lg:text-3xl'>
        <a className='no-underline' target='_blank' href={park.url}>
          {park.fullName},{" "}
        </a>
        <span className='break-words'>{parkStates}</span>
      </h2>
      <p className='m-4'>{park.description}</p>
      <img className='rounded-lg p-6' src={park.images[0].url} />
      <div className='pb-2 flex items-center justify-evenly'>
        <div>
          <label className='flex items-center justify-center'>
            Want to Visit?{" "}
            <input
              type='checkbox'
              name='toVisit'
              value='Want to Visit'
              checked={isChecked.toVisit}
              onChange={handleChange}
              className='w-10 h-4'
            />
          </label>
        </div>
        <div>
          <label className='flex items-center justify-center'>
            Visited?{" "}
            <input
              type='checkbox'
              name='visited'
              value='visited'
              checked={isChecked.visited}
              onChange={handleChange}
              className='w-10 h-4'
            />
          </label>
        </div>
      </div>
    </div>
  )
}

export default Card
