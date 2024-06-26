// import React from 'react';
// import HomeLogo from '../assets/Home.jpg';


// const Hometext = () => {
//   return (
//     <div className="max-w-2xl text-white relative pl-4 lg:pl-8 py-8 lg:pl-0 lg:text-left">
//       <h1 className="text-8xl mb-6" style={{ marginTop: '80px' }}>
//       We rise by lifting others
//       </h1>
//       <h1 className="text-4xl mb-6">
//       Striving hard to make a positive impact
//       </h1>
//     </div>
//   );
// };

// function Home() {
//   return (
//     <div style={{ minHeight: '100vh', position: 'relative' }}>
//       <img
//         src={HomeLogo}
//         className="absolute inset-0 w-full h-full object-cover"
//         alt="Home Background"
//         style={{ zIndex: -1 }}
//       />
//       <div className="absolute inset-0 bg-black opacity-50"></div>
//       <Hometext />
//     </div>
//   );
// }
// export default Home;


import React, { useEffect, useState, useRef } from 'react';
import { Card } from "antd";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { MdWhatsapp } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";
import Home1 from '../Images/Home1.jpeg';
import Home2 from '../Images/Home2.jpeg';
import Home5 from '../Images/Home3.png';
import Home6 from '../Images/Home4.png';
import img1 from '../assets/FMCG.png';
import img2 from '../assets/InfrastructureandRealEstate.png';
import img3 from '../assets/Manufacturing.png';
import img4 from '../assets/Jewellery.png';
import img5 from '../assets/HealthCare.png';
import img6 from '../assets/Lifestyle.png';
import img7 from '../assets/NBFCsandFinancialServices.png';
import FooterArea from '../components/Footer';
import Homed from '../Images/Image1desktop.jpeg';
import Homed1 from '../Images/Image2desktop.jpeg';
import Homed2 from '../Images/Image3desktop.jpeg';
import Homed3 from '../Images/Image4desktop.jpeg';
import Homem from '../Images/Image1mobile.jpeg';
import Homem1 from '../Images/Image2mobile.jpeg';
import Homem2 from '../Images/Image3mobile.jpeg';
import Homem3 from '../Images/Image4mobile.jpeg';



const { Meta } = Card;

// const images = [Home1, Home2, Home5, Home6];

// const LandingPage = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [prevImageIndex, setPrevImageIndex] = useState(0);
//   const [isInitialLoad, setIsInitialLoad] = useState(true);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsTransitioning(true);
//       setPrevImageIndex(currentImageIndex);
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//       setIsInitialLoad(false);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [currentImageIndex]);

//   const handlePrevClick = () => {
//     setIsTransitioning(true);
//     setPrevImageIndex(currentImageIndex);
//     setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//     setIsInitialLoad(false);
//   };

//   const handleNextClick = () => {
//     setIsTransitioning(true);
//     setPrevImageIndex(currentImageIndex);
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     setIsInitialLoad(false);
//   };

//   return (
//     <div className="relative w-full h-screen overflow-hidden mt-10">
//       {images.map((image, index) => (
//         <img
//           key={index}
//           src={image}
//           alt={`Slide ${index}`}
//           className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
//             } ${isInitialLoad
//               ? 'animate-fade-in'
//               : isTransitioning
//                 ? index === currentImageIndex
//                   ? 'animate-fade-in'
//                   : 'opacity-0'
//                 : ''
//             }`}
//           onAnimationEnd={() => setIsTransitioning(false)}
//         />
//       ))}
//       <div className="absolute inset-0 flex items-center justify-between p-4">
//         <button
//           onClick={handlePrevClick}
//           className="text-white bg-black bg-opacity-50 rounded-full p-2 z-20"
//         >
//           <FaArrowLeft size={30} />
//         </button>
//         <button
//           onClick={handleNextClick}
//           className="text-white bg-black bg-opacity-50 rounded-full p-2 z-20"
//         >
//           <FaArrowRight size={30} />
//         </button>
//       </div>
//     </div>
//   );
// };


// const images = [Home1, Home2, Home5, Home6];

