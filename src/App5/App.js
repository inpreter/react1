import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [true, true, true, true, true],
    };
  }

  render() {
    let b = this.state.list.map((o, index) => {
      return (
        <div key={index} className={['box2', o ? 'on' : 'off'].join(' ')}>
          {!o ? (
            <button
              className="btn btn-sm btn-primary"
              onClick={this.handleBtnClick.bind(this, index)}
            >
              On
            </button>
          ) : (
            <button
              className="btn btn-sm btn-danger"
              onClick={this.handleBtnClick.bind(this, index)}
            >
              Off
            </button>
          )}
        </div>
      );
    });
    return <div>{b}</div>;
  }

  handleBtnClick(index, e) {
    var l = this.state.list.slice();
    l[index] = !l[index];
    this.setState({ list: l });
  }
}

export default App;
