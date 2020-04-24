import React from "react";
import "./App.css";
import Home from "./containers/Home";
import Post from "./containers/Post";
import Etc from "./containers/Etc";
import Contact from "./containers/Contact";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/portfolio/:postId" component={Post} />
        <Route path="/contact" component={Contact} />
        <Route path="/etc" exact component={Etc} />
      </div>
    </Router>
  );
}

export default App;
