import React, { PropTypes } from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

const TodoList = ({ todos, currentUser, updateTodo, deleteTodo }) => (
  <table className="ui compact structured table">
    <thead>
      <tr>
        <th>Task</th>
        <th>Complete</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {todos.map(todo =>
        <TodoItem
          key={todo.id}
          {...todo}
          onChange={() => updateTodo(todo)}
          deleteTodo={() => deleteTodo(todo.id)}
        />
      )}
    </tbody>
  </table>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}

export default TodoList;
