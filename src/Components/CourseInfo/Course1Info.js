import React from "react";
import meta from "../Images/Info/meta.png";
import micon from "../Images/Info/meta-icon.webp";
import "../CourseInfo/InfoPage.css";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Tabs from "./Tabs/Tabs";
import cert from "../Images/Info/certificate-transformed.png";
import { useNavigate } from "react-router-dom";
import Navbar from "../NavigationBar/Navbardefault";
import Footer from "../Footer/Footer";

const InfoPage = () => {
  const [value, setValue] = React.useState(4);

  const navi = useNavigate();

  const handleNavi = () => {
    navi("/Payment");
  };

  const n = useNavigate();
  const handlecourse = () => {
    n("/Course");
  };

  return (
    <>
      <Navbar />
      <div className="info-body">
        <img src={cert} alt="not found"></img>
        <div className="info-header">
          <div className="info-descrip">
            <img
              src={meta}
              alt="not found"
              height="100px"
              width="fit-content"
            ></img>
            <h1>Meta Front-End Developer Professional Certificate</h1>
            <p>
              Launch your career as a front-end developer. Build job-ready
              skills for an in-demand career and earn a credential from Meta. No
              degree or prior experience required to get started.
            </p>
            <div className="avatar">
              <img src={micon} alt="Avatar" />
              <p>Instructor: Meta Staff</p>
            </div>
            <button onClick={handleNavi} className="info-enroll">
              ENROLL
            </button>
            <br />
            <br />
            <button
              onClick={handlecourse}
              style={{
                height: "44px",
                backgroundColor: " #0056d2",
                textAlign: "center",
                fontSize: "1.3rem",
              }}
            >
              GO TO COURSE
            </button>
            <p>Course Pricing: Rs.500</p>
            <p>
              Free with EH premium <a href="#">Learn More</a>
            </p>
          </div>
          <div className="infopage-sideinfo">
            <h3>Professional Certificate - 9 week course</h3>
            <p>Earn a career credential that demonstrates your expertise</p>
            <Typography component="legend">Rating</Typography>
            <Rating name="read-only" value={value} readOnly />
            <h4>Beginner level</h4>
            <p>No prior experience required</p>
          </div>
        </div>
        <div>
          <Tabs />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InfoPage;
