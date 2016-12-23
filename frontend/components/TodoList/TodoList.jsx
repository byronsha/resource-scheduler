import React, { PropTypes } from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

const TodoList = ({ todos, currentUser, updateTodo, deleteTodo }) => (
  <div>
    {todos.map(todo =>
      <div key={todo.id}>
        <TodoItem
          {...todo}
          onChange={() => updateTodo(todo)}
        />
        <span onClick={() => deleteTodo(todo.id)}>DELETE</span>
      </div>
    )}
  </div>
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
