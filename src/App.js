import "./styles.css";
import { Route, Switch } from "react-router-dom";
import FAQ from "./Pages/FAQ";
import Events from "./Pages/Events";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/FAQs" component={FAQ} />
        <Route path="/Events" component={Events} />
      </Switch>

    </div>
  );
}

export default App;
