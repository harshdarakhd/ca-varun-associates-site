import React from 'react'
import { Divider } from 'antd'
import AboutCard from '../components/AboutCards'
import TypeWriter from '../components/TypeWriter'

const AboutUstext = () => {
  return (
    <div className="flex flex-col items-center p-2">
      WE ARE A TEAM OF PROFESSIONALS WHO ARE PASSIONATE ABOUT WHAT WE DO 
      <p>AND OUR CULTURE OF EXCELLENCE IS THE MAJOR FACTOR THAT SEPARATES US FROM OTHER FIRMS.
      </p>
    </div>
  )
}

function AboutUs() {
  return (
    <div className="flex flex-col items-center p-10">
      <Divider>
        <TypeWriter />
        </Divider>
        <AboutUstext />
      <AboutCard />
  </div>
  )
}

export default AboutUs