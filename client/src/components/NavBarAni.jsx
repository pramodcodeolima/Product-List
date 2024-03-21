import React from 'react'
import "./nav.css";
import { FaUser } from "react-icons/fa";
import icon from '../images/icon.png';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="container">
        <div class="icon">
        <Link to="/home" className='logo'>
            <h5>LOGO</h5>
        </Link>
        </div>
        <div>
          <div class="p-2 w-50">
            <input
              class="custom-form form-control mr-sm-2"
              type="search"
              placeholder="Search"
            />
          </div>
          <div>
            <nav class="navbar navbar-expand-lg navbar-light">
              <div class="collapse navbar-collapse space">
                <ul class="navbar-nav mr-auto custom-nav">
                  <li class="nav-item mx-4">
                    <Link to="/home" className='nav-link inactive'>
                      Wallpapers
                    </Link>
                  </li>
                  <li class="nav-item mx-5">
                    <Link to="/animation" className='nav-link active'>
                      Animations
                    </Link>
                  </li>
                  <li class="nav-item mx-5">
                    <Link className='nav-link'>
                      Notifications
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

        <div class="p-2">
          <FaUser className='custom-icon'/>
        </div>
    </div>
  );
}
