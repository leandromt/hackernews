import React, { Component } from "react";
import Header from "./components/Header";
import Table from "./components/Table";

const list = [
  {
    title: "React",
    url: "https://facebook.github.io/react/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: "Redux",
    url: "https://github.com/reactjs/redux",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1
  },
  {
    title: "Teste",
    url: "https://github.com/reactjs/teste",
    author: "Teste Abramov, Andrew Clark",
    num_comments: 6,
    points: 2,
    objectID: 4
  }
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Olá Mundo!",
      status: true,
      searchTerm: "",
      list
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(id) {
    const updatedList = this.state.list.filter(item => item.objectID !== id);
    this.setState({ list: updatedList });
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    const { title, list, searchTerm } = this.state;
    return (
      <div className="page">
        <div className="interactions">
          <Header title={title} />
          <Search onChange={this.onSearchChange} value={searchTerm}>
            Buscar
          </Search>
        </div>
        <Table list={list} pattern={searchTerm} onDismiss={this.onDismiss} />
      </div>
    );
  }
}

// Functional Stateless Components
// Components nao possui ciclo de vida
const Search = ({ onChange, value, children }) => (
  <form>
    <label htmlFor="search">{children}</label>
    <input id="search" type="text" onChange={onChange} value={value} />
  </form>
);

export default App;
