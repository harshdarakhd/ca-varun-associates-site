import React from 'react';
import { Card } from 'antd';
import logo from '../Images/WhatsApp Image 2022-09-12 at 3.37.38 PM.jpeg';
import Tilt from "react-parallax-tilt";
import { Link } from 'react-router-dom';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const { Meta } = Card;

function AboutCard() {
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
        <Meta title="Know More" 
        description={
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2px' }}>
          {/* // <a href="your-link-here">Click Here</a> */}
          <Link to='https://www.linkedin.com/in/harsh-d-07a873124' target="_blank"><AiFillLinkedin style={{ fontSize: "30px", justifyContent:'center'}}/></Link>
          </div>
      }
          style={{ marginTop: "20px"}}/>
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
       <Meta title="Know More" 
        description={
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2px' }}>
          {/* <a href="your-link-here">Click Here</a> */}
          <Link to='https://www.linkedin.com/in/harsh-d-07a873124' target="_blank"><AiFillLinkedin style={{ fontSize: "30px", justifyContent:'center'}}/></Link>
          </div>
      }
          style={{ marginTop: "20px" }}/>
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

export default AboutCard;