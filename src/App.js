import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import Homepage from "./pages/homepage/Homepage.js";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignIn from "./pages/signin/SignIn";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";
class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        //类似于onstatechange 当数据库数据改变时候，
        userRef.onSnapshot((snapShot) => {
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      this.props.setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
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
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
