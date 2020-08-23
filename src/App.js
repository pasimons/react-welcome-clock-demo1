import React from "react";

import { Route , Switch} from 'react-router-dom';
import "./App.css";
import Welcome from "./components/welcome/Welcome";
import useParams from "react-router-dom"
import Navigation from './components/navigation/Navigation';
import Error from './components/error/Error'

// function ID(){
//   let { id } = useParams();
//   <div>
//       <h3>ID: {id}</h3>
//     </div>
// }


function App() {
  
  return (
   
   <div className="App">
    
      <Navigation/>
      <Switch>
      <Route
      exact  
      path="/" 
      render={(props)=> <Welcome {...props} name= "Patricia Simons"/>}
      />
      
      < Route  path='/welcome/:name' component={Welcome} />
        
       
      <Route path="*">
            <Error/>
          </Route>
    </Switch>
    </div>
  );

}

export default App;