import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App2 from './App2/App';
import App3 from './App3/App';
import App4 from './App4/App';
import App5 from './App5/App';

import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

class MainApp extends React.Component {
  render() {
    return (
      <Router>
        {/* <div>
          <ul>
            <li>
              <Link to="/">Page1</Link>
            </li>
            <li>
              <Link to="/page2">Page2</Link>
            </li>
            <li>
              <Link to="/page2/react">Page2 With Param</Link>
            </li>
            <li>
              <Link to="/page3">Page3</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Page1} />
          <Route exact path="/page2" component={Page2} />
          <Route path="/page2/:name" component={Page2} />
          <Route path="/page3" component={Page3} />
        </div> */}
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
          </ul>

          <hr />

          <Route exact path="/" component={App2} />
          <Route path="/app3" component={App3} />
          <Route path="/app4" component={App4} />
          <Route path="/app5" component={App5} />
        </div>
      </Router>
    );
  }
}

export default MainApp;
