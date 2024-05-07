import { Divider } from "antd";
import React, { useEffect } from "react";
import ServicesCard from "../components/ServicesCards";

function Services() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        // <div style={{ padding: 50, textAlign: "center" }}>
        //   <Divider>
        //     <h1 style={{ fontSize: 40, fontWeight: 700 }}>OUR SERVICES</h1>
        //   </Divider>
        // <ServicesCard />

        // </div>
        <div className="flex flex-col items-center">
            <h1 className="mt-40 md:text-5xl 2xl"><b>OUR SERVICES</b></h1>
            <ServicesCard />
        </div>
    );
}

export default Services;
