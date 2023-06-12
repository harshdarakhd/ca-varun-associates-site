import React from 'react'
import { Divider } from 'antd'
import MediaCard from '../components/Cards'
import TypeWriter from '../components/TypeWriter'

const AboutUstext = () => {
  return (
    <div> 
      WE ARE A TEAM OF PROFESSIONALS WHO ARE PASSIONATE ABOUT WHAT WE DO 
      <br/>AND OUR CULTURE OF EXCELLENCE IS THE MAJOR FACTOR THAT SEPARATES US FROM OTHER FIRMS.
    </div>
  )
}

function AboutUs() {
  return (
    <div style={{ padding: 50, textAlign: "center" }}>
      <Divider>
        <TypeWriter />
        </Divider>
      <AboutUstext />
      <MediaCard />
  </div>
  )
}

export default AboutUs