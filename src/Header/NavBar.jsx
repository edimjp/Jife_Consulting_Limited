// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import JCLLogo from "../assets/JCL_Logo.png";
import "./navBar.css";
import hamburger from "../assets/hamburger-menu.svg";
import cancel from "../assets/cancel.svg";
import { useState } from "react";

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
