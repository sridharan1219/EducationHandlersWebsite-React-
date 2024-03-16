import React, { useState } from "react";
import "../NavigationBar/Navbard.css"; // Import your CSS styles for Navbar
import prof from "../Images/prof.png";
import icon from "../Images/icon.png";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="avatar">
          <img src={icon} alt="Avatar" />
          <span className="title">EH</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="/Home">Home</a>
          </li>
          <li>
            <a href="/AllCourses">Allcourses</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/Blog">Blog</a>
          </li>
          <li>
            <a href="/SignIn">SignIn</a>
          </li>
          <li>
            <a href="/ContactUs">ContactUs</a>
          </li>
          <li>
            <SearchBar />
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <div className="profile-icon" onClick={toggleDropdown}>
          <img src={prof} alt="Profile" />
          {showDropdown && (
            <div className="dropdown-menu">
              <ul>
                <li>
                  <a href="/Profile">Profile</a>
                </li>
                <li>
                  <a href="#">Settings</a>
                </li>
                <li>
                  <a href="#">Logout</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
