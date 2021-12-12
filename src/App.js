import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//react-router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
//firebase
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
//components
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import PageNotFound from "./Pages/PageNotFound";
import { UserContext } from "./Context/UserContext";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

//init firebase
import FirebaseConfig from "./Config/FirebaseConfig";
firebase.initializeApp(FirebaseConfig);

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
      </UserContext.Provider>
    </Router>
  );
};
//* means default
export default App;
