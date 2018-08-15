import React, { Component } from "react";
import Header from "./components/Header";
import Table from "./components/Table";
import Button from "./components/Button";
import "./App.css";

const DEFAULT_QUERY = "redux";
const DEFAULT_HPP = "100";

const PATH_BASE = "https://hn.algolia.com/api/v1";
const PATH_SEARCH = "/search";
const PARAM_SEARCH = "query=";
const PARAM_PAGE = "page=";
const PARAM_HPP = "hitsPerPage=";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Hacker News API",
      result: null,
      searchTerm: DEFAULT_QUERY
    };

    // Métodos do objeto
    this.setSearchTopStories = this.setSearchTopStories.bind(this);
    this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  fetchSearchTopStories(searchTerm, page = 0) {
    fetch(
      `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`
    )
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result))
      .catch(error => error);
  }

  setSearchTopStories(result) {
    const { hits, page } = result;

    const oldHits = page !== 0 ? this.state.result.hits : [];
    const updatedHits = [...oldHits, ...hits];

    this.setState({
      result: { hits: updatedHits, page }
    });
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedHits = this.state.result.hits.filter(isNotId);
    this.setState({
      result: { ...this.state.result, hits: updatedHits }
    });
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onSearchSubmit(event) {
    const { searchTerm } = this.state;
    this.fetchSearchTopStories(searchTerm);
    event.preventDefault();
  }

  render() {
    const { title, result, searchTerm } = this.state;
    const page = (result && result.page) || 0;
    console.log(result);

    /*if (!result) {
      console.log("morreu!");
      return null;
    }*/

    return (
      <div className="page">
        <div className="interactions">
          <Header title={title} />
          <Search
            onChange={this.onSearchChange}
            onSubmit={this.onSearchSubmit}
            value={searchTerm}
          >
            Buscar
          </Search>
        </div>
        {result && <Table list={result.hits} onDismiss={this.onDismiss} />}
        <div className="interactions">
          <Button
            onClick={() => this.fetchSearchTopStories(searchTerm, page + 1)}
          >
            More
          </Button>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const { searchTerm } = this.state;
    this.fetchSearchTopStories(searchTerm);
  }
}

// Functional Stateless Components
// Components nao possui ciclo de vida
const Search = ({ onChange, onSubmit, value, children }) => (
  <form onSubmit={onSubmit}>
    <input
      id="search"
      type="text"
      onChange={onChange}
      onSubmit={onSubmit}
      value={value}
    />
    <button type="submit">{children}</button>
  </form>
);

export default App;
