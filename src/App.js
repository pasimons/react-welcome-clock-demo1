import React from "react";
import { Route } from 'react-router-dom';
import "./App.css";
import Welcome from "./components/welcome/Welcome";

import Navigation from './components/navigation/Navigation';
import Error from './components/error/Error'
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Route
      exact  
      path="/" 
      render={(props)=> <Welcome {...props} name= "Patricia Simons"/>}
      />
      <Error/>

    
    </div>
  );
}

export default App;