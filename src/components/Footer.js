import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaLocationArrow } from 'react-icons/fa';
import { MdWhatsapp } from 'react-icons/md';



const FooterArea = () => {
    return (
      <div className="flex flex-col">
        <div className="bg-gray-900 text-white p-3 grid grid-cols-1 lg:grid-cols-3">
          {/* Left Section */}
          <div className="text-white relative py-8 lg:pl-8 flex flex-col justify-start items-start">
            <h1 className="text-3xl lg:mt-8">
              Agarwal Darak & Associates LLP
            </h1>
            <h2 className="text-xl mb-4 mt-2">
              © 2023 ADAL
            </h2>
            <h2>
              <a href="mailto:info@adal.com" className="hover:text-blue-500">
                info@adal.com
              </a>
            </h2>
            <div className="flex mt-4 items-center">
              <a
                href="https://www.linkedin.com/company/agarwal-darak-associates-llp/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500 mr-4"
              >
                <AiFillLinkedin style={{ fontSize: '30px' }} />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=919028330031&text=Hello wanted to connect with you."
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500"
              >
                <MdWhatsapp style={{ fontSize: '30px' }} />
              </a>
            </div>
          </div>
  
          {/* Center Section with Vertical Line */}
          <div className="relative flex flex-col items-center justify-start lg:flex-row lg:items-start lg:mt-8">
            <div className="hidden lg:block lg:border-l lg:border-white mx-4" style={{ height: '100%' }}></div>
            <div className="lg:hidden w-full border-t border-white mt-4 mb-4"></div>
            <div className="lg:text-left text-left">
            <div className="text-white relative flex flex-col justify-start items-start">
              <h1 className="text-3xl lg:mt-8">
                Precision Tax Advisors
              </h1>
              <h2 className="text-xl mb-4 mt-2">
                Tax Planners and Consultants
              </h2>
              </div>
            </div>
            <div className="lg:hidden w-full border-t border-white mt-4 mb-4"></div>
          </div>
  
          {/* Right Section */}
          <div className="text-white relative py-8 lg:pl-4 flex flex-col justify-start items-start">
            <div>
              <h1 className="text-2xl lg:mt-8">
                Office Address
              </h1>
              <div className="hover:text-blue-500 mt-2">
                <div className="flex items-center mt-2">
                  <a href="https://g.co/kgs/BzkeZe8" target="_blank" rel="noopener noreferrer">
                    <FaLocationArrow className="hover:text-blue-500 mr-2" style={{ fontSize: '25px' }} />
                  </a>
                  <h2 className="text-xl">
                    <a href="https://g.co/kgs/BzkeZe8">: UG 05, Raviraj CRU,</a>
                  </h2>
                </div>
                <div className="flex items-center">
                  <h2 className="text-xl">
                    <a href="https://g.co/kgs/BzkeZe8">Bibwewadi - Kondhawa Rd.,</a>
                  </h2>
                </div>
                <div className="flex items-center">
                  <h2 className="text-xl">
                    <a href="https://g.co/kgs/BzkeZe8">Pune - 411037</a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
export default FooterArea;