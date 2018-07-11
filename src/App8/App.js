import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { id: 1, name: 'user1', class: 'A' },
        { id: 2, name: 'user2', class: 'B' },
        { id: 3, name: 'user3', class: 'A' },
        { id: 4, name: 'user4', class: 'C' },
        { id: 5, name: 'user5', class: 'B' },
      ],
      temp: {},
    };
  }

  render() {
    let rows = this.state.list.map((o, index) => {
      return (
        <tr key={index}>
          <td>
            <span className="badge badge-primary">{o.id}</span>
          </td>
          <td>{o.name} </td>
          <td className={['classRow', o.class].join(' ')}>{o.class}</td>
        </tr>
      );
    });

    return (
      <div>
        <label className="badge badge-secondary">
          {this.state.list.length} 개
        </label>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            {rows}
            <tr onKeyPress={this.handleKeyPress.bind(this)}>
              <td>
                <input
                  type="text"
                  name="id"
                  className="form-control"
                  value={this.state.temp.id}
                  onChange={this.handleInputChange.bind(this)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={this.state.temp.name}
                  onChange={this.handleInputChange.bind(this)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="class"
                  className="form-control"
                  value={this.state.temp.class}
                  onChange={this.handleInputChange.bind(this)}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="3">
                <button
                  class="btn btn-primary btn-block"
                  onClick={this.handleAddClick.bind(this)}
                >
                  추가
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  // 키 입력 처리
  handleInputChange(e) {
    let t = this.state.temp;
    t[e.target.name] = e.target.value;
    this.setState({ temp: t });
  }

  // 입력 Form Enter 처리
  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleAddClick();
    }
  }

  // 추가 버튼 처리
  handleAddClick(e) {
    let l = this.state.list.slice();
    l.push(this.state.temp);
    this.setState({ temp: { id: '', name: '', class: '' } });
    this.setState({ list: l });
  }
}

export default App;
