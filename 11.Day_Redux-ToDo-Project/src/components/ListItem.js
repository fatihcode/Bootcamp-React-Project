import React from "react";
import { connect } from 'react-redux'
import { editTodo, deleteTodo } from './action/updateList'

class ListItem extends React.Component {

  state = { newTask: "" }

  render() {

    const changeState = (e) => {
      console.log(e.target.innerText);
      this.setState({ newTask: e.target.innerText })
    }

    const editInput = () => {
      if (this.state.newTask) {
        this.props.editTodo(this.props.id, this.state.newTask)
      }
    }

    const deleteInput = () => {
      this.props.deleteTodo(this.props.id)
    }

    // console.log(this.props);
    // console.log(this.state.newTask);
    return (

      <div className="list-group-item list-group-item-action d-flex justify-content-between">

        <span contentEditable={true} onInput={changeState} suppressContentEditableWarning={true}>
          {this.props.task}
        </span>

        <div className="btn-group btn-group-sm" role="group">

          <button onClick={editInput} className="btn btn-primary" type="button">Update</button>
          <button onClick={deleteInput} className="btn btn-primary" type="button">Delete</button>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = { editTodo, deleteTodo }

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)