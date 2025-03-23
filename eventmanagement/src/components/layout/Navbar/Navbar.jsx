import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../../../public/logo-1-2048x763.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href="/" className="logo-container">
            <img src={logo} alt="logo" className="logo-image" />
          </a>
        </div>

        {/* Main Navigation Links - Same for Desktop and Mobile */}
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/create-event">Create Event</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
        </ul>

        {/* Mobile menu button */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 


// function subNewArr(arr, target) {
//     let left = 0; right = arr.length - 1
//     let mid = Math.floor((left + right) / 2)
//     console.log("mid", mid)
//     if (arr[mid] === target) {
//         return mid // if target element is middle then no problem
//     } else {
//         while (arr[left] < arr[mid]) {
//             mid = mid + 1
//         }

//         left = mid; right = arr.length - 1
//         while (left < right) {
//             console.log("this is called!!")
//             let sub_mid = Math.floor((right + left) / 2)
//             if (arr[sub_mid] === target) {
//                 return sub_mid
//             } else if (arr[sub_mid] < target) {
//                 left = sub_mid + 1
//             } else {
//                 right = sub_mid - 1
//             }
//         }
//         left = 0; right = mid - 1
//         while (left < right) {
//             console.log("this is called!!")
//             let sub_mid = Math.floor((right + left) / 2)
//             if (arr[sub_mid] === target) {
//                 return sub_mid
//             } else if (arr[sub_mid] < target) {
//                 left = sub_mid + 1
//             } else {
//                 right = sub_mid - 1
//             }
//         }
//         return -1
//     }
// }