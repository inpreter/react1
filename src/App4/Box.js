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
      <div className="box">
        <div>
          <h4>{this.state.clicked}</h4>
          <button
            className="btn btn-sm btn-primary"
            onClick={this.handleClick.bind(this)}
          >
            Click
          </button>
          {/* <button
            className="btn btn-sm btn-primary"
            onClick={this.handleClick2.bind(this)}
          >
            +2 Click
          </button> */}
        </div>
      </div>
    );
  }

  // 이벤트 핸들러
  handleClick(e) {
    this.setState({ clicked: this.state.clicked + 1 });
    this.props.onClick(1);
  }

  // 이벤트 핸들러 (2증가)
  handleClick2(e) {
    this.setState({ clicked: this.state.clicked + 2 });
    this.props.onClick(2);
  }
}

export default Box;
