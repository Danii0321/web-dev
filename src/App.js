import logo from './logo.svg';
import React from 'react'

// fontawesome imported via cdn
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './explore.css';
import './vendors/fontawesome/css/all.min.css';

import HelloWorld from "./components/hello-world";
import Labs from "./components/labs/index";
import Tuiter from "./components/tuiter";
import HomeScreen from "./components/tuiter/HomeScreen/index";
import ExploreScreen from "./components/tuiter/ExploreScreen/ExploreScreen";
import NotificationScreen from "./components/tuiter/NotificationScreen/index";
import {BrowserRouter,Route, Routes} from "react-router-dom";

function App() {
 return (
   <BrowserRouter>
     <div className="container">
       <Routes>
         <Route path="/">
           <Route path=""
                  element={<Labs/>}/>
           <Route path="hello"
            element={<HelloWorld/>}/>
           <Route path="tuiter"
                element={<Tuiter/>}>

           <Route index
                    element={<HomeScreen/>}/>
              <Route path="explore"
                  element={<ExploreScreen/>}/>
              <Route path="notifications"
                element={<NotificationScreen/>}/>
           </Route>
         </Route>

       </Routes>
     </div>
   </BrowserRouter>
 );
}

export default App;


//           <Route path="hello"
//                  element={<HelloWorld/>}/>
//           <Route path="tuiter"
//                  element={<Tuiter/>}>
//
//
//             ...
//           </Route>
//         </Route>
//       </Routes>
//     </div>
//   </BrowserRouter>