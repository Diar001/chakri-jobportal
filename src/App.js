import "./styles/main.scss";
import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import Company from "./pages/company/Company";



const App = () => {
  return (
    <div className="App">
      <Switch>

        <Route exact path="/">
           <Home />
        </Route>

        <Route exact path="/companies">
           <Company />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
