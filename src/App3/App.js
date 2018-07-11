import React from 'react';
import Box from './Box';
import './Box.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
    };
  }

  render() {
    return (
      <div>
        <div>Total Clicked : {this.state.total}</div>
        <div>
          <Box onClick={this.handleClick.bind(this)} />
          <Box onClick={this.handleClick.bind(this)} />
          <Box onClick={this.handleClick.bind(this)} />
          <Box onClick={this.handleClick.bind(this)} />
          <Box onClick={this.handleClick.bind(this)} />
        </div>
      </div>
    );
  }

  handleClick(value, e) {
    this.setState({ total: this.state.total + value });
  }
}

export default App;