// const LandingPage = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [prevImageIndex, setPrevImageIndex] = useState(0);
//   const [isInitialLoad, setIsInitialLoad] = useState(true);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsTransitioning(true);
//       setPrevImageIndex(currentImageIndex);
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//       setIsInitialLoad(false);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [currentImageIndex]);

//   const handlePrevClick = () => {
//     setIsTransitioning(true);
//     setPrevImageIndex(currentImageIndex);
//     setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//     setIsInitialLoad(false);
//   };

//   const handleNextClick = () => {
//     setIsTransitioning(true);
//     setPrevImageIndex(currentImageIndex);
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     setIsInitialLoad(false);
//   };

//   return (
//     <div className="relative w-70% h-screen overflow-hidden mt-10">
//       {images.map((image, index) => (
//         <img
//           key={index}
//           src={image}
//           alt={`Slide ${index}`}
//           className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
//             } ${isInitialLoad
//               ? 'animate-fade-in'
//               : isTransitioning
//                 ? index === currentImageIndex
//                   ? 'animate-fade-in'
//                   : 'opacity-0'
//                 : ''
//             }`}
//           onAnimationEnd={() => setIsTransitioning(false)}
//           style={{ objectFit: 'contain' }} // Change this to 'contain' if you prefer no cropping
//         />
//       ))}
//       <div className="absolute inset-0 flex items-center justify-between p-4">
//         <button
//           onClick={handlePrevClick}
//           className="text-white bg-black bg-opacity-50 rounded-full p-2 z-20"
//         >
//           <FaArrowLeft size={30} />
//         </button>
//         <button
//           onClick={handleNextClick}
//           className="text-white bg-black bg-opacity-50 rounded-full p-2 z-20"
//         >
//           <FaArrowRight size={30} />
//         </button>
//       </div>
//     </div>
//   );
// };



// const images = [Home1, Home2, Home5, Home6];

// const LandingPage = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [prevImageIndex, setPrevImageIndex] = useState(0);
//   const [isInitialLoad, setIsInitialLoad] = useState(true);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsTransitioning(true);
//       setPrevImageIndex(currentImageIndex);
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//       setIsInitialLoad(false);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [currentImageIndex]);

//   const handlePrevClick = () => {
//     setIsTransitioning(true);
//     setPrevImageIndex(currentImageIndex);
//     setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//     setIsInitialLoad(false);
//   };

//   const handleNextClick = () => {
//     setIsTransitioning(true);
//     setPrevImageIndex(currentImageIndex);
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     setIsInitialLoad(false);
//   };

//   return (
//     <div className="relative w-full h-screen overflow-hidden mt-10 md:w-90%">
//       {images.map((image, index) => (
//         <img
//           key={index}
//           src={image}
//           alt={`Slide ${index}`}
//           className={`absolute top-0 left-0 w-full h-full object-contain md:object-cover transition-opacity duration-1000 transform md:scale-85 ${index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
//             } ${isInitialLoad
//               ? 'animate-fade-in'
//               : isTransitioning
//                 ? index === currentImageIndex
//                   ? 'animate-fade-in'
//                   : 'opacity-0'
//                 : ''
//             }`}
//           onAnimationEnd={() => setIsTransitioning(false)}
//         />
//       ))}
//       <div className="absolute inset-0 flex items-center justify-between p-4">
//         <button
//           onClick={handlePrevClick}
//           className="text-white bg-black bg-opacity-50 rounded-full p-2 z-20"
//         >
//           <FaArrowLeft size={30} />
//         </button>
//         <button
//           onClick={handleNextClick}
//           className="text-white bg-black bg-opacity-50 rounded-full p-2 z-20"
//         >
//           <FaArrowRight size={30} />
//         </button>
//       </div>
//     </div>
//   );
// };



const desktop = [Homed, Homed1, Homed2, Homed3];
const mobile = [Homem, Homem1, Homem2, Homem3];

const LandingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [prevImageIndex, setPrevImageIndex] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [images, setImages] = useState(window.innerWidth < 768 ? mobile : desktop);

  useEffect(() => {
    const updateImages = () => {
      if (window.innerWidth < 768) {
        setImages(mobile);
      } else {
        setImages(desktop);
      }
    };

    updateImages(); // Initial check

    window.addEventListener('resize', updateImages);
    return () => window.removeEventListener('resize', updateImages);
  }, []);

  useEffect(() => {
    console.log('Current images:', images); // Log images
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setPrevImageIndex(currentImageIndex);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsInitialLoad(false);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);

  const handlePrevClick = () => {
    setIsTransitioning(true);
    setPrevImageIndex(currentImageIndex);
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setIsInitialLoad(false);
  };

  const handleNextClick = () => {
    setIsTransitioning(true);
    setPrevImageIndex(currentImageIndex);
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    setIsInitialLoad(false);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden mt-10 md:w-90%">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`absolute top-0 left-0 w-full h-full object-contain md:object-cover transition-opacity duration-1000 transform md:scale-85 ${index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            } ${isInitialLoad
              ? 'animate-fade-in'
              : isTransitioning
                ? index === currentImageIndex
                  ? 'animate-fade-in'
                  : 'opacity-0'
                : ''
            }`}
          onAnimationEnd={() => setIsTransitioning(false)}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={handlePrevClick}
          className="text-white bg-black bg-opacity-50 rounded-full p-2 z-20"
        >
          <FaArrowLeft size={30} />
        </button>
        <button
          onClick={handleNextClick}
          className="text-white bg-black bg-opacity-50 rounded-full p-2 z-20"
        >
          <FaArrowRight size={30} />
        </button>
      </div>
    </div>
  );
};




const data = [
  {
    id: 1,
    title: "Integrity",
    description: (
      "We are fair, honest and transparent in our conduct; everything we do must stand the test of public scrutiny. We observe highest ethical standards, preserve client confidence, maintain an independent perspective and manage client and firm resources cost-effectively."
    ),
  },
  {
    id: 2,
    title: "Responsibility",
    description: "We take responsibility for our actions and are conscious about environmental and social principles in our work."
  },
  // {
  //     id: 3,
  //     title: "Meritocracy",
  //     description: "We are passionate about achieving the highest standards of quality, always promoting meritocracy. We believe talent and hard- work have no substitute."
  // },
  // {
  //     id: 4,
  //     title: "Pioneering",
  //     description: "We are bold and agile, courageously taking on challenges and using deep customer insight to develop innovative solutions. We constantly look to improve upon our services, cultivating our knowledge, skill and attitude to achieve excellence."
  // },
  {
    id: 5,
    title: "Unity",
    description: "We invest in our people and partners, enable continuous learning, and build caring and collaborative relationships based on trust and mutual respect. We are always receptive to new ideas and new ways of thinking, embracing change and sharing knowledge"
  },
  {
    id: 6,
    title: "Collaboration",
    description: "We continuously strive to receive feedback from all stakeholders, improve upon it and act. We regard the freedom of expression of thought as one of the yardsticks of growth. Individual strengths when combined to form a team helps to accelerate performance & output. We align individual goals with that of the team & the Firm."
  },
];


// const HomeCard = () => {
//   return (
//     <div className="flex flex-col items-center">
//     <div className="grid grid-cols-3 mt-18">
//           {data.map((item) => {
//               return (
//                   <div className="md:w-[345px] flex flex-col mx-2 my-8 rounded-xl border-2 ">
//                     <div className="top-0 left-0 w-full h-0.5 bg-black rounded-t-lg"></div>
//                       <h1 className="text-lg text-center font-semibold">{item.title}</h1>
//                       {/* <img
//                           className="w-[60%] rounded-md mt-2 mx-auto"
//                           src={item.image}
//                       /> */}
//                       <p className="mt-4 font-sans text-center">{item.description}</p>
//                       {/* <p className="mt-4 font-sans text-center">To Know More</p> */}
//                       {/* <Link
//                           to={`/services/${item.title}`}
//                           className="text-black-500 mt-2 text-center hover:text-gray-500"
//                       >
//                           Read More
//                       </Link> */}
//                   </div>
//               );
//           })}
//       </div>
//       </div>
//   );
// }

const justifyStyle = {
  textAlign: 'justify',
};

const HomeCard = () => {
  return (
    <div className="flex flex-col items-center px-4 " style={justifyStyle}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full max-w-screen-lg">
        {data.map((item) => {
          return (
            <div key={item.id} className="flex flex-col my-8 border-2 p-4 relative md:w-auto" style={{ borderRadius: '12px' }}>
              {/* Add the curved grey line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gray-700" style={{ marginTop: '-1px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}></div>
              <h1 className="text-lg text-center font-semibold mt-3">{item.title}</h1>
              <p className="mt-4 font-sans text-center mb-3">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>

  );
}



const Hometext = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-5xl text-center" style={{ marginTop: '100px', fontFamily: 'Times New Roman' }}>
        Our Ethos
      </h1>
      <HomeCard />
    </div>
    // <div className="max-w-2xl text-white relative pl-4 lg:pl-8 py-8 lg:pl-0 lg:text-left">
    //   <h1 className="text-8xl mb-6" style={{ marginTop: '100px' ,fontFamily: 'Times New Roman'}}>
    //     We rise by lifting others
    //   </h1>
    //  <h1 className="text-4xl mb-6" style={{ marginTop : '60px' ,fontFamily: 'Times New Roman'}}>
    //    Striving hard to make a positive impact
    //  </h1>
    //</div>
  );
};

// const img = [img1, img2, img3, img4, img5, img6, img7];

// const HomeInfo = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % img.length);
//     }, 10000); // Auto-scroll every 10 seconds

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollTo({
//         left: (scrollRef.current.clientWidth / 5) * currentIndex,
//         behavior: 'smooth',
//       });
//     }
//   }, [currentIndex]);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % img.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? img.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="relative flex flex-col items-center">
//       <div className="flex flex-wrap justify-left items-center mt-2 w-full mx-auto">
//         <h1
//           className="text-4xl mb-8 max-w-2xl relative pl-4 lg:pl-9 py-8 lg:pl-0 lg:text-left"
//           style={{ marginTop: '100px', fontFamily: 'Times New Roman' }}
//         >
//           Industries We Serve
//         </h1>
//       </div>
//       <div className="relative w-full overflow-x-hidden">
//         <div
//           ref={scrollRef}
//           className="flex space-x-4 p-4 transition-transform duration-500 ease-in-out"
//         >
//           {img.map((img, index) => (
//             <img
//               key={index}
//               src={img}
//               alt={`Slide ${index}`}
//               className="min-w-[20%] lg:min-w-[20%] md:min-w-[25%] sm:min-w-[33.33%] object-cover rounded-lg"
//             />
//           ))}
//         </div>
//         <button
//           onClick={handlePrev}
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
//         >
//           <AiOutlineLeft size={30} />
//         </button>
//         <button
//           onClick={handleNext}
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
//         >
//           <AiOutlineRight size={30} />
//         </button>
//         <div className="absolute bottom-4 w-full flex justify-center">
//           {img.map((_, index) => (
//             <div
//               key={index}
//               className={`h-2 w-2 rounded-full mx-1 ${
//                 index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };


const img = [img1, img2, img3, img5, img7];
const HomeInfo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(7);

  /* useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % img.length);
    }, 3000); // Auto-scroll every 10 seconds

    return () => clearInterval(interval);
  }
  , []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: (scrollRef.current.clientWidth / 5) * currentIndex,
        behavior: 'smooth',
      });
    }
  }
  , [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % img.length);
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? img.length - 1 : prevIndex - 1
    );
  }
*/
  return (
    <div className="relative flex flex-col items-center">
      <div className="flex flex-wrap justify-center items-center mt-2 w-full mx-auto">
        <h1
          className="text-4xl mb-8 max-w-2xl text-center"
          style={{ marginTop: '40px', fontFamily: 'Times New Roman' }}
        >
          Industries We Serve
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 w-full max-w-screen-lg">
        {img.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="w-full object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};


// const HomeInfo = () => {
//   return(
//     <div className="flex flex-col items-center">
//     <div className="flex flex-wrap justify-left items-center mt-2 space-x-4 w-full mx-auto">
//     <h1 className="text-4xl mb-8 max-w-2xl relative pl-4 lg:pl-9 py-8 lg:pl-0 lg:text-left" style={{ marginTop: '100px' ,fontFamily: 'Times New Roman'}}>
//       Industries We Serve
//       </h1>
//       {/* here i want in this section i want add horizontal scroll with fields like nbfc,fmcg,infrastructure,manufacturing,jewellary,healthcare,lifestyle dealerships which will be shown 5 on desktop view and then adjust accordinglt for the mobile view */}
//     </div>
//     </div>
//   )
// }


// const HomeInfo = () => {
//   return(
//     <div className="flex flex-wrap justify-left items-center mt-10 space-x-4 w-full mx-auto">
//     {/* <h2 className="text-4xl my-6 text-center"></h2> */}
//       <div className="flex flex-wrap justify-center"  style={{ marginTop: '80px' }}>
//         <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-6">
//           <BsExclamationTriangle style={{fontSize: "80px"}}/>
//           <h3 className="text-2xl mb-2"><b>Assessing high risk situations</b></h3>
//           <p>A risk mitigation plan is developed after identifying areas at high risk.</p>
//         </div>
//         <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-6">
//         <BsExclamationTriangle style={{fontSize: "80px"}}/>
//           <h3 className="text-2xl mb-2"><b>Methodology for auditing</b></h3>
//           <p>An audit based on risk identification and resolves problem in a timely manner.</p>
//         </div>
//         <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-6">
//         <PiSealCheckBold style={{fontSize: "80px"}}/>
//           <h3 className="text-2xl mb-2"><b>Resolving complex problems</b></h3>
//           <p>A wide range of solutions to complex strategic, tax and operational issues for all sectors including manufacturing, real estate and services as well as for the financial sector.</p>
//         </div>
//         <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-6">
//         <AiOutlineFileSearch style={{fontSize: "80px"}}/>
//           <h3 className="text-2xl mb-2"><b>Reviews and Recommendations</b></h3>
//           <p>Assisting with best practices and accounting & financial reporting challenges, as well as complying with relevant accounting standards.</p>
//         </div>
//         <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-6">
//         <BsGraphUpArrow style={{fontSize: "80px"}}/>
//           <h3 className="text-2xl mb-2"><b>Thinking in terms of future growth</b></h3>
//           <p>Analyzing future growth synergies and suggesting probable expansion areas.</p>
//         </div>
//         <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-6">
//         <BsExclamationTriangle style={{fontSize: "80px"}}/>
//           <h3 className="text-2xl mb-2"><b>Innovation</b></h3>
//           <p>We promote innovative thinking and reward initiatives to explore best practices and develop comprehensive solutions to business challenges.</p>
//         </div>
//       </div>
//       </div>
//   )
// }

// const FooterArea = () => {
//   return (
//     // <div className="flex flex-col ">
//     //   <div className='bg-gray-900 text-white p-3 flex justify-between'>
//     //     <div className="text-white relative lg:pl-8 py-8 lg:text-left">
//     //       <div style={{ marginLeft: '70px' }}>
//     //         <h1 className="text-3xl" style={{ marginTop: '80px' }}>
//     //           Agarwal Darak & Associates LLP
//     //         </h1>
//     //         <h2 className="text-xl mb-4" style={{ marginTop: '10px' }}>
//     //           {/* add copyright symbol */}
//     //           © 2023 ADAL
//     //         </h2>
//     //         <div>
//     //           <h2><a href="mailto:info@adal.com" className='hover:text-blue-500'>
//     //             info@adal.com</a></h2>
//     //           {/* add a horizontal razor line which will be white in color */}
//     //           <hr style={{ borderTop: '0.25px solid white', width: '80%', marginTop: '20px' }} />
//     //           {/* add linkedin & whatsapp icon link */}
//     //           <div className="flex mt-4">
//     //             <a href="https://www.linkedin.com/company/agarwal-darak-associates-llp/?originalSubdomain=in" target="_blank">
//     //               <AiFillLinkedin
//     //                 className='hover:text-gray-500'
//     //                 style={{
//     //                   fontSize: "30px",
//     //                 }}
//     //               />
//     //             </a>
//     //             &nbsp;&nbsp;&nbsp;&nbsp;
//     //             <a href="https://api.whatsapp.com/send/?phone=919028330031&text=Hello wanted to connect with you." target="_blank">
//     //               <MdWhatsapp
//     //                 className='hover:text-gray-500'
//     //                 style={{
//     //                   fontSize: "30px",
//     //                 }}
//     //               />
//     //             </a>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </div>
//     //     <div className="text-white relative pl-4 lg:pl-8 py-8 lg:pl-0 lg:text-left">
//     //       <div style={{ marginRight: '90px' }}>
//     //         <h1 className="text-2xl" style={{ marginTop: '80px' }}>
//     //           Office Address
//     //         </h1>
//     //         <div className='hover:text-blue-500'>
//     //           <div style={{ display: 'flex', alignItems: 'center' }}>
//     //             <a href='https://g.co/kgs/qx9HNzw'
//     //               target="_blank">
//     //               <FaLocationArrow className='hover:text-blue-500' style={{ marginRight: '5px', marginTop: '10px', fontSize: "25px" }} />
//     //             </a>
//     //             <h2 className="text-xl" style={{ marginTop: '10px' }}>
//     //               <a href='https://g.co/kgs/qx9HNzw'>
//     //                 : UG 05, Raviraj CRU,
//     //               </a>
//     //             </h2>
//     //           </div>
//     //           <div style={{ display: 'flex', alignItems: 'center' }}>
//     //             <h2 className="text-xl">
//     //               <a href='https://g.co/kgs/qx9HNzw'>
//     //                 Bibwewadi - Kondhawa Rd.,
//     //               </a>
//     //             </h2>
//     //           </div>
//     //           <div style={{ display: 'flex', alignItems: 'center' }}>
//     //             <h2 className="text-xl">
//     //               <a href='https://g.co/kgs/qx9HNzw'>
//     //                 Pune - 411037
//     //               </a>
//     //             </h2>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>

//     <div className="flex flex-col">
//       <div className='bg-gray-900 text-white p-3 grid grid-cols-1 lg:grid-cols-2'>
//         <div className="text-white relative py-8 lg:pl-8 flex justify-center items-center">
//           <div>
//             <h1 className="text-3xl" style={{ marginTop: '80px' }}>
//               Agarwal Darak & Associates LLP
//             </h1>
//             <h2 className="text-xl mb-4" style={{ marginTop: '10px' }}>
//               {/* add copyright symbol */}
//               © 2023 ADAL
//             </h2>
//             <div>
//               <h2>
//                 <a href="mailto:info@adal.com" className="hover:text-blue-500">
//                   info@adal.com
//                 </a>
//               </h2>
//               {/* add a horizontal razor line which will be white in color */}
//               <hr className="border-white border-t mt-4 mb-2" />
//               {/* add linkedin & whatsapp icon link */}
//               <div className="flex mt-2 items-center">
//                 <a href="https://www.linkedin.com/company/agarwal-darak-associates-llp/?originalSubdomain=in" target="_blank">
//                   <AiFillLinkedin
//                     className="hover:text-gray-500 mr-4"
//                     style={{
//                       fontSize: "30px",
//                     }}
//                   />
//                 </a>
//                 <a href="https://api.whatsapp.com/send/?phone=919028330031&text=Hello wanted to connect with you." target="_blank">
//                   <MdWhatsapp
//                     className="hover:text-gray-500"
//                     style={{
//                       fontSize: "30px",
//                     }}
//                   />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="text-white relative py-8 lg:pl-4 flex justify-center items-center">
//           <div style={{ marginRight: '90px' }}>
//             <h1 className="text-2xl" style={{ marginTop: '80px' }}>
//               Office Address
//             </h1>
//             <div className="hover:text-blue-500">
//               <div className="flex items-center mt-2">
//                 <a href="https://g.co/kgs/BzkeZe8" target="_blank">
//                   <FaLocationArrow className="hover:text-blue-500 mr-2" style={{ fontSize: "25px" }} />
//                 </a>
//                 <h2 className="text-xl">
//                   <a href="https://g.co/kgs/BzkeZe8">: UG 05, Raviraj CRU,</a>
//                 </h2>
//               </div>
//               <div className="flex items-center">
//                 <h2 className="text-xl">
//                   <a href="https://g.co/kgs/BzkeZe8">Bibwewadi - Kondhawa Rd.,</a>
//                 </h2>
//               </div>
//               <div className="flex items-center">
//                 <h2 className="text-xl">
//                   <a href="https://g.co/kgs/BzkeZe8">Pune - 411037</a>
//                 </h2>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>


//   )
// }


// const FooterArea = () => {
//   return (
//     <div className="flex flex-col">
//       <div className="bg-gray-900 text-white p-3 grid grid-cols-1 lg:grid-cols-3">
//         {/* Left Section */}
//         <div className="text-white relative py-8 lg:pl-8 flex flex-col justify-center items-center lg:items-start">
//           <h1 className="text-3xl" style={{ marginTop: '80px' }}>
//             Agarwal Darak & Associates LLP
//           </h1>
//           <h2 className="text-xl mb-4" style={{ marginTop: '10px' }}>
//             © 2023 ADAL
//           </h2>
//           <h2>
//             <a href="mailto:info@adal.com" className="hover:text-blue-500">
//               info@adal.com
//             </a>
//           </h2>
//           <div className="flex mt-4 items-center">
//             <a
//               href="https://www.linkedin.com/company/agarwal-darak-associates-llp/?originalSubdomain=in"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-gray-500 mr-4"
//             >
//               <AiFillLinkedin style={{ fontSize: '30px' }} />
//             </a>
//             <a
//               href="https://api.whatsapp.com/send/?phone=919028330031&text=Hello wanted to connect with you."
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-gray-500"
//             >
//               <MdWhatsapp style={{ fontSize: '30px' }} />
//             </a>
//           </div>
//         </div>

//         {/* Center Section with Vertical Line */}
//         <div className="relative flex flex-col items-center justify-center lg:flex-row">
//           <div className="hidden lg:block lg:h-full lg:border-l lg:border-white mx-4" style={{ height: '240px' }}></div>
//           <div className="lg:hidden w-full border-t border-white mt-4 mb-4"></div>
//           <div className="text-center lg:text-left">
//             <h1 className="text-3xl" style={{ marginTop: '80px' }}>
//               Precision Tax Advisors
//             </h1>
//             <h2 className="text-xl mb-4" style={{ marginTop: '10px' }}>
//               Tax Planners and Consultants
//             </h2>
//           </div>
//           <div className="lg:hidden w-full border-t border-white mt-4 mb-4"></div>
//         </div>

//         {/* Right Section */}
//         <div className="text-white relative py-8 lg:pl-4 flex justify-center items-center">
//           <div style={{ marginRight: '90px' }}>
//             <h1 className="text-2xl" style={{ marginTop: '80px' }}>
//               Office Address
//             </h1>
//             <div className="hover:text-blue-500">
//               <div className="flex items-center mt-2">
//                 <a href="https://g.co/kgs/BzkeZe8" target="_blank" rel="noopener noreferrer">
//                   <FaLocationArrow className="hover:text-blue-500 mr-2" style={{ fontSize: '25px' }} />
//                 </a>
//                 <h2 className="text-xl">
//                   <a href="https://g.co/kgs/BzkeZe8">: UG 05, Raviraj CRU,</a>
//                 </h2>
//               </div>
//               <div className="flex items-center">
//                 <h2 className="text-xl">
//                   <a href="https://g.co/kgs/BzkeZe8">Bibwewadi - Kondhawa Rd.,</a>
//                 </h2>
//               </div>
//               <div className="flex items-center">
//                 <h2 className="text-xl">
//                   <a href="https://g.co/kgs/BzkeZe8">Pune - 411037</a>
//                 </h2>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const FooterArea = () => {
//   return (
//     <div className="flex flex-col">
//       <div className="bg-gray-900 text-white p-3 grid grid-cols-1 lg:grid-cols-3">
//         {/* Left Section */}
//         <div className="text-white relative py-8 lg:pl-8 flex flex-col justify-start items-start">
//           <h1 className="text-3xl lg:mt-8">
//             Agarwal Darak & Associates LLP
//           </h1>
//           <h2 className="text-xl mb-4 mt-2">
//             © 2023 ADAL
//           </h2>
//           <h2>
//             <a href="mailto:info@adal.com" className="hover:text-blue-500">
//               info@adal.com
//             </a>
//           </h2>
//           <div className="flex mt-4 items-center">
//             <a
//               href="https://www.linkedin.com/company/agarwal-darak-associates-llp/?originalSubdomain=in"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-gray-500 mr-4"
//             >
//               <AiFillLinkedin style={{ fontSize: '30px' }} />
//             </a>
//             <a
//               href="https://api.whatsapp.com/send/?phone=919028330031&text=Hello wanted to connect with you."
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-gray-500"
//             >
//               <MdWhatsapp style={{ fontSize: '30px' }} />
//             </a>
//           </div>
//         </div>

//         {/* Center Section with Vertical Line */}
//         <div className="relative flex flex-col items-center justify-start lg:flex-row lg:items-start lg:mt-8">
//           <div className="hidden lg:block lg:border-l lg:border-white mx-4" style={{ height: '100%' }}></div>
//           <div className="lg:hidden w-full border-t border-white mt-4 mb-4"></div>
//           <div className="lg:text-left text-left">
//           <div className="text-white relative flex flex-col justify-start items-start">
//             <h1 className="text-3xl lg:mt-8">
//               Precision Tax Advisors
//             </h1>
//             <h2 className="text-xl mb-4 mt-2">
//               Tax Planners and Consultants
//             </h2>
//             </div>
//           </div>
//           <div className="lg:hidden w-full border-t border-white mt-4 mb-4"></div>
//         </div>

//         {/* Right Section */}
//         <div className="text-white relative py-8 lg:pl-4 flex flex-col justify-start items-start">
//           <div>
//             <h1 className="text-2xl lg:mt-8">
//               Office Address
//             </h1>
//             <div className="hover:text-blue-500 mt-2">
//               <div className="flex items-center mt-2">
//                 <a href="https://g.co/kgs/BzkeZe8" target="_blank" rel="noopener noreferrer">
//                   <FaLocationArrow className="hover:text-blue-500 mr-2" style={{ fontSize: '25px' }} />
//                 </a>
//                 <h2 className="text-xl">
//                   <a href="https://g.co/kgs/BzkeZe8">: UG 05, Raviraj CRU,</a>
//                 </h2>
//               </div>
//               <div className="flex items-center">
//                 <h2 className="text-xl">
//                   <a href="https://g.co/kgs/BzkeZe8">Bibwewadi - Kondhawa Rd.,</a>
//                 </h2>
//               </div>
//               <div className="flex items-center">
//                 <h2 className="text-xl">
//                   <a href="https://g.co/kgs/BzkeZe8">Pune - 411037</a>
//                 </h2>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };






function Home() {
  // const [refreshed, setRefreshed] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>
      <div>
        <LandingPage />
      </div>
      <div>
        {/* <img
        src={HomeLogo}
        className="absolute inset-0 w-full h-full object-cover"
        alt="Home Background"
        style={{ zIndex: -1 }}
      /> */}
        {/* <div className="absolute inset-0 opacity-50"></div> */}
        <Hometext />
      </div>
      <div className="flex flex-col items-center">
        {/* <h1 className="mt-10 md:text-7xl 2xl">We Deliver What We Promise</h1> */}
        <HomeInfo />
      </div>
      <FooterArea />

      {/* add a button which will redirect to Contact us page */}
      {/* <div className="flex justify-center">
      <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-20 mb-20"
      onClick={() => window.location.href='ca-varun-associates-site#/contact'}
      >
        Get In Touch
      </button>
      </div> */}
    </div>

  );
}

export default Home;
