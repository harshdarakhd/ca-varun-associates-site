// import React, { useEffect } from "react";

// function Careers() {
//     useEffect(() => {
//         window.scrollTo(0, 0);
//       }, []);

//     return (
//         <div className="flex flex-col">
//         <div className="pl-4 lg:py-8 lg:text-left" style = {{marginLeft: '40px'}}>
//             {/* <Divider>ContactUs</Divider> */}
//             <h1 className="text-6xl mt-40">Make an impact that matters.</h1>
//             <div className="text-2xl mt-20">
//             Many ideas grow better when transplanted into another mind than the one where they sprang up.
//             </div>
//             <div className="text-2xl mt-10">
//             Our goal at ADAL ASSOCIATES LLP is to build a team of individuals with competence, integrity, a 
//             passion for excellence, a desire to learn, a willingness to work hard, and more importantly, 
//             deep respect for their own commitments. A healthy work ethic and meritocracy, which rewards 
//             superior performance faster than expected, will reward them in return. ADAL ASSOCIATES LLP offers a 
//             challenging, stimulating and professional work environment where you will be an integral part 
//             of the team. We offer an exciting opportunity for you to grow on both a professional and 
//             personal level.
//             </div>
//             <div className="text-2xl mt-20">
//             Send us your CV at info@adal.com
//             </div>
//             <div className="text-2xl mt-10">
//             Your CV must contain details of your actual experience, preference if any, for specific 
//             service areas, current and expected remuneration and the period within which you can join 
//             if an offer is made.
//             </div>
//             <div className="text-2xl mt-20">
//             Wishing you all success in your career ahead.
//             </div>
//         </div>
//         </div>
//     );
// }

// export default Careers;

import React, { useEffect } from "react";

function Careers() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const justifyStyle = {
        textAlign: 'justify',
    };

    return (
        <div className="flex flex-col items-center">
            <div className="max-w-4xl px-4 py-8 lg:py-16">
                <h1 className="text-6xl mt-10 lg:mt-40 text-center">Make an impact that matters.</h1>
                <p className="text-2xl mt-10 lg:mt-20 text-center">{`Many ideas grow better when transplanted into another mind than the one where they sprang up.`}</p>
                <p className="text-2xl mt-10 lg:mt-20 text-center">
                    Our goal at Agarwal Darak & Associates is to build a team of individuals with competence, integrity, a passion for excellence, a desire to learn, a willingness to work hard, and more importantly, deep respect for their own commitments. A healthy work ethic and meritocracy, which rewards superior performance faster than expected, will reward them in return. Agarwal Darak & Associates offers a challenging, stimulating, and professional work environment where you will be an integral part of the team. We offer an exciting opportunity for you to grow on both a professional and personal level.
                </p>
                <p className="text-2xl mt-10 lg:mt-20 text-center">
                    Send us your CV at <a href="mailto:info@adal.com" className="text-blue-600">info@adal.com</a>
                </p>
                <p className="text-2xl mt-10 lg:mt-20 text-center">
                    Your CV must contain details of your actual experience, preference if any, for specific service areas, current and expected remuneration, and the period within which you can join if an offer is made.
                </p>
                <p className="text-2xl mt-10 lg:mt-20 text-center">
                    Wishing you all success in your career ahead.
                </p>
            </div>
        </div>

    );
}

export default Careers;
