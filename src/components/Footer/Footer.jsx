import React from "react";
import "./Footer.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About me</Typography>
        <Typography>
          "Hi, I'm Ankur Sharma, a versatile Full-Stack Developer and
          freelancer. My diverse portfolio showcases innovative projects,
          ensuring correctness and efficiency in every line of code. Explore the
          range of my skills and innovation!"
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h5">Social Media</Typography>
        <a href="https://github.com/ankurpysics01" target="black">
          <BsGithub />
        </a>
        <a href="https://Youtube.com/" target="black">
          <BsYoutube />
        </a>
        <a href="https://www.instagram.com/ankursharmaetc/" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/ankur-sharma-g/" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Footer;
