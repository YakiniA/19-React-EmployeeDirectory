import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import employeelogo from './employeeDirectory.png'; 

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
      <nav className="navbar navbar-expand-sm navbar-light justify-content-center">
        <a className="imgNav navbar-brand" href="#top">
          <img src={employeelogo} width="250" height="250" alt=""/>
          {/* <h2>Employee Directory</h2> */}
        </a>
      </nav>
  );
}

export default Navbar;
