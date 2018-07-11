import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    var rows = [];
    for (let i = 1; i < 10; i++) {
      rows.push(
        <div key={i}>
          {this.state.value}x{i}={this.state.value * i}
        </div>
      );
    }

    return (
      <div>
        <input
          type="number"
          maxLength="1"
          value={this.state.value}
          onChange={this.handleValueChange.bind(this)}
        />
        {rows}
      </div>
    );
  }

  handleValueChange(e) {
    this.setState({ value: e.target.value });
  }
}

export default App;
