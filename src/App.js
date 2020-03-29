import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import Homepage from "./pages/homepage/Homepage.js";
import Shop from "./pages/shop/Shop";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Homepage />} />
        <Route exact path="/shop" render={() => <Shop />} />
      </Switch>
    </div>
  );
}

export default App;
