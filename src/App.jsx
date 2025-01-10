import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeRoutes from './Components/HomeRoutes/HomeRoutes'
import HighbrouNavigation from './Components/HighbrouNavigation/HighbrouNavigation'

function App() {

  return (
    <>
    <HighbrouNavigation/>
      <HomeRoutes/>
    </>
  )
}

export default App
