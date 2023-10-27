import React from 'react'
import Navbar from './Navbar'
import Professions from './Professions'
import Footer from './Footer'
import Home from './Home'
export default function HomeRouting() {
  return (
    <>
      <div className=''>
       <Navbar/>
       <Home/>
       <Professions/>
       <Footer/>
       </div>
    </>
  )
}
