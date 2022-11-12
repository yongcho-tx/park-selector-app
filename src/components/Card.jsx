import { ParksContext } from "../contexts/ParksProvider"
import { useState, useContext } from "react"

const Card = ({ park }) => {
  const { visited, toVisit, setVisited, setToVisit } = useContext(ParksContext)
  const [isChecked, setIsChecked] = useState({ visited: false, toVisit: false })

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
      <h2>
        <a className='no-underline' target='_blank' href={park.url}>
          {park.fullName}
        </a>
        ,<span style={{ wordWrap: "break-word" }}>{park.states}</span>
      </h2>
      <p>{park.description}</p>
      <img className='mb-4' src={park.images[0].url} />
      <label>
        Want to Visit?
        <input
          type='checkbox'
          name='toVisit'
          value='Want to Visit'
          checked={isChecked.toVisit}
          onChange={handleChange}
        />
      </label>
      <label>
        Visited?
        <input
          type='checkbox'
          name='visited'
          value='visited'
          checked={isChecked.visited}
          onChange={handleChange}
        />
      </label>
    </div>
  )
}

export default Card
