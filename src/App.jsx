import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import '../css/App.css'
//import components 
import {NewTodoForm} from './components/NewTodoForm';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import {Home} from './components/Home';
import {Menu} from './components/Menu';
import {Order} from './components/Order';
import {TodoList} from './components/TodoList';


export default function App(){
  const [todos, setTodo]=useState(()=>{
    const localValue=localStorage.getItem("ITEMS");
    if(localValue==null) return [];
    return JSON.parse(localValue);
  });

  useEffect(()=>{
    localStorage.setItem("ITEMS",JSON.stringify(todos));
  },[todos])


  function toggleTodo(id,completed){
    setTodo(currentTodo=>{
      return currentTodo.map(todo=>{
        if(todo.id==id){
          return {...todo, completed:completed};
        }
        return todo;
      })
    })
    console.log(todos);

  }

  function deleteTodo(id){
    setTodo(current=>{
      return current.filter(todo=>todo.id!=id)
    });
  }
  
  function addTodo(title){
        setTodo((current)=>{
        console.log(current);
        return[
          ...current, {title:title,id:crypto.randomUUID(), completed:false }
        ]
      })
  }

  return( //Components here
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={
          <Home/>
        }
        />
        <Route path='/menu' element={
          <Menu/>
        }
        />
        <Route path='/order' element={
          <Order/>
        }
        />
        <Route path='/form' element={
          <div>
            <NewTodoForm addTodo={addTodo}/>
            <h1 className='header'>Todo List</h1>
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
          </div>
        }/>

      </Routes>
      

      <Footer/>
    </div>
  );
}
