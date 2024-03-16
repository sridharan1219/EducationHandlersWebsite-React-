// TopCoursesContainer.js
import React from "react";
import "./TopCourses.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import course1 from "../Images/course1.jpg";
import course3 from "../Images/course3.png";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const TopCoursesContainer = () => {
  const navi = useNavigate();
  const handleclick = () => {
    navi("/AllCourses");
  };

  return (
    <div className="top-courses-container">
      <h1 style={{ color: "black" }}>Top Selling Courses</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Item>
              <Card sx={{ maxWidth: 10000 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={course1}
                    alt="course-1"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Front-End Development: (Google)
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      This course teaches essential skills in building user
                      interfaces for websites and applications using HTML, CSS,
                      and JavaScript, enabling students to create engaging and
                      interactive web experiences.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button onClick={handleclick} size="small" color="primary">
                    Enroll
                  </Button>
                </CardActions>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Card sx={{ maxWidth: 10000 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={course3}
                    alt="course-3"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Project Management: (Google)
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Meta's Social Media Marketing course teaches strategies
                      and tools for leveraging platforms like Facebook,
                      Instagram, and WhatsApp to enhance brand visibility and
                      engagement, focusing on audience targeting and data-driven
                      analytics.{" "}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button onClick={handleclick} size="small" color="primary">
                    Enroll
                  </Button>
                </CardActions>
              </Card>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default TopCoursesContainer;
