import React, { useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "./Assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="box1">
      
      <ul className="first-phase">
        <li>
          <NavLink to="/" className="home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/menu" >Menu</NavLink>
        </li>
        
        <li>
          <span
            className="story"
            onClick={() => {
              document
                .getElementById("Story-section")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Story
          </span>
        </li>

        <li>
          <NavLink to="/" onClick={closeMenu}>
              <img src='./logo.png' alt="Coffee Shop Logo" className="logo" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/events" className="Events" >Events</NavLink>
        </li>
        <li>
          <NavLink to="/upComings" className="upcoming">Upcomings</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="contact">Contact</NavLink>
        </li>
      </ul>


      {/* Hamburger Button */}
      <button 
        className="hamburger" 
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-dropdown">
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/story" className="story">Story</NavLink>

            <a href="#contact">Contact</a>
            <NavLink to="/upcoming-events">Upcoming Events</NavLink>
            <NavLink to="/event-booking">Event Booking</NavLink>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
