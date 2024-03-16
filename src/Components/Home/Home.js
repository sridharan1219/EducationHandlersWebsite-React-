// Home.js
import React from "react";
import "./Home.css";
import TopCoursesContainer from "./TopCourses";
import img from "../Images/back.jpeg";
import Navbar from "../NavigationBar/Navbardefault";
import ImageSlider from "../ImageSlider/ImageSlider";
import headingImage from "../Images/home.png";
import Footer from "../Footer/Footer";
import Ins from "../InsPage/Inspage";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="background-image">
          <img src={headingImage} alt="Background" />
        </div>

        <div className="content">
          <div>
            <h1>Categories of Courses Offered</h1>
            <ImageSlider />
          </div>
          <TopCoursesContainer />
        </div>
      </div>
      <Ins />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
