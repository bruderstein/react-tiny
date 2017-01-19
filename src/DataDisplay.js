import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchData from './actions/fetchData'

class DataDisplay extends Component {
  
  constructor() {
    super();
    this.state = {
      inputValue: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onFetchClick = this.onFetchClick.bind(this);
  }
  
  onChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }
  
  onFetchClick() {
    this.props.fetchData(this.state.inputValue);
  }
  
  render () {
    
    const { theData } = this.props;
    
    return (
      <div>
        <span>Data already collected:</span>
        <table>
          {theData.map(entry => <tr key={entry.id}><td>{entry.id}</td><td>{entry.response.data}</td></tr>)}
        </table>
        
        <input type="text" value={this.state.inputValue} onChange={this.onChange} />
        <button onClick={this.onFetchClick}>Fetch Data for {this.state.inputValue}</button>
      </div>
    );
  }
}

// This function receives the current state from the store, and returns an object,
// where each key is the name of the prop passed to the component above, and
// the value is the value of the prop. This "maps" the redux store state to props, so
// you can select out what you need
function mapStateToProps(state) {
  return {
    theData: state.sample
  };
}

// This function receives the "dispatch" function, which is the function that can
// dispatch actions into the reducers, and provide a new store state
// Because we have `redux-promise` middleware installed in our store,
// we can dispatch a promise that resolves to an action too
function mapDispatchToProps(dispatch) {
  
  return {
    fetchData: (id) => dispatch(fetchData(id))
  };
  /*
    // An alternative, more fully written out version would be (the above is the nice ES6 version!):
    
    return {
      fetchData: function (id) {
        const fetchDataPromise = fetchData(id);
        dispatch(fetchDataPromise);
      }
    };
   */
}
// Connect the DataDisplay component to the store. The connect function returns
// a new component, which renders DataDisplay with the props from mapStateToProps and mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(DataDisplay);
