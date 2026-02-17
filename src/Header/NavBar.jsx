// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import JCLLogo from "../assets/JCL_Logo.png";
import "./navBar.css";

function NavBar() {
  return (
    <>
      <nav>
        <div>
          <a href="" className="JCLL_Link">
            <img src={JCLLogo} alt="JCL_Logo" className="JCL_Logo" />
          </a>

          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Our Team</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
