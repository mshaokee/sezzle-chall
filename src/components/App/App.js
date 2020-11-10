import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

//imports
import Calculator from '../Calculator/Calculator';
import History from '../History/History';

//MUI
import { Typography } from '@material-ui/core';

// Websocket

let client = new WebSocket('ws://localhost:3000');

class App extends Component {

  state = {
    dataFromServer: '',
  }



  componentDidMount() {
    console.log('App loaded.......?');

    try {
      client.send(this.state.dataFromServer);
    } catch (err) {
      console.log(err);
    }

    client.onopen = () => {
      console.log('------->WebSocket Client Connected');
    }

    client.onmessage = () => {
      console.log('message sent');
    }

    client.onclose = () => {
      console.log('CLOSED!');
    }

    client.onerror = () => {
      console.log('SOMETHING IS WRONG');

    }

  };//end

  render() {
    return (
      <div>
        <Typography variant="h2">Sezzle Code Challenge</Typography>
        {/* websocket being sent down to child components through props*/}
        {/* I CAN SEND MY REDUX DATA DIRECTLY TO SERVER, NOW FIGURE OUT HOW TO */}
        {JSON.stringify(this.state.dataFromServer)};
        {/* {JSON.stringify(this.props.reduxState)} */}
        <Calculator websocket={this.ws} />
        <History websocket={this.ws} />
      </div>
    )
  };
};//end class

const putPropsOnState = reduxState => ({ reduxState })
//connect to redux
export default connect(putPropsOnState)(App);
