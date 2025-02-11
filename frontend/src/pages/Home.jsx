import React from 'react'
import Slider from '../components/Slider'
import Imageslider from '../components/Imageslider'
import Gallery from '../components/Gallery'
import Testimonial from '../components/Testimonial'

const Home = () => {
  return (
    <div>
      <Slider/>
      <Imageslider/>
      <Gallery/>
      <Testimonial/>
    </div>
  )
}

export default Home
