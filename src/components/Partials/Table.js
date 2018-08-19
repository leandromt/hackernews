import React, { Component } from "react";
import { Button } from "./../Buttons";

class Table extends Component {
  render() {
    const { list, onDismiss } = this.props;
    return (
      <div className="table">
        {list.map(item => (
          <div id={item.key} key={item.objectID} className="table-row">
            <span style={{ width: "40%" }}>
              <a href={item.url}>{item.title}</a>
            </span>
            <span style={{ width: "30%" }}>{item.author}</span>
            <span style={{ width: "10%" }}>{item.num_comments}</span>
            <span style={{ width: "10%" }}>{item.spanoints}</span>
            <span style={{ width: "10%" }}>
              <Button
                className="button-inline"
                onClick={() => onDismiss(item.objectID)}
              >
                Dismiss
              </Button>
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default Table;
