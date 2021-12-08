import "./styles.css";
import { Route, Switch } from "react-router-dom";
import FAQ from "./Pages/FAQ";
import Events from "./Pages/Events";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      {/* <div>
        <Link to="/FAQs">FAQs</Link>

        <Link to="/Events">Events</Link>
      </div> */}

      {/* <Switch>
        <Route path="/FAQs" component={FAQ} />

        <Route path="/Events" component={Events} />
      </Switch> */}
      <Home />

      <FAQ />
    </div>
  );
}

export default App;
