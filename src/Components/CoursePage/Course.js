import React from "react";
import "./Course.css";
import week from "../Images/week.jpeg";
import Navbar from "../NavigationBar/Navbardefault";
const CourseHomePage = () => {
  // Sample data for course weekly topics
  const weeklyTopics = [
    {
      id: 1,
      title: "Week 1: Introduction to HTML",
      description: "Learn the basics of HTML and its structure.",
    },
    {
      id: 2,
      title: "Week 2: Styling with CSS",
      description: "Explore CSS syntax and various styling techniques.",
    },
    {
      id: 3,
      title: "Week 3: Introduction to JavaScript",
      description: "Learn fundamental JavaScript concepts.",
    },
    {
      id: 4,
      title: "Week 4: React Basics",
      description: "Get started with React library and its core concepts.",
    },
    // Add more weekly topics as needed
  ];

  // Sample data for course topics and details
  const courseTopics = [
    {
      id: 1,
      title: "Introduction to Front-End Development",
      description:
        "An overview of front-end development and its importance in web development.",
    },
    {
      id: 2,
      title: "HTML Fundamentals",
      description:
        "Understanding the structure and semantics of HTML elements.",
    },
    {
      id: 3,
      title: "CSS Essentials",
      description:
        "Exploring CSS selectors, properties, and styling techniques.",
    },
    {
      id: 4,
      title: "JavaScript Basics",
      description:
        "Learning basic JavaScript syntax, data types, and control structures.",
    },
    {
      id: 5,
      title: "React Fundamentals",
      description:
        "Introduction to React library, component-based architecture, and JSX syntax.",
    },
    // Add more course topics as needed
  ];

  return (
    <>
    <Navbar/>
      <div className="course-home-page">
        {/* Left menu bar for weekly topics */}
        <div className="weekly-topics-menu">
          <img width="100%" src={week}></img>
          <ul>
            {weeklyTopics.map((topic) => (
              <li key={topic.id}>
                <span className="topic-title">{topic.title}</span>
                <p className="topic-description">{topic.description}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Center section for course topics and details */}
        <div className="course-content">
          <h1>Front-End Development by Meta</h1>
          <p className="course-description">
            This course provides a comprehensive introduction to front-end
            development, covering HTML, CSS, JavaScript, and React.
          </p>
          <hr />
          <h2>Course Topics</h2>
          <div className="course-topics">
            {courseTopics.map((topic) => (
              <div key={topic.id} className="course-topic">
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="video-box">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/-_X6PhkjpzU?si=78LKhnXmcZkkv2FU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/_GTMOmRrqkU?si=MGcojWd9QxX9rddE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/SqcY0GlETPk?si=vbmaUY95gIKlobEC"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};

export default CourseHomePage;
