import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';

//imports
import Calculator from '../Calculator/Calculator';
import History from '../History/History';

//MUI
import {Typography} from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <div>
        <Typography variant="h2">Sezzle Code Challenge</Typography>
        <Calculator />
        <History />
      </div>
    )
  };
};//end class

//connect to redux
export default connect()(App);
