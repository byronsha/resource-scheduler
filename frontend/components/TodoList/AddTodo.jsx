import React, { Component } from 'react';

class AddTodo extends Component {
  _handleSubmit(e) {
    e.preventDefault();

    if ( this.refs.todoText.value === '' ) { return }
    const { addTodo } = this.props;

    const todo = {
      text: this.refs.todoText.value,
      complete: false
    };

    addTodo(todo);
    this.refs.todoText.value = '';
  }

  render() {
    return (
      <tfoot>
        <tr>
          <th>
            <form className="ui form" onSubmit={this._handleSubmit.bind(this)}>
              <div className="ui input fluid">
                <input type="text" ref="todoText" placeholder="Enter a task..."></input>
              </div>
            </form>
          </th>
          <th colSpan="2">
            <form className="ui form" onSubmit={this._handleSubmit.bind(this)}>
              <div className="ui input">
                <input type="submit" className="ui fluid green button" value="Add task"></input>
              </div>
            </form>
          </th>
        </tr>
      </tfoot>
    )
  }
}

export default AddTodo
