import React from 'react';

const AddTodo = ({ addTodo, currentUser }) => (
  <tfoot>
    <tr>
      <th colSpan="3">
        <button onClick={addTodo} className="ui fluid green button">New Task</button>
      </th>
    </tr>
  </tfoot>
)

export default AddTodo
