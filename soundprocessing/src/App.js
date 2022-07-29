
import "./App.css";
import Intro from "./components/intro.js";
import Noisereduction from './components/noisereduction.js';
import Normalize from "./components/normalize.js";
import Volume from "./components/volumeadjust";
import Silence from "./components/silence.js";
import Speechtotext from "./components/speechtotext.js";
import Login from "./components/login";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Header from "./components/pagecomponent/header";


function App(props) {
  const {setToken}=props;
  return (
  
<div>
  <Router basename="/">
    <Routes>  
      <Route path="/" element={<Intro/>}></Route>
      <Route path="/noisereduction" element={<Noisereduction/>}></Route>
      <Route path="/volumeadjust" element={<Volume/>}></Route>
      <Route path ="/normalize" element={<Normalize/>}></Route>
      <Route path ="/speechtotext" element={<Speechtotext/>}></Route>
      <Route path ="/silence" element={<Silence/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
  </Router>
</div>
    
  );
}

export default App;


