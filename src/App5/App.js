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
    let boxes = this.state.list.map((o, index) => {
      return (
        <div
          key={index}
          className={['box2', o ? 'on' : 'off'].join(' ')}
          onClick={this.handleBtnClick.bind(this, index)}
        >
          {index}
        </div>
      );
    });
    return <div>{boxes}</div>;
  }

  handleBtnClick(index, e) {
    var l = this.state.list.slice();
    l[index] = !l[index];
    this.setState({ list: l });
  }
}

export default App;
