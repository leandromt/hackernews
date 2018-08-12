import React, { Component } from 'react';

const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase());

class Table extends Component {
  render() {
    const { list, pattern, onDismiss } = this.props;
    return (
      <ul>
        {list.filter(isSearched(pattern)).map(item =>
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

export default Table;