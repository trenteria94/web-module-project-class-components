/* eslint-disable no-unused-vars */
import React from 'react'
import Form from './Form'
import Todo from './Todo'
import TodoList from './TodoList'

let id = 0
let getId = () => ++id
const intitalTodos = [
  {id: getId(), name: 'Feed the cat', completed: false },
  {id: getId(), name: 'Code for an hour', completed: true },
  {id: getId(), name: 'Do laundry', completed: false }
]
export default class App extends React.Component {
  state = {
    todos: intitalTodos
  }

  addTodo = (name) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.concat({id: getId(), completed: false, name})
    })
  }
  toggleCompletion = id => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(td => {
        if (id == td.id) {
          return {...td, completed: !td.completed}
        }
        return td
      })
    })
  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} toggleCompletion={this.toggleCompletion}/>
        <Form addTodo={this.addTodo}/>
      </div>
    )
  }
}
