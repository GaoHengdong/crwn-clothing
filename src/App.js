import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import Homepage from "./pages/homepage/Homepage.js";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignIn from "./pages/signin/SignIn";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: "" };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        //类似于onstatechange 当数据库数据改变时候，
        userRef.onSnapshot(snapShot => {
          this.setState({
            user: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      this.setState({
        user: userAuth
      });
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Header user={this.state.user} />
        <Switch>
          <Route exact path="/" render={() => <Homepage />} />
          <Route exact path="/shop" render={() => <Shop />} />
          <Route exact path="/signin" render={() => <SignIn />} />
        </Switch>
      </div>
    );
  }
}

export default App;
