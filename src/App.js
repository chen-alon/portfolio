import "./App.css";
import Nav from "./Nav";
import Home from "./Home";
import Resume from "./Resume";
import InputForm from "./InputForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // <div className="container">
    //   <InputForm />
    // </div>
    <div className="App">
      <header className="App-header">
        <h1>I am Chen Alon</h1>
        <p>Software Engineer</p>

        <Router>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/resume" component={Resume} />
            <Route path="/portfolio" />
            <Route path="/contact" />
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
