import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Services from './Services';
import MediaCard from '../components/Cards';

function Home() {
  return (
    <div >Home
      <MediaCard />
    </div>

  )
}

export default Home