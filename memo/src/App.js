import React, { Component } from "react";
import AddTodo from "./containers/AddTodo";
import TodoList from "./containers/TodoList";
import { connect } from "react-redux";
import { addTodo } from "./modules/actions";

class App extends Component {
 
  render() {
    return (
      <div>
        <AddTodo addTodo={this.props.addTodo} />
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => {
      dispatch(addTodo(todo));
    }
  };
};

const mapStateToProps = state => {
  return { todos: state.todos };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);