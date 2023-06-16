import { Divider } from "antd";
import React from "react";
import ServicesCard from "../components/ServicesCards";

function Services() {
    return (
        // <div style={{ padding: 50, textAlign: "center" }}>
        //   <Divider>
        //     <h1 style={{ fontSize: 40, fontWeight: 700 }}>OUR SERVICES</h1>
        //   </Divider>
        // <ServicesCard />

        // </div>
        <div className="flex flex-col items-center">
            <h1 className="mt-8 underline md:text-4xl 2xl"><b>OUR SERVICES</b></h1>
            <ServicesCard />
        </div>
    );
}

export default Services;
