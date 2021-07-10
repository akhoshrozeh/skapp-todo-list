import React, { useState, Component, useEffect } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList(props) {
  
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    if(props.data != null || props.data != undefined) {
      setTodos(props.data.data)
    }
    
    console.log("use effect!")
  }, [props.data]);
    
    

  const saveList = async (data) => {
    console.log("whats being saved:", data, typeof(data));
    if (props.mySky) {
        console.log('attempting setJSON()...');
        try {

            await props.mySky.setJSON('localhost', { data });

            console.log('setJSON completed successfully!');

        } catch (e) {
            console.log("setJSON failed: ");
            console.error(e);
        }
       
    }
  };

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    saveList(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    const updatedTodos = todos.map(item => (item.id === todoId ? newValue : item));
    setTodos(updatedTodos);
    saveList(updatedTodos);
    
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
    saveList(removedArr);

  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
    saveList(updatedTodos);

  };


  return (
    <>
      <TodoForm onSubmit={addTodo} /> 
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      /> 
    </>
  );
  
}

export default TodoList;