import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

//imports
import Calculator from '../Calculator/Calculator';
import History from '../History/History';

//MUI
import { Typography } from '@material-ui/core';

// Websocket
// new connection
import { w3cwebsocket } from 'websocket';
const client = new w3cwebsocket('ws://localhost:3000');
// let socket = new WebSocket('ws://localhost:3000');

class App extends Component {

  state = {
    dataFromServer: '',
  }

  componentDidMount() {
    console.log('App loaded.......?');

    client.onopen = () => {
      console.log('------->WebSocket Client Connected');
    }

    client.onmessage = () => {
      console.log('ajdfklajfkdlasjfkladsjklsafjklajfdklsa');
    }

    // this.ws.onopen = () => {
    //   // on connecting, do nothing but log it to the console
    //   console.log('connected to websocket')
    // }

    // this.ws.onmessage = evt => {
    //   // on receiving a number, add it to the list of history
    //   const history = JSON.parse(evt.data)
    //   this.setState({ dataFromServer: this.props.reduxState })
    //   console.log(history);
    // }

    // this.ws.onclose = () => {
    //   console.log('disconnected')
    //   // automatically try to reconnect on connection loss
    // }

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
