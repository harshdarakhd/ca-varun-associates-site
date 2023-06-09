import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Services from './Services';
import MediaCard from '../components/Cards';
import TypeWriter from '../components/TypeWriter';


const Hometext = () => {
  return (
    <div>
      WE ARE A TEAM OF PROFESSIONALS WHO ARE PASSIONATE ABOUT WHAT WE DO 
      <br/>AND OUR CULTURE OF EXCELLENCE IS THE MAJOR FACTOR THAT SEPARATES US FROM OTHER FIRMS.
      {/* <ul className='flex-center'>
        <li> INTEGRITY </li>
        <li>PROFESSIONALISM</li>
        <li> EXCELLENCE</li>
        <li> TEAMWORK</li>
      </ul> */}
    </div>
  )
}

function Home() {
  return (
      <div style={{ padding: 50, textAlign: "center" }}>
      <TypeWriter />
      <Hometext />
      <MediaCard />
    </div>

  )
}

export default Home