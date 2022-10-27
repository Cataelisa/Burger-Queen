import { useState, useEffect } from 'react'
import './App.css'
import Home from "./Pages/Home"
import Waiter from "./Pages/Waiter"
import Kitchen from "./Pages/Kitchen"
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
  //const [count, setCount] = useState(0)

  return (<BrowserRouter> <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/Waiter" element={<Waiter />} />
      <Route path="/Kitchen" element={<Kitchen />} />

    </Routes>
    </BrowserRouter>

  )
}

export default App
