import { useNavigate } from "react-router-dom";
import React from "react";
import "./Programming.css"; // Import CSS file for styling
import Navbar from "../../NavigationBar/Navbardefault";
import allcourses from "../../Images/allcourses.jpeg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import sales from "../../Images/Categories/sales.png";
import ns from "../../Images/Categories/negotiation.png";
import sm from "../../Images/Categories/social.jpg";
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
  const navi_des = useNavigate();
  const handle_des = () => {
    navi_des("/Design");
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
        <button onClick={handle_des}>Design</button>
        <button style={{ backgroundColor: "#007bff" }}>Marketing</button>
      </section>

      <div className="courses-card">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={sales}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                The Art of Sales: Mastering the Selling Process
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Master the art of sales and elevate your selling skills with our
                comprehensive course, 'The Art of Sales: Mastering the Selling
                Process', where you'll learn effective strategies, persuasive
                techniques, and customer-centric approaches to drive success in
                the competitive world of sales.
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
              image={ns}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Successful Negotiation: Essential Strategies and Skills
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Enhance your negotiation prowess and develop winning strategies
                with our course on 'Negotiation Skills and Strategies', where
                you'll gain invaluable insights, practical techniques, and
                effective communication tools to navigate and succeed in various
                negotiation scenarios.
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
              image={sm}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Meta Social Media Marketing
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Unlock the power of social media with our 'Social Media
                Marketing by Meta' course, designed to equip you with the skills
                and knowledge to leverage platforms like Facebook, Instagram,
                and WhatsApp for enhanced brand visibility, audience engagement,
                and business growth.
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
