import React from 'react';

const AddTodo = ({ addTodo, currentUser }) => (
  <button onClick={addTodo} className="ui fluid green button">New Task</button>
)

export default AddTodo
