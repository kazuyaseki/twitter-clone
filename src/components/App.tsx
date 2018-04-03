import * as React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Header from './organisms/Header';
import Home from './Home';
import Notifications from './Notifications';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/notifications" component={Notifications} />
        </main>
      </div>
    );
  }
}

export default App;
