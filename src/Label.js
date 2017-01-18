
import React, { Component } from 'react';

export default class Label extends Component {
  
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }
  
  onClick() {
    this.props.onClick(this.props.index);
  }
  
  render() {
    return <span onClick={this.onClick}>Label {this.props.index}</span>;
  }
}
