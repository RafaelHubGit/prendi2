import React from 'react'; 
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './Header';

import Home from './Home/Home';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
         <Route exact path="/Home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
