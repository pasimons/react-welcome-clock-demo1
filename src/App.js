import React from "react";
import { Route , Switch} from 'react-router-dom';
import "./App.css";
import Welcome from "./components/welcome/Welcome";
import Navigation from './components/navigation/Navigation';
import Error from './components/error/Error'
import Jeopardy from './components/jeopardy/Jeopardy'




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
      <Route path='/Jep' component={Jeopardy}/>
      
      
      < Route  path='/welcome/:name' component={Welcome} />
        
       
      <Route path="*">
            <Error/>
          </Route>
    </Switch>
  
    </div>
  );

}

export default App;