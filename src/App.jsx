import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Pages/Home/Home"
import { useState } from "react"
function App() {
  const [sideNavbar,setSideNavbar]=useState(true)
  const setSideNavbarFunc=(value)=>{
    setSideNavbar(value)
  }
  return (
    <>
    <Navbar setSideNavbarFunc={setSideNavbar} sideNavbar={sideNavbar}/>
    <Home sideNavbar={sideNavbar}/>
    </>
  )
}

export default App
