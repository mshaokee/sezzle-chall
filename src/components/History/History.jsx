import React, { Component } from 'react';
import { connect } from 'react-redux';
//test
const URL = 'ws://localhost:3000';

class History extends Component {

    state = {
        equation: '',
        history: [],
    }

    ws = new WebSocket(URL);

    componentDidMount() {
        console.log('History loaded...', this.props.reduxState.calcHistory);

        //TEST
        this.ws.onopen = () => {
            // on connecting, do nothing but log it to the console
            console.log('connected')
        }

        this.ws.onmessage = evt => {
            // on receiving a number, add it to the list of history
            const history = JSON.parse(evt.data)
            this.addHistory(history)
        }

        this.ws.onclose = () => {
            console.log('disconnected')
            // automatically try to reconnect on connection loss
            this.setState({
                ws: new WebSocket(URL),
            })
        }

        // addHistory = history => {
        //     this.setState(state => ({ history: [history, ...this.props.reduxState.calcHistory] }))
        // }

        // submitHistory = historyString => {
        //     const history = { equation: this.props.reduxState.calcHistory.equation, history: historyString }
        //     this.ws.send(JSON.stringify(history))
        //     this.addHistory(history);
        // }

        //get history from database
        this.props.dispatch({
            type: 'fetch_history'
        })
    };//end

    render() {
        return (
            <div>
                <p>History</p>
                <ul>
                    {this.props.reduxState.calcHistory.map((History, index) => {
                        return (
                            <li key={index}>{History.equation} {'='} {History.history}</li>
                        )
                    })}
                </ul>
            </div>
        )
    };//end render
};//end History

const putPropsOnState = reduxState => ({ reduxState })

export default connect(putPropsOnState)(History);