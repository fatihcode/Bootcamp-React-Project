import React, { Component } from 'react';

export default class Form extends Component {

    state = { name: "", job: "" }

    render() {

        const handleChange = (e) => {
            this.setState({ [e.target.name]: e.target.value })
        }

        const handleSubmit = (e) => {
            e.preventDefault()
            this.props.updateNames(this.state)
            this.setState({name: "", job: ""});
        }

        return (
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name"
                    value={this.state.name}
                    onChange={handleChange}/>

                <label htmlFor="job">Job</label>
                <input type="text" name="job" id="job"
                    value={this.state.job}
                    onChange={handleChange}/>

                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        );
    }
}