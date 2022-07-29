import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Intro from "./components/intro";
import Noisereduction from "./components/noisereduction";
import Normalize from "./components/normalize";
import Volume from "./components/volumeadjust";
import Silence from "./components/silence";
import Speechtotext from "./components/speechtotext";
import Login from "./components/login";
import Header from "./components/pagecomponent/header";

function App(props) {
  const { setToken } = props;
  return (
    <div>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/noisereduction" element={<Noisereduction />} />
          <Route path="/volumeadjust" element={<Volume />} />
          <Route path="/normalize" element={<Normalize />} />
          <Route path="/speechtotext" element={<Speechtotext />} />
          <Route path="/silence" element={<Silence />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
