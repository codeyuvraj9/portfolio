import React from 'react'
import About from '../Components/About'
import Navbar from '../Components/Navbar'
import Brief from '../Components/Brief'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Brief/>
        <About/>
    </div>
  )
}
