import React from 'react'
import Navbar from './Navbar'
import MainContent from './MainContent'

const Header = () => {
  return (
    < >

    <Navbar />
    <div  className="flex-1 flex flex-col">
    <MainContent />
    </div>

  </>
  )
}

export default Header
