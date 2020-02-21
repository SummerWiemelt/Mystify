import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Main from "./components/main/Main.component";

import { Provider } from "react-redux";
import store from "./globals/store";
import firebase from "firebase";
import { loginUser } from "./actions/actions";

// Configure Firebase.
var config = {
  apiKey: "AIzaSyD45g6sU7WqfcJP_CjHat7Ety05Mv3oqJY",
  authDomain: "plant-app-81b1e.firebaseapp.com",
  databaseURL: "https://plant-app-81b1e.firebaseio.com",
  projectId: "plant-app-81b1e",
  storageBucket: "plant-app-81b1e.appspot.com",
  messagingSenderId: "196736420711",
  appId: "1:196736420711:web:998cd54734e861fc833dc2",
  measurementId: "G-1JTKXBWVCS"
};
firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    store.dispatch(loginUser(user));
  }
});
console.log(firebase.auth());

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Main />
        </div>
      </Provider>
    );
  }
}

export default App;
