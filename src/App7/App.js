import React from 'react';
import Box from './Box';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  render() {
    var rows = [];
    for (let i = 0; i < this.state.value; i++) {
      rows.push(<Box key={i} />);
    }

    return (
      <div>
        <div>
          <button onClick={this.handleValueChange.bind(this, 1)}>추가</button>
          <button onClick={this.handleValueChange.bind(this, -1)}>삭제</button>
        </div>

        {rows}
      </div>
    );
  }

  handleValueChange(v, e) {
    if (this.state.value + v >= 0) {
      this.setState({ value: this.state.value + v });
    }
  }
}

export default App;
