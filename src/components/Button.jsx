import React, { Component } from "react";

class Button extends Component {
  render() {
    const { onClick, className = "btn-default", children } = this.props;
    return (
      <button className={className} onClick={onClick} type="button">
        {children}
      </button>
    );
  }
}

export default Button;
