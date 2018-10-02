import React, { Component } from 'react';
//import css file for styling 
import './Calculator.css';

export default class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            num1: '',
            num2: '', 
            operation: ''
        }
    }
    //Theses 3 methods are for handling changes in the input field. 
    //Make sure to convert it to  a number
    changeNum1(num1) {
        console.log('num1 hit-------------', this.state.num1);
        this.setState({num1: `${this.state.num1}${num1}`});
    }
    changeNum2(num2) {
        this.setState({num2: `${this.state.num2}${num2}`});
    }
    clearInput(e) {
        e.preventDefault();
        //Destruct num1 and num2
        const { num1, num2 } = this.state;
        if(num1 && !num2) {
            this.setState({num1: ''})
        } else {
            this.setState({num1: '', num2: '', operation: ''})
        }
    }
    //IN your equal method that where you will assign the result based on if it's add or not. Set the result to num1
    equal() {
        //Destruct num1, and num2, operation from state.
        const { operation, num1, num2 } = this.state;
        //Have a if else statement to determine whetehr to add, divide, multiply, and subtract
        if(operation === 'add') {
            //USe a return statement to return out the function., use shorthand + to convert num1, and num2 to number so we can add them.
            return this.setState({num1: +num1 + +num2, num2: '', operation: ''});
        } else if(operation === 'subtract') {
            //Use a return statement to return out the function with setState 
            //set towards num1 with num1 and num2 converted to numbers and subtracted from one another. 
            return this.setState({num1: +num1 - +num2, num2: '', operation: ''});
        } else if(operation === 'multiply') {
            //Use a return statement to return out of the function with setState. 
            //set towards num1 with num1 and num2 converted to numbers and multiplied from one another.
            return this.setState({num1: +num1 * +num2, num2: '', operation: ''});
        } else if(operation === 'divide') {
            //Use a return statement to return out of the function with setState.
            //set towrads num1 with num1 and num2 converted to numbers and divideed from one another. 
            return this.setState({num1: +num1 / +num2, num2: '', operation: ''});
        } else if(operation === 'remainder') {
            //Use a return statement to return out of the function will setState.
            //Set towards num1 with num1 and num2 converted to numbers and got hte remainder from one another. 
            return this.setState({num1: +num1 % +num2, num2: '', operation: ''});
        }
    }
    //Define your add method. 
    add() {
        //Set state of operation to add so when you equal it will add the first number and second  number. 
        this.setState({operation: 'add'});
    }
    //Define your subtract method, which will set the operation to subtract 
    subtract() {
        //Set state of the operation to subtract so when you equal it will subtract first and second number.
        this.setState({operation: 'subtract'});
    }
    //Define your multiply method, which will set the operation state to multiply.
    multiply() {
        //Set the state of operation to multiply, so when you equal it will multiply first and second number.
        this.setState({operation: 'multiply'});
    }
    //Define your divide method, which will be set the operation state to divide.
    divide() {
        //Set the operation to multiply so when you equal it will divide the first and second number. 
        this.setState({operation: 'divide'});
    }
    //Define your getRemainder method, which will be set to the operation state to remainder
    getRemainder() {
        //Set the operation to remaidner so when you equal it will get remainder of the first and second number.
        this.setState({operation: 'remainder'})
    }
    render() {
        //Destruct values from state
        const { num1, num2, operation } = this.state;
        return (
            <div className='container'>
                <div className='wrapper'>
                    <input value={operation ? num2 : num1} />
                    <button onClick={(e) => this.clearInput(e)} className='btn'>CE</button>
                    <button onClick={() => this.getRemainder()} className='btn'>% Remainder</button>
                </div>
                <div className='wrapper'>
                    <button onClick={(e) => operation ? this.changeNum2('7') : this.changeNum1('7')} className='btn'>7</button>
                    <button onClick={(e) => operation ? this.changeNum2('8') : this.changeNum1('8')} className='btn'>8</button>
                    <button onClick={(e) => operation ? this.changeNum2('9') : this.changeNum1('9')} className='btn'>9</button>
                    <button onClick={() => this.divide()} className='btn'>/</button>                
                </div>
                <div className='wrapper'>
                    <button onClick={(e) => operation ? this.changeNum2('4') : this.changeNum1('4')} className='btn'>4</button>
                    <button onClick={(e) => operation ? this.changeNum2('5') : this.changeNum1('5')} className='btn'>5</button>
                    <button onClick={(e) => operation ? this.changeNum2('6') : this.changeNum1('6')} className='btn'>6</button>
                    <button onClick={() => this.multiply()} className='btn'>x</button>                                
                </div>
                <div className='wrapper'>
                    <button onClick={(e) => operation ? this.changeNum2('1') : this.changeNum1('1')} className='btn'>1</button>
                    <button onClick={(e) => operation ? this.changeNum2('2') : this.changeNum1('2')} className='btn'>2</button>
                    <button onClick={(e) => operation ? this.changeNum2('3') : this.changeNum1('3')} className='btn'>3</button>
                    <button onClick={() => this.subtract()} className='btn'>-</button>                                
                </div>
                <div className='wrapper'>
                    <button onClick={(e) => operation ? this.changeNum2('.') : this.changeNum1('.')} className='btn'>.</button>
                    <button onClick={(e) => operation ? this.changeNum2('0') : this.changeNum1('0')} className='btn'>0</button>
                    <button onClick={() => this.equal()} className='btn'>=</button>
                    <button onClick={() => this.add()} className='btn'>+</button>                                
                </div>
            </div>
        );
    }
}
