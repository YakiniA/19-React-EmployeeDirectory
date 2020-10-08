import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './staffDirectory.png'; 

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
        <a className="navbar-brand" href="#">
          <img src={logo} width="170" height="170" alt="" className="d-inline-block align-top" />
          <h2>Employee Directory</h2>
        </a>
      </nav>
  );
}

export default Navbar;
