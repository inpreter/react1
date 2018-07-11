import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let list = this.props.list.map((r, index) => {
      return (
        <tr key={index}>
          <td>
            {r}&nbsp;
            <button
              className="btn btn-sm btn-danger"
              onClick={this.props.onDelete.bind(this, index)}
            >
              &times;
            </button>
          </td>
        </tr>
      );
    });

    return (
      <table className="table table-bordered">
        <tbody>{list}</tbody>
      </table>
    );
  }
}

export default List;
