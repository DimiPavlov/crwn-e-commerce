import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"
import './App.css';
import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/ShopPage";
import Header from "./components/Header";
import SignInSignUp from "./pages/SignInSignUp";
import { auth, createUserProfileDocument } from "./firebase/Firebase.utils";


class App extends Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }) 
          console.log(this.state)
        })
      }
    this.setState({ currentUser: userAuth })
    });
  }
  componentWillUnmout() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}
export default App;
