import React, { Component } from 'react';
import './App.css';

//imports
import Calculator from '../Calculator/Calculator';

//MUI
import {Typography} from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <div>
        <Typography variant="h2">Sezzle Code Challenge</Typography>
        <Calculator />
      </div>
    )
  };
};//end class

export default App;
