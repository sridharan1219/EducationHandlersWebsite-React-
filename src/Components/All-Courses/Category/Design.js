import { useNavigate } from "react-router-dom";
import React from "react";
import "./Programming.css"; // Import CSS file for styling
import Navbar from "../../NavigationBar/Navbardefault";
import allcourses from "../../Images/allcourses.jpeg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import gd from "../../Images/Categories/graphicdesign.webp";
import ux from "../../Images/Categories/uxdesign.webp";
import ma from "../../Images/Categories/arch.png";
import { Button, CardActionArea, CardActions } from "@mui/material";

const AllCourses = () => {
  const navi_all = useNavigate();
  const handle_all = () => {
    navi_all("/Allcourses");
  };

  const navi_bus = useNavigate();
  const handle_bus = () => {
    navi_bus("/Business");
  };
  const navi_prog = useNavigate();
  const handle_prog = () => {
    navi_prog("/Programming");
  };
  const navi_mark = useNavigate();
  const handle_mark = () => {
    navi_mark("/Marketing");
  };

  return (
    <div className="all-courses-container">
      <Navbar />

      {/* Banner or Hero Section */}
      <section className="hero-section">
        <h1 style={{ fontSize: "2rem" }}>Welcome to Our Courses</h1>
        <p style={{ fontSize: "1.2rem" }}>
          Explore a wide range of courses in various categories.
        </p>
        <img width="100%" height="700px" src={allcourses} alt="not found"></img>
      </section>

      {/* Category Filters */}
      <h2 style={{ textAlign: "center" }}>Categories</h2>
      <section className="category-filters">
        <button onClick={handle_all}>All Courses</button>
        <button onClick={handle_prog}>Programming</button>
        <button onClick={handle_bus}>Business</button>
        <button style={{ backgroundColor: "#007bff" }}>Design</button>
        <button onClick={handle_mark}>Marketing</button>
      </section>

      <div className="courses-card">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={gd}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Graphic Design
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Unlock your creativity and learn the principles of visual
                communication and design with this engaging course, where you'll
                discover the fundamentals of graphic design and how to bring
                your ideas to life through stunning visuals.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Info
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={ux}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Google UX Design
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Embark on a journey to understand user-centered design
                principles and create intuitive digital experiences with
                Google's UX Design course, where you'll learn to craft
                compelling interfaces that prioritize user needs and
                satisfaction.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Info
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={ma}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Making Architecture
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Unlock the fundamentals of architectural design and explore the
                art of creating functional, aesthetically pleasing structures
                with our Architectural Design course, where you'll delve into
                the principles of form, function, and spatial organization to
                bring innovative visions to life.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Info
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default AllCourses;
