import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { isMobile } from "react-device-detect";
import "./style/App.css";

function App() {
  return (
    <div className="App">
      <header
        style={{
          marginBottom: isMobile ? "70px" : "100px",
          paddingLeft: isMobile ? "50px" : "150px",
          paddingRight: isMobile ? "50px" : "150px",
        }}
      >
        <Router>
          <ScrollToTop />
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/resume" component={Resume} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
      </header>

      <footer>
        <p>&copy; since 1993</p>
      </footer>
    </div>
  );
}

export default App;
