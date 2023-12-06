import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import Loader from "./components/Loader/Loader";
import { useState, useEffect } from "react";

function App() {

  const [loading, setLoading] = useState("flase");
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },3000);
  },[]);
  return (

    <Router>
      {loading ? (<Loader/>):(
        <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Login />} />
        </Routes>
        <Footer />
        </>
      )}
      
    </Router>
  );
}

export default App;
