import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Homepage from './views/homepage';
import Homepage from './views/about';
import Homepage from './views/product';
const App = () => {
    
  return(
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/about" component={About} />
        <Route path="/product" component={Product} />
      </Switch>
    );
}

export default App;