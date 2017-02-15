import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import './App.css';
import * as actions from './redux/Actions.js';
import { bindActionCreators } from 'redux';

class App extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='flex-container'>
        <button style={{width: '50px', height: '50px', borderRadius: '10px'}} onClick={() => this.props.numberActions.increment()}> + </button>
          <p style={{fontSize: '50px'}}><strong>{this.props.numbers.count}</strong></p>
        <button style={{width: '50px', height: '50px', borderRadius: '10px'}} onClick={() => this.props.numberActions.decrement()}> - </button>
      </div>
    );
  }
}

function mapStateToProps (state, ownProps) {
  return {
    numbers: state.numberReducer
  };
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    numberActions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
