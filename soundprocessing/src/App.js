
import "./App.css";
import Intro from "./components/intro.js";
import Noisereduction from './components/noisereduction.js';
import Convert from "./components/convertfile.js";
import Bassboost from "./components/bassboost";
import Merge from "./components/mergefile.js";
import Cut from "./components/cut.js";
import Volume from "./components/volume.js";
import Footer from "./components/footer.js";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";


function App() {
  return (
  
<div>
<Router basename="/">


<header id="navigation_bar">


<nav>
<ul>

    <div id="logo">
    <li><Link to="/">SOUNDPROCESSOR </Link> </li>
    </div>

    <div id="tools"> 
    <li><Link to="/noisereduction">Noise reduction</Link></li>
    <li><Link to="/convert"> Convert</Link></li>
    <li> <Link to="/cut">Cut</Link>    </li>
    <li><Link to="/merge"> Merge </Link></li>
    <li> <Link to="/bassboost"> Bassboost </Link></li>
    <li> <Link to ="/volumesetting">Volume Adjust </Link></li>
    </div>
</ul>
</nav>


</header>
  

<Routes>  

<Route path="/" element={<Intro/>}></Route>
<Route path="/noisereduction" element={<Noisereduction/>}></Route>
<Route path="/bassboost" element={<Bassboost/>}></Route>
<Route path ="/convert" element={<Convert/>}></Route>
<Route path ="/cut" element={<Cut/>}></Route>
<Route path ="/merge" element={<Merge/>}></Route>
<Route path="/volumesetting" element={<Volume/>}></Route>

</Routes>


</Router>


<Footer/> 

</div>
    
  );
}

export default App;


