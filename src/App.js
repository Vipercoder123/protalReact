import "./styles.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import FAQ from "./Pages/FAQ";
import Events from "./Pages/Events";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <Router>
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/FAQs">FAQs</Link>
          </li>
          <li>
            <Link to="/Events">Events</Link>
          </li>
        </ul> */}

        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
          <Route path="/FAQs" element={<FAQ />} />
          <Route path="/Events" element={<Events />} />
        </Routes>
      </Router>
      {/* <FAQ/> */}
    </div>
  );
}

export default App;
