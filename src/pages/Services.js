import { Divider } from 'antd'
import React from 'react'
import ServicesCard from '../components/ServicesCards'

function Services() {
  return (
    <div style={{ padding: 50, textAlign: "center" }}>
      <Divider>
        <h1 style={{ fontSize: 40, fontWeight: 700 }}>OUR SERVICES</h1>
      </Divider>
    <ServicesCard />

    </div>
    
  )
}

export default Services