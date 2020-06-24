import React from 'react';
import Home from './composent/Home';
import Contact from './composent/Contact';
import Post from './composent/Post';
import Header from './composent/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return(
    <dive className="App">
     <Router>
      </Header>
        
          <Route path= "/" exact component={Home}/>
          <Route path= "/Post" exact component={Post}/>
          <Route path= "/Contact" exact component={Contact}/>
        
      


      
      </Footer>   
        <Route path= "/Footer" exact component={Footer}/>

      
     </Router> 
    </dive>
  );
}
 
export default App;