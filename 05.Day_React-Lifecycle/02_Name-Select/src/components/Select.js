import React from 'react';
import { names } from "./names"
import axios from "axios"


export class Select extends React.Component {

  constructor(props) {
    super(props)
    this.state = { names: [] }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {

    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        const names = []
        persons.map(item => names.push(item.name))
        this.setState({ names });
      })
  }

  handleChange(e) {
    const name = e.target.value
    this.props.changeName(name)
  }

  render() {

    return (
      <div>
        <h1>Pickup a name</h1>
        <div>

          <select id="great-names" onChange={this.handleChange}>
            {this.state.names.map((item, i) => <option key={i} value={item}>{item}</option>)}
          </select>

        </div>
        <div>
          <h2>API</h2>

          <select id="great-name" onChange={this.handleChange}>
            {names.map((item, i) => <option key={i} value={item}>{item}</option>)}
          </select>
          
        </div>
      </div>
    );
  }
}