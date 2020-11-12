import React, { Component } from 'react';
import { connect } from 'react-redux';

class History extends Component {

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