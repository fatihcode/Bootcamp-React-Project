import React from 'react';
import { Select } from './Select';
import { Name } from './Name';



export class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      name: "Cornelius",
      message: ""
    }
    this.changeName = this.changeName.bind(this)
  }



  changeName(item) {
    
    this.setState({ name: item })

  }


  render() {
    return (
      <div>
        <Select changeName={this.changeName} />
        <Name name={this.state.name} />
      </div>
    );
  }
}

