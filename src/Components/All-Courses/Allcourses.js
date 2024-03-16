import { useNavigate } from "react-router-dom";
import React from "react";
import "./Allcourses.css"; // Import CSS file for styling
import course1 from "../Images/course1.jpg";
import Navbar from "../NavigationBar/Navbardefault";
import allcourses from "../Images/allcourses.jpeg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import sd from "../Images/Categories/softwaredev.png";
import ud from "../Images/Categories/gamedev.jpg";
import sales from "../Images/Categories/sales.png";
import ns from "../Images/Categories/negotiation.png";
import sm from "../Images/Categories/social.jpg";
import gd from "../Images/Categories/graphicdesign.webp";
import ux from "../Images/Categories/uxdesign.webp";
import ma from "../Images/Categories/arch.png";
import pm from "../Images/Categories/projectmanagement.webp";
import fm from "../Images/Categories/financialmarkets.webp";
import bt from "../Images/Categories/businesstech.jpg";
import Footer from "../Footer/Footer";

const AllCourses = () => {
  const navi_prog = useNavigate();
  const handle_prog = () => {
    navi_prog("/Programming");
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
    <>
      <div className="all-courses-container">
        <Navbar />

        {/* Banner or Hero Section */}
        <section className="hero-section">
          <h1 style={{ fontSize: "2rem" }}>Welcome to Our Courses</h1>
          <p style={{ fontSize: "1.2rem" }}>
            Explore a wide range of courses in various categories.
          </p>
          <img
            width="100%"
            height="700px"
            src={allcourses}
            alt="not found"
          ></img>
        </section>

        {/* Category Filters */}
        <h2 style={{ textAlign: "center" }}>Categories</h2>
        <section className="category-filters">
          <button style={{ backgroundColor: "#007bff" }}>All Courses</button>
          <button onClick={handle_prog}>Programming</button>
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
                  interfaces, and kickstart your career as a front-end
                  developer.
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
                image={gd}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Graphic Design
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Unlock your creativity and learn the principles of visual
                  communication and design with this engaging course, where
                  you'll discover the fundamentals of graphic design and how to
                  bring your ideas to life through stunning visuals.
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
                  Unlock the fundamentals of architectural design and explore
                  the art of creating functional, aesthetically pleasing
                  structures with our Architectural Design course, where you'll
                  delve into the principles of form, function, and spatial
                  organization to bring innovative visions to life.
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
                image={sales}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  The Art of Sales: Mastering the Selling Process
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Master the art of sales and elevate your selling skills with
                  our comprehensive course, 'The Art of Sales: Mastering the
                  Selling Process', where you'll learn effective strategies,
                  persuasive techniques, and customer-centric approaches to
                  drive success in the competitive world of sales.
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
                  Enhance your negotiation prowess and develop winning
                  strategies with our course on 'Negotiation Skills and
                  Strategies', where you'll gain invaluable insights, practical
                  techniques, and effective communication tools to navigate and
                  succeed in various negotiation scenarios.
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
                  Marketing by Meta' course, designed to equip you with the
                  skills and knowledge to leverage platforms like Facebook,
                  Instagram, and WhatsApp for enhanced brand visibility,
                  audience engagement, and business growth.
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
                image={pm}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Google Project Management
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Master the art of project management with Google's
                  comprehensive course, covering planning, execution, and
                  oversight strategies for successful project delivery.
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
                  comprehensive course, delving into key concepts, strategies,
                  and tools essential for navigating the dynamic world of
                  finance.
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
                  knowledge needed to build dynamic and scalable web
                  applications using cutting-edge technologies and
                  methodologies.
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
                  Developer' course, where you'll learn to create captivating
                  and immersive gaming experiences using the industry-leading
                  Unity platform, mastering essential tools and techniques for
                  building your own games.
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
      <Footer />
    </>
  );
};

export default AllCourses;
