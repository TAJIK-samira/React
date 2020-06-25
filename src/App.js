import React from 'react';
import Home from './Home';
import Contact from './Contact';
import Post from './Post';
import Header from './Header';
// import Footer from './Footer';
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
       <Router>
        <Header />
        
          <Route path= "/" exact component={Home}/>
          <Route path= "/Post" exact component={Post}/>
          <Route path= "/Contact" exact component={Contact}/> 
        
      
     </Router> 
    </div>
  );
}
 
export default App;