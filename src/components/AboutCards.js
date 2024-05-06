import React from "react";
import { Card } from "antd";
import varun from "../Images/VarunD.png";
import jayesh from "../Images/JayeshA.png";
import krishna from "../Images/Krishna.png";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
    AiFillLinkedin,
} from "react-icons/ai";

const { Meta } = Card;

const data = [
    {
        id: 1,
        title: "ABOUT ME",
        image: varun,
        // text color black
        description: "",
    },
    {
        id: 2,
        title: "ABOUT ME",
        image: jayesh,
    },
    {
        id: 3,
        title: "ABOUT ME",
        image: krishna,
    }
];

function AboutCard() {
    return (
        <div className="grid mx-auto md:grid-cols-3 sm:grid-cols-3 grid-cols-3">
            {data.map((item) => {
                return (
                    <div className="md:w-[475px] flex flex-col mx-5 my-10 border-2 rounded-md p-3 bg-[#FFFFFF]">
                        <h1 className="text-lg text-center font-semibold">
                            {item.title}
                        </h1>
                        <img
                            className="w-[60%] rounded-md mt-2 mx-auto"
                            src={item.image}
                        />
                        <p className="mt-4 font-sans text-center justify-center">Know More
                        <div className="flex justify-center mt-2">
                        <Link to="https://www.linkedin.com/in/ca-varun-darak-adal/" target="_blank">
                            <AiFillLinkedin
                                style={{
                                    fontSize: "30px",
                                }}
                            />
                        </Link>
                        </div>
                        </p>
                    </div>
                );
            })}
        </div>
    );
}

export default AboutCard;

{
    /* <Card
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
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2px' }}> */
}
{
    /* // <a href="your-link-here">Click Here</a> */
}
{
    /* <Link to='https://www.linkedin.com/in/harsh-d-07a873124' target="_blank"><AiFillLinkedin style={{ fontSize: "30px", justifyContent:'center'}}/></Link>
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
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2px' }}> */
}
{
    /* <a href="your-link-here">Click Here</a> */
}
{
    /* <Link to='https://www.linkedin.com/in/harsh-d-07a873124' target="_blank"><AiFillLinkedin style={{ fontSize: "30px", justifyContent:'center'}}/></Link>
          </div>
      }
          style={{ marginTop: "20px" }}/>
      </Card> */
}
{
    /* <Card
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
      </Card> */
}
// </div>
//   );
// }

// export default AboutCard;
