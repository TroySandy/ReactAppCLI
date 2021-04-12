import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import Footer from "./componets/site/Footer";
import Header from "./componets/site/Header";
import Sidebar from "./componets/site/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Sidebar />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
