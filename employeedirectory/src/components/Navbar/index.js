import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
 
      <nav className="navbar  navbar-expand-lg navbar-light justify-content-center" >
      <span className="navbar-brand"><h2>Employee Directory</h2></span>
      </nav>
  );
}

export default Navbar;
