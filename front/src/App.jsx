import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import Home from "./Mainpage.jsx"

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
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
