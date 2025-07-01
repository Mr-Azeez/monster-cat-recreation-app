import React from 'react'
import NavBar from '../components/Navbar/NavBar'
import Section1 from '../components/Section1/Section1'
import Section2 from '../components/Section2/Section2'
import MusicVideo from '../components/MusicVideo/MusicVideo'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <div className='home-container'>
      <NavBar />
      <Section1 />
      <Section2 />
      <MusicVideo />
      <hr className="underline" />
      <Footer />
    </div>
  )
}

export default Home
