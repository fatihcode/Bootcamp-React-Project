import React, { Component } from 'react'

export default class ChoosePictures extends Component {
  render() {
    return (
      <div>
          <button onClick={this.props.start}>Start</button>
          <button onClick={this.props.stop}>Stop</button>
      </div>
    )
  }
}
