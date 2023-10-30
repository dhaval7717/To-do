import React, { useState } from 'react';
import TodoInput from './components/TodoInput'
import Todolist from './components/TodoList';
import './todo_working.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';



function Todo_working(){
    const [listTodo,setListTodo]=useState([]);
    let addList = (inputText)=>{
      if(inputText!=='')
        setListTodo([...listTodo,inputText]);
    }
    const deleteListItem = (key)=>{
      let newListTodo = [...listTodo];
      newListTodo.splice(key,1)
      setListTodo([...newListTodo])
    }
    return (
        <div className="main-container">
          <div className="center-container">
            <TodoInput addList={addList}/>
            <h1 className="app-heading">TODO</h1>
            <hr/>
            {listTodo.map((listItem,i)=>{
              return (
                <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
              )
            })}
          </div>
        </div>
      )
}
export default Todo_working