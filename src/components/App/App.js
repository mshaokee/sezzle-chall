import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

//imports
import Calculator from '../Calculator/Calculator';
import History from '../History/History';

//MUI
import { Typography } from '@material-ui/core';

//websocket
// import socketIOClient from 'socket.io-client';
// const socket = socketIOClient();

class App extends Component {

  state = {
    // history: this.props.reduxState,
  }

  componentDidMount() {
    console.log('App loaded.......?');
    //get history from database
    this.props.dispatch({
      type: 'fetch_history'
    })
    console.log('this is our history: ', );
    

    // client.onopen = () => {
    //   console.log('------->WebSocket Client Connected');
    // }
    // client.onmessage = () => {
    //   console.log('message sent');
    // }
    // client.onclose = () => {
    //   console.log('CLOSED!');
    // }

  };//end

  render() {
    return (
      <div>
        <Typography variant="h2">Sezzle Code Challenge</Typography>
        {/* websocket being sent down to child components through props*/}
        {/* I CAN SEND MY REDUX DATA DIRECTLY TO SERVER, NOW FIGURE OUT HOW TO */}
        {/* {JSON.stringify(this.state.history.history)} */}
        <Calculator />
        <History />
      </div>
    )
  };
};//end class

const putPropsOnState = reduxState => ({ reduxState })
//connect to redux
export default connect(putPropsOnState)(App);
