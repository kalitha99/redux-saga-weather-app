import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Weather from "./Weather";
import Forecast from "./Forecast";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route exact path="/">
            <Weather />
          </Route>

          <Route exact path="/forecast">
            <Forecast />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
