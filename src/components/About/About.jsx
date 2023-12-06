import React from "react";
import "./About.css";
import { Typography } from "@mui/material";
import Images from "../../Images/frontimg.png";

function About() {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>This is the sample quote</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img src={Images} alt="Ankur photo" className="aboutAvatar" />
          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
          >
            Ankur Sharma
          </Typography>
          <Typography>Full Stack developer</Typography>
          <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>
            I am an Engineer.
          </Typography>
        </div>
        <div>
          <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "50px",
              letterSpacing: "5px",
              textAlign: "right",
            }}
          >
            Hi! I'm Ankur Sharma, a full-stack developer skilled in C, C++,
            JavaScript, React.js, C#, and .NET. From low-level to dynamic UIs, I
            integrate diverse skills for robust applications. Excited about
            tech's possibilities, committed to continuous learning. Let's
            innovate together!
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default About;
