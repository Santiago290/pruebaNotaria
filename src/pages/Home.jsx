import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Home/Hero'
import Services from '../components/Home/Services'
import Location from '../components/Home/location'
import Cita from '../components/Home/Cita'
import Footer from '../components/Footer'
import FloatingVentana from '../components/floating-ventana'

export const Home = () => {
  return (
    <>
        <FloatingVentana />

      <Navbar></Navbar>
      <Hero></Hero> 
      <Services></Services>
      <Location></Location>
      <Cita></Cita>
      <Footer></Footer>
    </>
    
  )
}
