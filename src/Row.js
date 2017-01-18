import React, { Component, PropTypes } from 'react';
import Label from './Label';


export default class Row extends Component {
  
  static propTypes = {
    cellCount: PropTypes.number
  };
  
  constructor() {
    super();
    this.state = {
      editCell: null
    };
    
    this.onClick = this.onClick.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }
  
  onClick(index) {
    this.setState({
      editCell: index
    });
  }
  
  onKeyDown(e) {
    if (e.keyCode === 9) {
      e.preventDefault();
      this.setState({
        editCell: this.state.editCell + 1
      });
      this.setFocus = true;
    }
  }
  
  render() {
    const cells = [];
    for (let i = 0; i < this.props.cellCount; ++i) {
      if (this.state.editCell === i) {
        // Set readOnly here, as react gives a warning if `value` is set, and there's no `onChange`
        // (try taking it out and run the tests)
        cells.push(<input key={i}
                          value={'Label ' + i}
                          readOnly
                          onKeyDown={this.onKeyDown}
                          ref={i => {
                            this.myInput = i;
                          } }
        />);
      } else {
        cells.push(<Label key={i} onClick={this.onClick} index={i} />);
      }
    }
    
    if (this.setFocus) {
      this.setFocus = false;
      setTimeout(() => this.myInput.focus());
    }
    
    return (
      <div>
        {cells}
      </div>
    );
  }
}
