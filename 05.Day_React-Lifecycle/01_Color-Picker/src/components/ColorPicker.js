import React from 'react';
import { Button } from './Button';


class ColorPicker extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            color: [150, 150, 150]
        }
    }


    componentDidMount() {
        console.log('i invoked immediately after component is mounted, just one time at the beginning; after render method')

    }

    componentDidUpdate(prevProps, prevState) {
        console.log('i invoked immediately after updating occurs, upon every change.')

    }


    isLight(colorArr) {
        return (colorArr.reduce((a, b) => a + b) > 384)
        // it should return true or false according to the given array;
    }

    formatColor(colorArr) {
        return 'rgb(' + colorArr.join(', ') + ')';
    }

    chooseColor() {
        const color = []

        for (let i = 0; i < 3; i++) {
            color.push(Math.floor(Math.random() * 257))
        }

        this.setState({ color })
    }


    applicationColor = () => {

        document.body.style.backgroundColor = this.formatColor(this.state.color)

        this.chooseColor()
    }


    render() {

        console.log(this.isLight(this.state.color))

        return (
            <div>
                <div className={this.isLight(this.state.color) ?"black": "white"}>
                   <h1>Your color is!</h1> 
                   <h1>{this.formatColor(this.state.color)}</h1>
                     

                </div>

                <Button applicationColor={this.applicationColor} isLight={this.isLight(this.state.color)} />
            </div>
        );
    }
}

export default ColorPicker;
