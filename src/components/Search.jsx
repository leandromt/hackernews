// Componentes de Classe ES6
// Possui indepencia
import React, { Component } from "react";

class Search extends Component {
  render() {
    const { onChange, value, children } = this.props;
    return (
      <form>
        <label htmlFor="search">{children}</label>
        <input id="search" type="text" onChange={onChange} value={value} />
      </form>
    );
  }
}

export default Search;
