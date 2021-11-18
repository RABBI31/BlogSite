import React, { Fragment } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import BlogList from './BlogList';


function App() {
  return (
    
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
          
            <Route path="/create" component={Create} />
            <Route path="/blogs/:id" component={BlogDetails} />
            <Route path="/bloglist"  component={BlogList} />
            <Route path="*" component={NotFound} />
            <Route exact path="/" component={Home} /> 
          </Routes>
         </div>
      </div>
    </Router>
    
  );
}

export default App;