import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App2 from './App2/App';
import App3 from './App3/App';
import App4 from './App4/App';
import App5 from './App5/App';
import App6 from './App6/App';
import App7 from './App7/App';
import App8 from './App8/App';

class MainApp extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">App2</Link>
            </li>
            <li>
              <Link to="/app3">App3</Link>
            </li>
            <li>
              <Link to="/app4">App4</Link>
            </li>
            <li>
              <Link to="/app5">App5</Link>
            </li>
            <li>
              <Link to="/app6">App6</Link>
            </li>
            <li>
              <Link to="/app7">App7</Link>
            </li>
            <li>
              <Link to="/app8">App8</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={App2} />
          <Route path="/app3" component={App3} />
          <Route path="/app4" component={App4} />
          <Route path="/app5" component={App5} />
          <Route path="/app6" component={App6} />
          <Route path="/app7" component={App7} />
          <Route path="/app8" component={App8} />
        </div>
      </Router>
    );
  }
}

export default MainApp;
