import React from 'react';
import CommonInput from './../CommonInput';
import List from './List';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      list: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }
  render() {
    return (
      <div>
        <List list={this.state.list} onDelete={this.handleDelete.bind(this)} />
        <label>value : {this.state.name}</label>
        <CommonInput
          value={this.state.name}
          onChange={this.handleChange}
          onEnter={this.handleClick.bind(this)}
        />
        <button
          className="btn btn-block btn-sm"
          onClick={this.handleClick.bind(this)}
        >
          입력
        </button>
      </div>
    );
  }

  handleDelete(index, e) {
    let oList = this.state.list.slice();
    oList.splice(index, 1);
    this.setState({ list: oList });
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  handleClick(e) {
    if (this.state.name.trim() === '') {
      alert('내용을 입력해 주세요');
      return;
    }
    let list = this.state.list.slice();
    list.push(this.state.name);
    this.setState({ list: list });
    this.setState({ name: '' });
    console.log('clicked : ' + this.state.name);
  }
}

export default App;
