import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrement = (event) => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = (event) => {
    if (this.state.count > 1) this.setState({ count: this.state.count - 1 });
  };

  handleRemove = () => {};

  render() {
    return (
      <>
        <div className="d-flex flex-row">
          <span className="p-2">Quantity: </span>
          <button
            disabled={this.state.count === 1}
            className="p-2 btn btn-primary"
            onClick={this.handleDecrement}
          >
            {" "}
            -
          </button>

          <span className="p-2">{this.state.count}</span>

          <button
            className="p-2 btn btn-primary"
            onClick={this.handleIncrement}
          >
            {" "}
            +
          </button>
          <p className="p-2"></p>
          <button className="btn btn-danger" onClick={this.handleRemove}>
            Remove
          </button>
        </div>
      </>
    );
  }
}

export default Counter;
