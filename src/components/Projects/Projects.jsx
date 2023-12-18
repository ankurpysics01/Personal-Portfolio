import React from "react";
import "./Projects.css";
import { Typography } from "@mui/material";
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from "@mui/icons-material";
import { Button } from "@mui/base";
import { FaRegSmileWink } from "react-icons/fa";


const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,
}) => {
  return (
    <>
      <a href={url} className="projectCard" target="black">
        <div>
          <img src={projectImage} alt="projectTitle" />
          <Typography variant="h5">{projectTitle}</Typography>
        </div>
        <div>
          <Typography variant="h4">About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">Tech Stack :{technologies}</Typography>
        </div>
      </a>
      {isAdmin && (
        <Button style={{ color: "rgba(40,40,40,0.7)" }}>
          <Delete />
        </Button>
      )}
    </>
  );
};

function Projects() {
  const projects = [{
    url:"https://github.com/ankurpysics01/Ecommerce-app.git",
    projectImage: "https://cdn.shortpixel.ai/spai/w_1498+q_lossless+ret_img/websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/organic-store-social.jpg",
    projectTitle:"Ecommerce website (Easydelivery)",
    description :"Welcome to Easydelivery your one-stop destination for a seamless shopping experience. Explore a diverse range of high-quality products across fashion, electronics, home essentials, beauty, and more. Shop confidently with our quality assurance, user-friendly interface, and secure transactions. Enjoy exclusive deals and efficient customer support. Elevate your online shopping with Easydelivery—where convenience meets style!",
    technologies :"react js, javascript, html,css,c#, .net, mongoDB",
  },{
    url:"https://github.com/ankurpysics01/StudentDatabase.git",
    projectImage: "https://images.pexels.com/photos/6549632/pexels-photo-6549632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    projectTitle:"Student Database Management System",
    description :"Introducing our Student Database Management System – your all-in-one solution for streamlined academic record keeping. With an intuitive interface, real-time attendance tracking, automated grading, and secure data management, we provide an efficient and organized platform for educators, administrators, and students. Elevate your educational management with our system – making student information accessible, communication seamless, and overall administration hassle-free. Experience the simplicity and effectiveness of our Student Database Management System today!",
    technologies :"C++,FileHandling,Oops",
  },{
    url:"https://github.com/ankurpysics01/Weather-app.git",
    projectImage:"https://i.pinimg.com/originals/db/98/9f/db989f8fac1f3877ff0612b6bac08243.jpg",
    projectTitle:"Weather app",
    description :"Stay informed with our sleek weather app. Get real-time updates, accurate forecasts, and interactive maps. Plan your day with confidence, whether rain or shine. Simple, intuitive, and always up-to-date. Your go-to companion for weather on the go.",
    technologies :"javascript,css,html,api",
  },{
    url:"https://github.com/ankurpysics01/university-management-system.git",
    projectImage:"https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    projectTitle:"University Management system",
    description :" Handles faculty details, course assignments, and tracks workload and salary information,Records and manages student information, generating unique IDs,Manages courses, including creation, updates, and deletions,Handles prerequisites, enrollment, and fee tracking, and provides financial reports.",
    technologies:"C#,.net"
  }];

  return (
    <div className="projects">
      <Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>
      <div className="projectsWrapper">
        {projects.map((project) => (
          
          <ProjectCard
            url={project.url}
            projectImage={project.projectImage}
            projectTitle={project.projectTitle}
            description={project.description}
            technologies={project.technologies}
          /> 
        ))}
      </div>
      <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        All The Projects Shown Above Are Made By Me <FaRegSmileWink />
      </Typography>
    </div>
  );
}

export default Projects;
