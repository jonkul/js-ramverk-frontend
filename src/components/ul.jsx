import React, { useState, useEffect } from "react";

let {Component} = React;
const data = [{"id": "1","name": "Bill"}, {"id": "2","name": "Sarah"}]

class Child extends Component {
  render() {
    let {name} = this.props;
    return <li>{name}</li>
  }
}

class Parent extends Component {
  render() {
    return (
        <div>
          <h1>{"Group 1"}</h1>
          <ul>{this.props.data.map(item => {
                return <Child key={item.id} {...item} />
              })}
          </ul>
        </div>
    );
  }
}

ReactDOM.render(
  <Parent data={data} />,
  document.getElementById('app')
);
