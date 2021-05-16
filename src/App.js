import "./App.css";
import Resume from "./Resume";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>I am Chen Alon</h1>
        <p>Software Engineer</p>

        <nav className="site-nav">
          <ul className="group">
            <button onClick={console.log("home press")}>
              <a href="/">Home</a>
            </button>
            <button onClick={console.log("About press")}>
              <a href="/resume">Resume</a>
            </button>
            <button onClick={console.log("Portfolio press")}>
              <a href="/portfolio">Portfolio</a>
            </button>
            <button onClick={console.log("Contact press")}>
              <a href="/contact">Contact</a>
            </button>
          </ul>
        </nav>
        <Home></Home>

        {/* <Resume></Resume> */}
      </header>

      <footer>
        <p>&copy; Chen Alon. since 1993</p>
      </footer>
    </div>
  );
}

export default App;
