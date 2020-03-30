import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import Homepage from "./pages/homepage/Homepage.js";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignIn from "./pages/signin/SignIn";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Homepage />} />
        <Route exact path="/shop" render={() => <Shop />} />
        <Route exact path="/signin" render={() => <SignIn />} />
      </Switch>
    </div>
  );
}

export default App;
