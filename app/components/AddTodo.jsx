var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function(e){
    e.preventDefault();
    var strTodoItem = this.refs.todoitem.value;

    if(strTodoItem){
      this.refs.todoitem.value = '';
      this.props.onAddTodo(strTodoItem);
    }else {
      this.refs.todoitem.focus();
    }

  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" ref="todoitem" placeholder="Type an item to add to list"></input>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>

    )
  }
});

module.exports = AddTodo;
