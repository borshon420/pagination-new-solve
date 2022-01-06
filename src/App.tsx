import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

const Home = lazy(()=> import('./pages/Home'));
const Details = lazy(()=> import('./pages/Details'));

const App: React.FC = () => {
  return (
    <div className="App" data-testid="app">
      <Suspense fallback={<p>Loading...</p>}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/details" component={Details} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
