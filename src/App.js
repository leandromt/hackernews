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

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Olá Mundo!',
      status: true,
      list,
    };

    this.onDismiss = this.onDismiss.bind(this);

  }

  onDismiss(id) {
    const updatedList = this.state.list.filter(item => item.objectID !== id);
    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <ul>
          {this.state.list.map(item =>
            <li id={item.key} key={item.objectID}>
              <p><a href={item.ul}>{item.title}</a></p>
              <p>{item.author}</p>
              <p>{item.num_comments}</p>
              <p>{item.points}</p>
              <p><button onClick={() => this.onDismiss(item.objectID)} type="button">Dismiss</button></p>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
