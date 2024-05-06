import React, { useEffect } from "react";
import { Divider } from "antd";
import AboutCard from "../components/AboutCards";
import TypeWriter from "../components/TypeWriter";
import AuditLogo from "../assets/Audit.jpg";

const AboutUstext = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div>
        <div className="flex flex-col items-center p-2">
            {/* add background image */}
            <h1 className="text-5xl font-semibold mt-8 mb-6">OUR STORY</h1>
            <p className="text-2xl">
            Every great journey begins with a small step. We started our journey in the year 2022 under 
            the strong leadership of Hrishikesh Gawali and Gaurav Murkute. ​We have offices in the city of Pune, 
            known for its rich cultural heritage while having a cosmopolitan edge fueled by its thriving IT 
            industry as well as in the vibrant city of Nashik. ​As a multidisciplinary firm, we hire the skillful 
            and best people with specializations that fit the firm's multidisciplinary services. 
            ​We focus on auditing, taxation, financial advisory, due diligence, and management consulting as 
            our core competencies. With HGM & Co LLP, you are assured of expert guidance in all legal, 
            financial, managerial, and administrative facets of business.​ As we look forward to a brighter 
            future, we are even more determined 
            than ever to keep the legacy of faith, cooperation and unity alive!
            </p>
        </div>
        <div className="flex flex-col items-center p-2">
        {/* add background image */}
        <h1 className="text-5xl font-semibold mt-4 mb-6">Our Vision</h1>
        <p className="text-2xl">
        We strive to establish ourselves as a nationally recognized leader in financial and professional 
        services for high net worth individuals and businesses alike, providing a work environment 
        where staff can thrive and grow in their careers.
        </p>
    </div>
    <div className="flex flex-col items-center p-2">
        {/* add background image */}
        <h1 className="text-5xl font-semibold mt-4 mb-6">Our Mission</h1>
        <p className="text-2xl">
        Our mission is to provide our clients with creative solutions that integrate people,processes 
        and technology to facilitate the achievements of their strategic objectives and growth. 
        Developing an enduring business relationship between firm team, partners and clients through 
        trust and loyalty. Create an environment that fosters creative thinking, innovative ideas, 
        develops skills across diverse disciplines and challenges staff to perform at their highest 
        levels.
        </p>
    </div>
    </div>
    );
};

function AboutUs() {
    return (
        <div className="flex flex-col items-center p-10">
            <Divider>
                {/* <TypeWriter /> */}
            </Divider>
            <AboutUstext />
            <AboutCard />
        </div>
    );
}

export default AboutUs;
