//Libs
import React, { Component } from 'react';

//Styles
import './style.less';

//Containers
import TodoForm from '../../components/TodoForm'
import TodoList from '../../components/TodoList'

class App extends Component {
  state = {
    list: [],
  }

  addTodo = (e, resetField) => {
    const { input, list } = this.state

    if(input) {
      this.setState({
        input: "",
        list: [
          ...list,
          {
            input: input,
            isDone: false
          }
        ]
      })
    } else {
      alert("idiot")
    }

    e.preventDefault()
  }

  removeTodo = (e, itemIndex) => {
    const { list } = this.state
    this.setState({
      list: list.filter((value, index) => {
        return itemIndex !== index
      })
    })

    e.preventDefault()
  }

  checkTodo = (e, itemIndex) => {
    const { list } = this.state

    let newList = Object.assign({}, list)
    newList[itemIndex].isDone = true

    this.setState({list})
    e.preventDefault()
  }

  render() {
    return (
      <div className="App">
        <h1>To-do List</h1>
        <TodoForm handleChange={ (e) => this.setState({input: e.target.value})} handleSubmit={this.addTodo} />
        <TodoList list={this.state.list} handleRemove={this.removeTodo} handleCheck={this.checkTodo}/>
      </div>
    );
  }
}

export default App;
