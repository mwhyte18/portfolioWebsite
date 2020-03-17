import React from "react";
import "./App.scss";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <div className="center">
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <div>
                  <About />
                  <Work />
                  <Footer />
                </div>
              )}
            />

            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
