import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Index from "./pages/Index";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
         <Navbar /> 
          <Route exact path="/" component={Index} />
          <Footer />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
