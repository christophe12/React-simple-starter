import React from 'react';
import { Route, Switch }from 'react-router-dom';
import Homepage from './views/homepage';
import About from './views/about';
import Product from './views/product';
import Story from './views/story';

const App = () => {
    return(
      <Switch>
        <Route path="/" exact component={Homepage}/>
        <Route path="/about" component={About} />
        <Route path="/product" component={Product} />
        <Route path="/story" component={Story} />
      </Switch>
    );
}

export default App;
