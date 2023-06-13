import React from 'react';


const Hometext = () => {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">
        Varun Darak and Associates
      </h1>
      <p className="text-lg mb-8">
        Varun Darak and Associates is a professionally managed firm of Chartered Accountants having its registered office in Pune, India.
        We provide diversified services in the fields of Audit, Direct Taxes, Appellate Services, Indirect Taxes, Finance, Value-added Management Consultancy, 
        and Virtual CFO Services PAN India. We have a proven track record of competency, assurance, and delivery.
      </p>
      <p className="text-lg mb-8">
        We offer our clients a detailed understanding of the legal and regulatory environment that enables them to sail smoothly and face the challenges encountered 
        in the course of doing business. Our client base spreads from passionate start-ups to established companies. We have been working with businesses to help them grow 
        financially and make those nerve-wracking decisions.
      </p>
      {/* <p>
      <ul className="flex-center mb-8">
        <header className="text-2xl font-bold mb-6">OUR CORE VALUES</header>
        <li>INTEGRITY</li>
        <li>PROFESSIONALISM</li>
        <li>EXCELLENCE</li>
        <li>TEAMWORK</li>
      </ul>
      </p> */}
    </div>
  );
};

function Home() {
  return (
    <div style={{ padding: 50 }}>
      {/* <TypeWriter /> */}
      <Hometext />
      {/* <MediaCard /> */}
    </div>
  );
}
export default Home;
