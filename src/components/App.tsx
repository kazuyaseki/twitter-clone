import * as React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Home from './Home';
import Header from './organisms/Header';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Route path="/" component={Home} />
        </main>
      </div>
    );
  }
}

export default App;
