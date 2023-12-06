import React from "react";
import "./Home.css";
import { useEffect } from "react";
import * as THREE from "three";
import moonImage from "../../Images/moon.jpg";
import venusImage from "../../Images/venus.jpg";
import spaceImage from "../../Images/space1.jpg";
import JavascriptImg from "../../Images/javascript.png";
import CppImg from "../../Images/Cpp.jpg";
import reactjsImg from "../../Images/Reactjs.png";
import csharp from "../../Images/csharp.png";
import netImg from "../../Images/net.png";
import mongoDB from "../../Images/MongoDBf.png";
import resume from "../../Images/resume.png";
import chegg from "../../Images/chegg.webp";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { MouseOutlined } from "@mui/icons-material";
import TimeLine from "../TimeLine/TimeLine";
import YoutubeCard from "../YoutubeCard/YoutubeCard";
import Traningcertificate from "../../Images/tranningcertifiacte.webp";
import coursecertificate from "../../Images/coursecertificate.png";
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
} from "react-icons/si";

const Home = () => {
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();

    const moonTexture = textureLoader.load(moonImage);
    const venusTexture = textureLoader.load(venusImage);
    const spaceTexture = textureLoader.load(spaceImage);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(4, 4, 8);

    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });

    const moongeometry = new THREE.SphereGeometry(2, 64, 64);
    const moonmaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moongeometry, moonmaterial);

    const venusgeometry = new THREE.SphereGeometry(3, 64, 64);
    const venusmaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    const venus = new THREE.Mesh(venusgeometry, venusmaterial);
    venus.position.set(8, 5, 5);

    const pointLight = new THREE.PointLight(0xffffff, 20);
    const pointLight2 = new THREE.PointLight(0xffffff, 5);

    pointLight.position.set(8, 5, 5);
    pointLight2.position.set(-8, -5, -5);

    scene.add(moon);
    scene.add(pointLight);
    scene.add(venus);
    scene.add(pointLight2);
    scene.background = spaceTexture;

    const constspeed = 0.01;
    window.addEventListener("mousemove", (e) => {
      if (e.clientX < window.innerWidth / 2) {
        moon.rotation.x -= constspeed;
        moon.rotation.y += constspeed;
        venus.rotation.x -= constspeed;
        venus.rotation.y += constspeed;
      }
      if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= constspeed;
        moon.rotation.y -= constspeed;
        venus.rotation.x -= constspeed;
        venus.rotation.y -= constspeed;
      }
      if (e.clientY > window.innerHeight / 2) {
        moon.rotation.x -= constspeed;
        moon.rotation.y += constspeed;
        venus.rotation.x -= constspeed;
        venus.rotation.y += constspeed;
      }
      if (e.clientY <= window.innerHeight / 2) {
        moon.rotation.x -= constspeed;
        moon.rotation.y -= constspeed;
        venus.rotation.x -= constspeed;
        venus.rotation.y -= constspeed;
      }
    });

    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y += 0.001;
      venus.rotation.y += 0.001;

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };

    animate();

    return window.addEventListener("scroll", () => {
      camera.rotation.z = window.scrollY * 0.001;
      camera.rotation.y = window.scrollY * 0.003;

      const skillsBox = document.getElementById("homeskillsBox");
      console.log(skillsBox);

      if (skillsBox) {
        if (window.scrollY > 1500) {
            skillsBox.style.animationName = "homeskillsBoxAnimationOn";
        } else {
            skillsBox.style.animationName = "homeskillsBoxAnimationOff";
        }
    }
    });
  }, []);

  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>

      <div className="homeCanvasContainer">
        <Typography variant="h1">
          <p>A</p>
          <p>N</p>
          <p>K</p>
          <p>U</p>
          <p>R</p>
        </Typography>

        <div className="homeCanvasBox">
          <Typography variant="h2">DESIGNER</Typography>
          <Typography variant="h2">DEVELOPER</Typography>
          <Typography variant="h2">TEACHER</Typography>
          {/* <Typography variant="h2">CONTENT CREATOR</Typography> */}
        </div>

        <Link to="/projects">VIEW WORK</Link>
      </div>

      <div className="homeScrollBtn">
        <MouseOutlined />
      </div>

      <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography>
        <TimeLine timelines={[{
          date:"04/03/2022",
          title:"Start Coding",
          description:"Starting coding journey; first task – crafting my passion project"
        }, 
        {
          date:"04/05/2023 to 31/08/2023",
          title:"Trannig in Expert It Developer",
          description:"Training to become an expert IT developer: mastering advanced coding, problem-solving, and innovation "
        },
        {
          date:"06/10/2023",
          title:"Develope multiple Projects",
          description:"Currently Develope multiple Real time projects"
        }, 
        {
          date:"06/10/2023 to current date",
          title:"Improve our Skills and search jobs",
          description:"In current time i am searching job"
        }]} />
      </div>

      <div className="homeSkills">
        <Typography variant="h3">SKILLS</Typography>

        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img src={JavascriptImg} alt="Face1" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img src={reactjsImg} alt="Face2" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img src={CppImg} alt="Face3" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img src={csharp} alt="Face4" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img src={netImg} alt="Face5" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img src={mongoDB} alt="Face6" />
          </div>
        </div>
        <div className="cubeShadow"></div>

        <div className="homeskillsBox" id="homeskillsBox">
          <SiCplusplus />
          <SiReact />
          <SiJavascript />
          <SiMongodb />
          <SiNodedotjs />
          <SiExpress />
          <SiCss3 />
          <SiHtml5 />
          <SiThreedotjs />
        </div>
      </div>
      <div className="homeYoutube">
        <Typography variant="h3"> Achievements</Typography>
        <div className="homeYoutubeWrapper">
          <YoutubeCard
            url="https://drive.google.com/file/d/1QeqC1G8ujnaJiVWEzqK2juLSy5-tq8IT/view?usp=sharing"
            image={Traningcertificate}
            title="Download Tranning certificate"
          />
          <YoutubeCard
            url="https://drive.google.com/file/d/1n--Z861oT81O74IR07PqUKYC2uzl3yIW/view?usp=sharing"
            image={coursecertificate}
            title="course certificate by ineuron"
          />
          <YoutubeCard
            url="https://drive.google.com/file/d/1_kHFhp8i23EAqMuXBH_YQUBiV2v9HA8-/view?usp=sharing"
            image={resume}
            title="My resume"
          />
          <YoutubeCard
            url="https://drive.google.com/file/d/1e7seX4yX7nSTqHj1JgWTot9XKB1Ytg9A/view?usp=sharing"
            image={chegg}
            title="subject matter experts"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
