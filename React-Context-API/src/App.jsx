import { useContext, useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import { SiteContext } from './context/SiteContext'
import SiteRoutes from './SiteRoutes'

function App() {

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="com-sm-12">
           
          <SiteRoutes />
          
          </div>
        </div>
      </div>
    </>
  )
}

export default App
