import React, { Component } from 'react';

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
  {
    title: 'Teste',
    url: 'https://github.com/reactjs/teste',
    author: 'Teste Abramov, Andrew Clark',
    num_comments: 6,
    points: 2,
    objectID: 4,
  }
];

const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: 'Olá Mundo!',
      status: true,
      searchTerm: '',
      list,
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
      <div className="App">
        <Header title={title} />
        <Search onChange={this.onSearchChange} value={searchTerm} />
        <Table list={list} term={searchTerm} onDismiss={this.onDismiss} />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    const { title } = this.props;
    return (
      <div>
        <h1>{title}</h1>
      </div>
    );
  }
}

class Search extends Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <form>
        <input type="text" onChange={onChange} value={value} />
      </form>
    );
  }
}

class Table extends Component {
  render() {
    const { list, term, onDismiss } = this.props;
    return (
      <ul>
        {list.filter(isSearched(term)).map(item =>
          <li id={item.key} key={item.objectID}>
            <p><a href={item.ul}>{item.title}</a></p>
            <p>{item.author}</p>
            <p>{item.num_comments}</p>
            <p>{item.points}</p>
            <p><button onClick={() => onDismiss(item.objectID)} type="button">Dismiss</button></p>
          </li>
        )}
      </ul>
    );
  }
}

export default App;
