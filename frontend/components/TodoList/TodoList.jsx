import React, { PropTypes } from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

const TodoList = ({ todos, currentUser, updateTodo, deleteTodo }) => (
  <tbody>
    {todos.map(todo =>
      <TodoItem
        key={todo.id}
        todo={todo}
        updateTodo={updateTodo}
        deleteTodo={() => deleteTodo(todo.id)}
      />
    )}
  </tbody>
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
