// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import JCLLogo from "../assets/JCL_Logo.png";
import "./navBar.css";
import hamburger from "../assets/hamburger-menu.svg";
import cancel from "../assets/cancel.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [menubar, setMenubar] = useState(false);

  function handleHambuger() {
    setMenubar(!menubar);
  }

  return (
    <>
      <nav>
        <div className="nav-container">
          <div>
            <NavLink to={"/"} className="JCLL_Link" >
              <img src={JCLLogo} alt="JCL_Logo" className="JCL_Logo" />
            </NavLink>

            <ul>
              <li>
                <NavLink to="/" end style={({isActive}) => ({color: isActive? "black": ""})}>Home</NavLink>
                {/* <a href="">Home</a> */}
              </li>
              <li>
                {/* <a href="">About</a> */}
                <NavLink to="/About" style={({isActive}) => ({color: isActive? "black": ""})}>About</NavLink>
              </li>
              <li>
                {/* <a href="">Services</a> */}
                <NavLink to="/Services" style={({isActive}) => ({color: isActive? "black": ""})}>Services</NavLink>
              </li>
              <li>
                {/* <a href="">Contact</a> */}
                <NavLink to="/Contact" style={({isActive}) => ({color: isActive? "black": ""})}>Contact</NavLink>
              </li>
              <li>
                {/* <a href="">Our Team</a> */}
                <NavLink to="/Team" style={({isActive}) => ({color: isActive? "black": ""})}>Our Team</NavLink>
              </li>
            </ul>
            {!menubar && (
              <img
                src={hamburger}
                alt="hamburger_menu"
                className="hamburger"
                onClick={handleHambuger}
              />
            )}

            {menubar && (
              <img
                src={cancel}
                alt="cancel_menu"
                className="cancel"
                onClick={handleHambuger}
              />
            )}
          </div>
        </div>

        <div className={`second-nav-links ${menubar ? "active" : ""}`}>
          <ul>
            <li>
              <NavLink to="/" end style={({isActive}) => ({color: isActive? "black": ""})}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/About" style={({isActive}) => ({color: isActive? "black": ""})}>About</NavLink>
            </li>
            <li>
              <NavLink to="/Services" style={({isActive}) => ({color: isActive? "black": ""})}>Services</NavLink>
            </li>
            <li>
              <NavLink to="/Contact" style={({isActive}) => ({color: isActive? "black": ""})}>Contact</NavLink>
            </li>
            <li>
              <NavLink to="/Team" style={({isActive}) => ({color: isActive? "black": ""})}>Our Team</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
