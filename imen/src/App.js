import React from "react";
import { BrowserRouter, Route,Switch } from "react-router-dom";
import Page2 from "./pages/Page2";

import Page1 from "./pages/Page1";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'


function App() {


  return (
    <div>
    <BrowserRouter>
      <Switch>
         <Route exact path='/' >
            <Page1/>
         </Route>
         <Route path='/Presence'>
            <Page2/>
         </Route>
      </Switch>
    </BrowserRouter>
</div>
);
}
         
   
      
   
  

  



export default App;
