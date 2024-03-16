import { useNavigate } from "react-router-dom";
import React from "react";
import "./Programming.css"; // Import CSS file for styling
import Navbar from "../../NavigationBar/Navbardefault";
import allcourses from "../../Images/allcourses.jpeg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import pm from "../../Images/Categories/projectmanagement.webp";
import fm from "../../Images/Categories/financialmarkets.webp";
import bt from "../../Images/Categories/businesstech.jpg";

import { Button, CardActionArea, CardActions } from "@mui/material";

const AllCourses = () => {
  const navi_all = useNavigate();
  const handle_all = () => {
    navi_all("/Allcourses");
  };

  const navi_prog = useNavigate();
  const handle_prog = () => {
    navi_prog("/Programming");
  };
  const navi_des = useNavigate();
  const handle_des = () => {
    navi_des("/Design");
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
        <button style={{ backgroundColor: "#007bff" }}>Business</button>
        <button onClick={handle_des}>Design</button>
        <button onClick={handle_mark}>Marketing</button>
      </section>

      <div className="courses-card">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={pm}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Google Project Management
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Master the art of project management with Google's comprehensive
                course, covering planning, execution, and oversight strategies
                for successful project delivery.
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
              image={fm}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Financial Markets
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Unlock the complexities of financial markets with this
                comprehensive course, delving into key concepts, strategies, and
                tools essential for navigating the dynamic world of finance.
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
              image={bt}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Key Technologies for Business
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Explore the essential technologies driving modern business
                success, from cloud computing to artificial intelligence, in
                this comprehensive course designed to equip you with the
                knowledge and skills needed to thrive in the digital age.
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
