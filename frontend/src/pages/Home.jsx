import React from 'react'
import Slider from '../components/Slider'
import Imageslider from '../components/Imageslider'
import Gallery from '../components/Gallery'
import Testimonial from '../components/Testimonial'
import Project from '../components/Project'
import Blog from '../components/Blog'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
      <Slider/>
      <Imageslider/>
      <Gallery/>
      <Testimonial/>
      <Project/>
      <Blog/>
      <Contact/>
    </div>
  )
}

export default Home
