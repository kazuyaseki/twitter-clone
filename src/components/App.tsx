import * as React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

import Home from './Home';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
        </header>
        <main>
          <Route path="/" component={Home} />
        </main>
      </div>
    );
  }
}

export default App;
