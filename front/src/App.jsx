import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import "./index.css"

import Home from "./Mainpage.jsx"
import Webdev from "./Webdev.jsx"
import Legal from "./Legal.jsx"

function App() {

  const padding = {
    padding: 5
  }

  return (
    <Router>
      {/*
      <div>
        <Link style={padding} to="/">home</Link>
        <Link style={padding} to="/users">users</Link>
      </div>
      */}

      <Routes>
        {/*<Route path="/users" element={<Users />} />*/}
        <Route path="Legal" element={<Legal />} />
        <Route path="/Websites-for-sale" element={<Webdev />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
