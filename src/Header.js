import React from 'react';
import './Header.css';
import profilePicture from './profile_picture.png'; // Ensure you have your profile picture in the correct path

const Header = () => {
  return (
    <header className="header">
      <div className="profile-container">
        <div className="profile">
          <img src={profilePicture} alt="Profile" className="profile-picture" />
          <h1 className="logo">Gavin Ewart</h1>
        </div>
      </div>
      <div className="nav-container">
        <nav>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
