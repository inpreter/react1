import React from 'react';

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: 0,
    };
  }

  render() {
    return (
      <div className="box" onClick={this.handleClick.bind(this)}>
        <div>
          <h4>{this.state.clicked}</h4>
        </div>
      </div>
    );
  }

  // 이벤트 핸들러
  handleClick(e) {
    this.setState({ clicked: this.state.clicked + 1 });
  }
}

export default Box;
