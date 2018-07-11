import React from 'react';
import Box from './Box';

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      boxes: [],
      sum: 0,
      total: 0,
    };
  }

  render() {
    let items = this.state.list.map((r, index) => {
      return <Items key={index} onClick={this.handleClickTotel.bind(this)} />;
    });
    if (!items) items = 'EMPTY';

    let boxes = this.state.boxes.map((r, index) => {
      return <Box key={index} onClick={this.handleClickSum.bind(this)} />;
    });

    if (!boxes) boxes = 'EMPTY';

    return (
      <div className="item">
        <div>{items}</div>
        <h3>Group Sum : {this.state.sum}</h3>
        <h4>Sub Total : {this.state.total}</h4>
        <div>{boxes}</div>
        <div>
          <button
            className="btn btn-sm btn-danger"
            onClick={this.handleAddItemsClick.bind(this)}
          >
            Add SubGroup
          </button>
          <button
            className="btn btn-sm btn-default"
            onClick={this.handleAddBoxClick.bind(this)}
          >
            Add Box
          </button>
        </div>
      </div>
    );
  }

  handleClickSum(value, e) {
    this.setState({ sum: this.state.sum + value });
    this.setState({ total: this.state.total + value });
    if (this.props.onClick) {
      this.props.onClick(value);
    }
  }

  handleClickTotel(value, e) {
    this.setState({ total: this.state.total + value });
    if (this.props.onClick) {
      this.props.onClick(value);
    }
  }

  handleAddItemsClick(e) {
    let l = this.state.list.slice();
    l.push(0);
    this.setState({ list: l });
  }

  handleAddBoxClick(e) {
    let l = this.state.boxes.slice();
    l.push(0);
    this.setState({ boxes: l });
  }
}

export default Items;
