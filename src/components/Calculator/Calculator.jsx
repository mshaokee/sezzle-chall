import React, { Component } from 'react';

//MUI
import { TextField, Button, Typography } from '@material-ui/core';

class Calculator extends Component {

    componentDidMount() {
        console.log('Calculator loaded.');
    };//end

    //states
    state = {
        input: '',
        output: '',
        history: '',
    };//end state

    //handleClick for numbers
    handleClick = (event) => {
        console.log('number is:', event, 'input', this.state.input);
        //if else statements for on clicks of numbers/symbols
        let value = event;

        if (value === '=') {
            if (this.state.input !== '') {
                let answer = '';
                try {
                    answer = eval(this.state.input);
                }
                catch (err) {
                    this.setState({ input: 'ERROR' });
                }
                if (answer === undefined) {
                    this.setState({ input: 'ERROR' });
                }
                else
                    this.setState({ input: answer, output: '' });
            }
            return;
        } else if (value === 'clear') {
            this.setState({ input: '', output: '' });
            return;
        } else
            this.setState({ input: this.state.input += value })
            return;
    };//end handleClick

    //functionality
    calculation = () => {
    };//end calculation


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
                    <Button onClick={(event) => this.handleClick('7')} variant="outlined">7</Button>
                    <Button onClick={(event) => this.handleClick('8')} variant="outlined">8</Button>
                    <Button onClick={(event) => this.handleClick('9')} variant="outlined">9</Button>
                    <Button onClick={(event) => this.handleClick('+')} variant="outlined">+</Button>
                </div>
                {/* third row displays: 4, 5, 6, subtraction sign */}
                <div>
                    <Button onClick={(event) => this.handleClick('4')} variant="outlined">4</Button>
                    <Button onClick={(event) => this.handleClick('5')} variant="outlined">5</Button>
                    <Button onClick={(event) => this.handleClick('6')} variant="outlined">6</Button>
                    <Button onClick={(event) => this.handleClick('-')} variant="outlined">-</Button>
                </div>
                {/* fourth row displays: 1, 2, 3, multiplication sign */}
                <div>
                    <Button onClick={(event) => this.handleClick('1')} variant="outlined">1</Button>
                    <Button onClick={(event) => this.handleClick('2')} variant="outlined">2</Button>
                    <Button onClick={(event) => this.handleClick('3')} variant="outlined">3</Button>
                    <Button onClick={(event) => this.handleClick('*')} variant="outlined">*</Button>
                </div>
                {/* fifth row displays: 0, period, equals, division sign */}
                <div>
                    <Button onClick={(event) => this.handleClick('0')} variant="outlined">0</Button>
                    <Button onClick={(event) => this.handleClick('.')} variant="outlined">.</Button>
                    <Button onClick={(event) => this.handleClick('=')} variant="outlined">=</Button>
                    <Button onClick={(event) => this.handleClick('/')} variant="outlined">/</Button>
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