import React from 'react';

class Page2 extends React.Component {
  render() {
    return <h1>Page2 : {this.props.match.params.name}</h1>;
  }
}

export default Page2;
