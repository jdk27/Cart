import React, { Component } from 'react';

class Sizes extends Component {

  render() {
    return (
      <div>
      	<h1>{this.props.data.currencyFormat}{this.props.data.price}</h1>
      </div>
    );
  }
}

export default Sizes;