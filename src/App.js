import logo from './logo.svg';
// fontawesome imported via cdn
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';

import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";
import {BrowserRouter,Route, Routes} from "react-router-dom";

function App() {
 return (
<BrowserRouter>
 <div className="container">
   <Routes>
     <Route path="/hello"
            exact={true}
            element={<HelloWorld/>}/>
     <Route path="/"
            exact={true}
            element={<Labs/>}/>
     <Route path="/tuiter"
            exact={true}
            element={<Tuiter/>}/>
   </Routes>
 </div>
</BrowserRouter>
 );
}


export default App;
