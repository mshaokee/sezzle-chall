import React, { Component } from 'react';
import { connect } from 'react-redux';

class History extends Component {

    componentDidMount() {
        console.log('History loaded...', this.props.reduxState.calcHistory);

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