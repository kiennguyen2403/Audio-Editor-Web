
import "./App.css";
import Intro from "./components/intro.js";
import Noisereduction from './components/noisereduction.js';
import Normalize from "./components/normalize.js";
import Volume from "./components/volumeadjust";
import Silence from "./components/silence.js";
import Speechtotext from "./components/speechtotext.js";
import Login from "./components/login";
import Footer from "./components/pagecomponent/footer";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";



function App() {
  return (
  
<div>
<Router basename="/">


<header id="navigation_bar">


<nav>
<ul>

    <div id="logo">
    <li><Link to="/">Echo </Link> </li>
    </div>

    <div id="tools"> 
    <li><Link to="/noisereduction">Noise reduction</Link></li>
    <li><Link to="/volumeadjust"> Volume adjust</Link></li>
    <li> <Link to="/normalize">Normalize</Link>    </li>
    <li><Link to="/speechtotext"> Transcribe </Link></li>
    <li> <Link to="/silence"> Remove silence </Link></li>
    <li><Link to="/login"><img src={"./picture/user.png"} alt="login_icon" id="loginicon"></img></Link></li>
    </div>
</ul>
</nav>


</header>
  

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


<Footer/> 

</div>
    
  );
}

export default App;


