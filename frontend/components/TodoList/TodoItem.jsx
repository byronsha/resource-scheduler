import React from 'react';

const TodoItem = ({ onChange, deleteTodo, text, complete }) => {
  if (complete) {
    return (
      <tr>
        <td>{text}</td>
        <td>done!</td>
        <td className="right aligned">
          <button onClick={deleteTodo} className="ui mini red button">DELETE</button>
        </td>
      </tr>
    )
  }

  return (
    <tr>
      <td>{text}</td>
      <td>not done!</td>
      <td className="right aligned">
        <button onClick={deleteTodo} className="ui mini red button">DELETE</button>
      </td>
    </tr>
  )
}

export default TodoItem;
