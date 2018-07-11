import React from 'react';

class CommonInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          className="form-control"
          value={this.state.value}
          onKeyPress={this.handleKeyPress.bind(this)}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.onEnter(e);
    }
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    this.props.onChange(e);
  }
}

export default CommonInput;
