import React, { useState } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Blog1 from "../Images/blogcsimp.jpg";
import Navbar from "../NavigationBar/Navbardefault";
import eduback from "../Images/edu-back.jpg";
import Blog3 from "../Images/Blog2dm.jpg";
import Blog2 from "../Images/The-Rising-AI.jpg";
import Blog4 from "../Images/blogdatapri.png";
import PaymentPage from "../Payment-Page/Payment";
import { useNavigate } from "react-router-dom";
import "./Blog.css";
import { useTheme } from "../Contexts/ThemeContext";
import Footer from "../Footer/Footer";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Blog = () => {
  const [apidata, setApidata] = useState();
  const [apidata1, setApidata1] = useState();

  const [apidata2, setApidata2] = useState();
  const [apidata3, setApidata3] = useState();

  const [apidata4, setApidata4] = useState();
  const [apidata5, setApidata5] = useState();

  const [apidata6, setApidata6] = useState();
  const [apidata7, setApidata7] = useState();
  axios.get("https://dummyapi.online/api/blogposts").then((response) => {
    setApidata(response.data[47].title);
    setApidata1(response.data[47].content);

    setApidata2(response.data[32].title);
    setApidata3(response.data[32].content);

    setApidata4(response.data[27].title);
    setApidata5(response.data[27].content);

    setApidata6(response.data[38].title);
    setApidata7(response.data[38].content);

    console.log("response=======>>>>>>>", response);
  });

  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div
        style={{ textAlign: "center" }}
        className={theme == "white" ? "blogBody-white" : "blogBody-black"}
      >
        <div>
          <>
            <Navbar />
            <div
              className={theme == "white" ? "blogBody-white" : "blogBody-black"}
            >
              <div>
                {theme == "white" ? (
                  <h1>Blog</h1>
                ) : (
                  <h1 style={{ color: "white" }}>Blog</h1>
                )}
              </div>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={4}>
                  <Grid item xs={6}>
                    <Item>
                      <Card sx={{ maxWidth: 9000 }} className="card">
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="200"
                            image={Blog1}
                            alt="course-1"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              <h4>{apidata}</h4>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              <h5>{apidata1}</h5>
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button
                            href="https://dummyapi.online/api/blogposts"
                            size="small"
                            color="primary"
                          >
                            Learn More
                          </Button>
                        </CardActions>
                      </Card>
                    </Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item>
                      <Card sx={{ maxWidth: 10000 }} className="card">
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="200"
                            image={Blog2}
                            alt="course-2"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              <h4>{apidata2}</h4>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              <h5>{apidata3}</h5>
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button
                            href="https://dummyapi.online/api/blogposts"
                            size="small"
                            color="primary"
                          >
                            Learn More
                          </Button>
                        </CardActions>
                      </Card>
                    </Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item>
                      <Card sx={{ maxWidth: 8000 }} className="card">
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="200"
                            image={Blog3}
                            alt="course-3"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              <h4>{apidata4}</h4>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              <h5>{apidata5}</h5>
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button
                            href="https://dummyapi.online/api/blogposts"
                            size="small"
                            color="primary"
                          >
                            Learn More
                          </Button>
                        </CardActions>
                      </Card>
                    </Item>
                  </Grid>
                  <Grid item xs={5.9}>
                    <Item>
                      <Card sx={{ maxWidth: 10000 }} className="card">
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="200"
                            image={Blog4}
                            alt="course-4"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              <h4>{apidata6}</h4>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              <h5>{apidata7}</h5>
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button
                            href="https://dummyapi.online/api/blogposts"
                            size="small"
                            color="primary"
                          >
                            Learn More
                          </Button>
                        </CardActions>
                      </Card>
                    </Item>
                  </Grid>
                </Grid>
              </Box>
            </div>
            <button
              style={{
                height: "40px",
                width: "fit-content",
                backgroundColor: "#0ba6ff",
                borderRadius: "10px",
                color: "white",
                border: "none",
              }}
              onClick={toggleTheme}
            >
              Switch to {theme === "white" ? "Dark" : "Light"} Mode
            </button>
          </>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
