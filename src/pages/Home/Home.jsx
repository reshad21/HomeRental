/* eslint-disable no-unused-vars */
import React from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import HeroSection from '../HeroSection/HeroSection'
import Property from '../Property/Property'
import ReferEarn from '../ReferalSection/ReferEarn'
import Service from '../Services/Service'

const Home = () => {
  return (
    <div className=''>
      <HeroSection />
      <Service />
      <About />
      <Property />
      <ReferEarn />
      <Contact />
    </div>
  )
}

export default Home