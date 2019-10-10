import React, { Component } from 'react';
import './App.css';
import InputTodo from './inputTodo';
import ListTodo from './listTodo'

let todoItems = [];
todoItems.push({ id: 1, task: "Learn Stuff", done: false })
todoItems.push({ id: 2, task: "Learn Other Stuff", done: false })
todoItems.push({ id: 2, task: "Forget everything", done: false })
todoItems.push({ id: 2, task: "Be confused as hell", done: false })
todoItems.push({ id: 3, task: "Sleep", done: false })
todoItems.push({ id: 3, task: "Peter needs to Sleep too", done: false })

class TodoList extends Component {
  state = {
    todoValue: "",
    todoList: []
  }

  changeTodoValue(e) {
    this.setState({
      todoValue: e.target.value
    })
  }

  addToList() {
    let list = this.state.todoList;
    list.push(this.state.todoValue);
    this.setState({
      todoList: list, todoValue: ""
    });
    console.log(this.state.todoList);
  }

  enterActive(event){
    if(event.keyCode === 13){
      this.addToList();
    }
  }

  render() {
    return (
      <div className="App">
        <div className="TodoList">
          <h1>Todo List</h1>

          <InputTodo todoValue={this.state.todoValue} 
          changed={(e) => this.changeTodoValue(e)} 
          function={(e) => this.enterActive(e)}/>
          <button onClick={() => this.addToList()}>Add</button>

          {/* {todoItems.map((item) => {
            return <h3>{item.task}</h3>
          })} */}

          <ListTodo list={this.state.todoList} />

        </div>
      </div>
    )
  }
}

export default TodoList;