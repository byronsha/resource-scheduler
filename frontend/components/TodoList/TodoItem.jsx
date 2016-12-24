import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    const { updateTodo, deleteTodo, todo } = this.props;

    if (todo.complete) {
      return (
        <tr>
          <td>
            <div className="ui input">
              <input type="text" onChange={(e) => { updateTodo(e, todo) }} value={todo.text}></input>
            </div>
          </td>
          <td>done!</td>
          <td className="right aligned">
            <button onClick={deleteTodo} className="ui red button">DELETE</button>
          </td>
        </tr>
      )
    }

    return (
      <tr>
        <td>
          <div className="ui input">
            <input type="text" onChange={(e) => { updateTodo(e, todo) }} value={todo.text}></input>
          </div>
        </td>
        <td>not done!</td>
        <td className="right aligned">
          <button onClick={deleteTodo} className="ui red button">DELETE</button>
        </td>
      </tr>
    )
  }
}

export default TodoItem;
