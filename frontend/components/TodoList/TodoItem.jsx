import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    const { updateTodo, deleteTodo, todo } = this.props;

    return (
      <tr className={todo.complete ? "positive" : "negative"}>
        <td>
          <div className="ui input fluid">
            <input type="text" onChange={(e) => { updateTodo(e, todo) }} value={todo.text}></input>
          </div>
        </td>
        <td className="right aligned collapsing">
          <div className="ui slider checkbox">
            <input type="checkbox" name="complete" checked={todo.complete}></input>
            <label>Done</label>
          </div>
        </td>
        <td className="right aligned collapsing">
          <i onClick={deleteTodo} className="close icon large black"></i>
        </td>
      </tr>
    )
  }
}

export default TodoItem;
