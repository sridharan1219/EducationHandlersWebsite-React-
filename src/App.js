import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./Components/NavigationBar/Navbardefault";
import AllCourses from "./Components/All-Courses/Allcourses"; // Corrected import
import PaymentPage from "./Components/Payment-Page/Payment";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import SignUp from "./Components/SignUp/SignUp";
import Profile from "./Components/Profile/Profile";
import SignIn from "./Components/SignIn/SignIn";
import { ThemeProvider } from "./Components/Contexts/ThemeContext";
import Blog from "./Components/Blog/Blog";
import Forgot from "./Components/ResetPassword/ResetPassword";
import Course1Info from "./Components/CourseInfo/Course1Info";
import Programming from "./Components/All-Courses/Category/Programming";
import Business from "./Components/All-Courses/Category/Business";
import Design from "./Components/All-Courses/Category/Design";
import Marketing from "./Components/All-Courses/Category/Marketing";
import ContactUs from "./Components/Contact/ContactUs";
import Course from "./Components/CoursePage/Course";
import Ins from "./Components/Ins/Ins";
function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/Profile" element={<Profile />}></Route>
            <Route path="/Home" element={<Home />} />
            <Route path="/Ins" element={<Ins />} />
            <Route path="/AllCourses" element={<AllCourses />} />
            <Route path="/Programming" element={<Programming />} />
            <Route path="/Business" element={<Business />} />
            <Route path="/Design" element={<Design />} />
            <Route path="/Marketing" element={<Marketing />} />
            <Route path="/Payment" element={<PaymentPage />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Blog" element={<Blog />}></Route>
            <Route path="SignIn" element={<SignIn />}></Route>
            <Route path="ContactUs" element={<ContactUs />}></Route>
            <Route path="/SignUp" element={<SignUp />}></Route>
            <Route path="/Forgot" element={<Forgot />}></Route>
            <Route path="/CourseInfo1" element={<Course1Info />}></Route>
            <Route path="/Course" element={<Course />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
