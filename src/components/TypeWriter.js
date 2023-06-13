import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div style={{ fontSize: "20px", fontWeight: "bold" }}>
      <Typewriter
        options={{
          strings: ["WHO WE ARE"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;