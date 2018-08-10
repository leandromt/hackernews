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
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          {
            list.map(function (item, key) {
              return (
                <li id={item.key} key={item.objectID}>
                  <p><a href={item.ul}>{item.title}</a></p>
                  <p>{item.author}</p>
                  <p>{item.num_comments}</p>
                  <p>{item.points}</p>
                  <p>{item.objectID}</p>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
