import React from 'react';
import { Card } from 'antd';
import logo from '../Images/WhatsApp Image 2022-09-12 at 3.37.38 PM.jpeg';
import Tilt from "react-parallax-tilt";

const { Meta } = Card;

function MediaCard() {
  return (
    <div >
       {/* style={{ display: 'flex', justifyContent: 'center' }}> */}
      <Card
        title="ABOUT ME"
        hoverable
        style={{
          width: 380,
          margin: 50,
          textAlign: 'center',
          padding: 30,
          borderRadius: 75,
          backgroundColor: '#D2E9E9',
          display: "inline-grid",          
        }}
        cover={<Tilt><img alt="example" src={logo} /></Tilt>}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Card
        title="ABOUT ME"
        hoverable
        style={{
          width: 380,
          margin: 50,
          textAlign: 'center',
          padding: 30,
          borderRadius: 75,
          backgroundColor: '#D2E9E9',
          display: "inline-grid",          
        }}
        cover={<Tilt><img alt="example" src={logo} /></Tilt>}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      {/* <Card
        title="ABOUT ME"
        hoverable
        style={{
          width: 380,
          margin: 50,
          textAlign: 'center',
          padding: 30,
          borderRadius: 75,
          backgroundColor: '#D2E9E9',
        }}
        cover={<img alt="example" src={logo} />}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card> */}
    </div>
  );
}

export default MediaCard;