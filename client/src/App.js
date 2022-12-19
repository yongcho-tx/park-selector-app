import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Stats from "./components/Stats"
import SearchBar from "./components/SearchBar"
import React, { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='w-full h-screen'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />} />
          <Route path='/stats' element={<Stats />} />
          <Route path='/searchbar' element={<SearchBar />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
