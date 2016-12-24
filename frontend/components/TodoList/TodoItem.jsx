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
          {!todo.complete && <i className='icon warning'></i>}
          {todo.complete && <i className='icon checkmark'></i>}
          {todo.complete ? "Done!" : "Todo!"}
        </td>
        <td className="right aligned collapsing">
          <i onClick={deleteTodo} className="close icon large black"></i>
        </td>
      </tr>
    )
  }
}

export default TodoItem;
