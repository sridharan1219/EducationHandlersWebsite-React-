import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./Tabs.css";
import live from "../../Images/live.png";
import Comment from '../Comment';
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className="tabs-header"
          centered
        >
          <Tab label="About" {...a11yProps(0)} />
          <Tab label="Outcomes" {...a11yProps(1)} />
          <Tab label="Extra Add-Ons" {...a11yProps(2)} />
          <Tab label="Reviews" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div>
          <h4>What you'll learn</h4>
          <ul>
            <li>
              Create a responsive website using HTML to structure content, CSS
              to handle visual style, and JavaScript to develop interactive
              experiences.
            </li>
            <li>
              Learn Bootstrap CSS Framework to create webpages and work with
              GitHub repositories and version control.
            </li>
            <li>
              Learn to use React in relation to Javascript libraries and
              frameworks.
            </li>
            <li>
              Prepare for a coding interview, learn best approaches to
              problem-solving, and build portfolio-ready projects you can share
              during job interviews.
            </li>
          </ul>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div>
          <h4>Prepare for a career in Front-end Development</h4>
          <ul>
            <li>Receive professional-level training from Meta</li>
            <li>Demonstrate your proficiency in portfolio-ready projects</li>
            <li>Earn an employer-recognized certificate from Meta</li>
            <li>
              Qualify for in-demand job titles: Front-End Developer, Website
              Developer, Software Engineer
            </li>
          </ul>
          <h4>Skills You'll Learn</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>UI/UX Design</li>
          </ul>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <img
          style={{ textAlign: "center" }}
          src={live}
          width="100%"
          height="fit-content"
          alt="not found"
        ></img>
        <h2>Live Video Call Session with Instructors</h2>
        <ul>
          <li>
            Real-Time Support: Get instant assistance from instructors via live
            video calls.
          </li>
          <li>
            Interactive Learning: Engage in discussions and receive personalized
            guidance.
          </li>
          <li>
            Immediate Clarification: Receive quick feedback to address
            misunderstandings effectively.
          </li>
          <li>
            Flexible Scheduling: Access support at your convenience, regardless
            of time zones.
          </li>
          <li>
            Community Engagement: Participate actively in discussions and foster
            a sense of community.
          </li>
          <li>
            Recorded Sessions: Access recorded calls for review and reference
            after the session ends.
          </li>
        </ul>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Comment/>
      </CustomTabPanel>
    </Box>
  );
}
