import React, { Component } from 'react';

//MUI
import { TextField, Button, Typography } from '@material-ui/core';

class Calculator extends Component {

    componentDidMount() {
        console.log('Calculator loaded.');
    };//end

    //states
    state = {
        input: 0,
        output: '',
    };//end state

    //handleClick for numbers
    handleClick = (event) => {
        console.log('number is:', event, 'input', this.state.input);
        //if else statements for on clicks of numbers/symbols
        if (event === 'clear') {
            this.setState({ input: 0 })
        } else if (event === 'one') {
            this.setState({ input: 1 })
        } else if (event === 'two') {
            this.setState({ input: 2 })
        } else if (event === 'three') {
            this.setState({ input: 3 })
        } else if (event === 'four') {
            this.setState({ input: 4 })
        } else if (event === 'five') {
            this.setState({ input: 5 })
        } else if (event === 'six') {
            this.setState({ input: 6 })
        } else if (event === 'seven') {
            this.setState({ input: 7 })
        } else if (event === 'eight') {
            this.setState({ input: 8 })
        } else if (event === 'nine') {
            this.setState({ input: 9 })
        } else if (event === 'zero') {
            this.setState({ input: 0 })
        } else if (event === 'dot') {
            this.setState({ input: '.' })
        } else if (event === 'addition') {
            this.setState({ input: '+' })
        } else if (event === 'subtraction') {
            this.setState({ input: '-' })
        } else if (event === 'multiply') {
            this.setState({ input: '*' })
        } else if (event === 'division') {
            this.setState({ input: '/' })
        } else if (event === 'equals') {
            this.setState({ output: this.state.input })
        }; //end if statement
    };//end handleClick


    render() {
        return (
            <div>
                {/* first row displays: output, clear button*/}
                <div>
                    <TextField value={this.state.input} variant="outlined" />
                    <Button onClick={(event) => this.handleClick('clear')} variant="outlined">C</Button>
                </div>
                {/* second rows displays: 7, 8, 9, plus sign */}
                <div>
                    <Button onClick={(event) => this.handleClick('seven')} variant="outlined">7</Button>
                    <Button onClick={(event) => this.handleClick('eight')} variant="outlined">8</Button>
                    <Button onClick={(event) => this.handleClick('nine')} variant="outlined">9</Button>
                    <Button onClick={(event) => this.handleClick('addition')} variant="outlined">+</Button>
                </div>
                {/* third row displays: 4, 5, 6, subtraction sign */}
                <div>
                    <Button onClick={(event) => this.handleClick('four')} variant="outlined">4</Button>
                    <Button onClick={(event) => this.handleClick('five')} variant="outlined">5</Button>
                    <Button onClick={(event) => this.handleClick('six')} variant="outlined">6</Button>
                    <Button onClick={(event) => this.handleClick('subtract')} variant="outlined">-</Button>
                </div>
                {/* fourth row displays: 1, 2, 3, multiplication sign */}
                <div>
                    <Button onClick={(event) => this.handleClick('one')} variant="outlined">1</Button>
                    <Button onClick={(event) => this.handleClick('two')} variant="outlined">2</Button>
                    <Button onClick={(event) => this.handleClick('three')} variant="outlined">3</Button>
                    <Button onClick={(event) => this.handleClick('multiply')} variant="outlined">*</Button>
                </div>
                {/* fifth row displays: 0, period, equals, division sign */}
                <div>
                    <Button onClick={(event) => this.handleClick('zero')} variant="outlined">0</Button>
                    <Button onClick={(event) => this.handleClick('dot')} variant="outlined">.</Button>
                    <Button onClick={(event) => this.handleClick('equals')} variant="outlined">=</Button>
                    <Button onClick={(event) => this.handleClick('division')} variant="outlined">/</Button>
                </div>
                <div>
                    <TextField value={this.state.output} variant="outlined" />
                </div>
                <div>
                    <Typography>History: </Typography>
                </div>
            </div>
        )
    };//end render
};//end class

export default Calculator;