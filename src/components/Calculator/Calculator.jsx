import React, { Component } from 'react';

//MUI
import { TextField, Button } from '@material-ui/core';

class Calculator extends Component {
    render() {
        return (
            <div>
                {/* first row displays: output, clear button*/}
                <div>
                    <TextField id="standard-basic" />
                    <Button variant="outlined">C</Button>
                </div>
                {/* second rows displays: 7, 8, 9, plus sign */}
                <div>
                    <Button variant="outlined">7</Button>
                    <Button variant="outlined">8</Button>
                    <Button variant="outlined">9</Button>
                    <Button variant="outlined">+</Button>
                </div>
                {/* third row displays: 4, 5, 6, subtraction sign */}
                <div>
                    <Button variant="outlined">4</Button>
                    <Button variant="outlined">5</Button>
                    <Button variant="outlined">6</Button>
                    <Button variant="outlined">-</Button>
                </div>
                {/* fourth row displays: 1, 2, 3, multiplication sign */}
                <div>
                    <Button variant="outlined">1</Button>
                    <Button variant="outlined">2</Button>
                    <Button variant="outlined">3</Button>
                    <Button variant="outlined">*</Button>
                </div>
                {/* fifth row displays: 0, period, equals, division sign */}
                <div>
                    <Button variant="outlined">0</Button>
                    <Button variant="outlined">.</Button>
                    <Button variant="outlined">=</Button>
                    <Button variant="outlined">/</Button>
                </div>
            </div>
        )
    }
};//end class

export default Calculator;