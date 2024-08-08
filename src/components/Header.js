import React from 'react';
import { FaSearch } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import hca_symbol from "../images/hca_symbol.png";

const Header = () => (
    <div className="header-1">
        <h2>HCA<img src={hca_symbol} title="hca-logo" alt="hca"/><span> Houston Healthcare<sup>®</sup></span></h2>
        <div className='header-right'>
          <nav className="nav-menu">
              <ul>
                  <li><a href="#"><FaHome size={20} /></a></li>
                  <li><a href="#">My Health Resources</a></li>
                  <li><a href="#">Specialties</a></li>
                  <li><a href="#">Locations <MdArrowDropDown /></a></li>
                  <li><a href="#">Patients & Visitors</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Find A Doctor</a></li>
                  <li><a href="#">Manage Your Account</a></li>
                  <li><a href="#">MyHealthONE</a></li>
              </ul>
          </nav>
          <div className='search-field'>
          <FaSearch />
          <input type="text" placeholder='Search'></input>
          </div>
       
        </div>
    </div>
);

export default Header;




