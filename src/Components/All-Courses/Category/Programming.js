import { useNavigate } from "react-router-dom";
import React from "react";
import "./Programming.css"; // Import CSS file for styling
import course1 from "../../Images/course1.jpg";
import Navbar from "../../NavigationBar/Navbardefault";
import allcourses from "../../Images/allcourses.jpeg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import sd from "../../Images/Categories/softwaredev.png";
import ud from "../../Images/Categories/gamedev.jpg";
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
  const navi_des = useNavigate();
  const handle_des = () => {
    navi_des("/Design");
  };
  const navi_mark = useNavigate();
  const handle_mark = () => {
    navi_mark("/Marketing");
  };

  const navi = useNavigate();
  const handle_course = () => {
    navi("/CourseInfo1");
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
        <button style={{ backgroundColor: "#007bff" }}>Programming</button>
        <button onClick={handle_bus}>Business</button>
        <button onClick={handle_des}>Design</button>
        <button onClick={handle_mark}>Marketing</button>
      </section>

      <div className="courses-card">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={course1}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                FrontEnd Development
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Unlock the world of web development with our 'Front End
                Development' course by Meta. Dive into the realm of HTML, CSS,
                and JavaScript to craft visually stunning and interactive user
                interfaces, and kickstart your career as a front-end developer.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button onClick={handle_course} size="small" color="primary">
              Info
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={sd}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                IBM Full Stack Software Developer
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Embark on a journey to become a proficient Full Stack Software
                Developer with our comprehensive 'IBM Full Stack Software
                Developer' course, designed to equip you with the skills and
                knowledge needed to build dynamic and scalable web applications
                using cutting-edge technologies and methodologies. 6,000
                species, ranging across all continents except Antarctica
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
              image={ud}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Unity Game Developer
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Dive into the world of game development with our 'Unity Game
                Developer' course, where you'll learn to create captivating and
                immersive gaming experiences using the industry-leading Unity
                platform, mastering essential tools and techniques for building
                your own games.
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
