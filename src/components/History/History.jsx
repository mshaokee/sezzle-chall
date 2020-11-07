import React, { Component } from 'react';
import { connect } from 'react-redux';


class History extends Component {

    componentDidMount(){
        console.log('History loaded...');
        // this.props.dispatch({
        //     type: 'fetch_history'
        // })
    };//end
    
    render(){
        return(
            <div>
                <p>History</p>
                <ul>
                    <li>1</li>
                </ul>
            </div>
        )
    };//end render
};//end History

const putPropsOnState = reduxState => ({ reduxState })

export default connect(putPropsOnState)(History);