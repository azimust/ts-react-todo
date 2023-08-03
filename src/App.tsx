import React, { useEffect, useState } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import NewTodoForm from './components/NewTodoForm';
import { Todo } from './types';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: new Date().toString(),
      title: text,
      completed: false
    }
    setTodos([newTodo, ...todos])
  }

  const removeTodo = (id: Todo['id']) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodo = (id: Todo['id']) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo

        return {
          ...todo,
          completed: !todo.completed
        }
      })
    )
  }

  return (
    <div className='App'>
      <NewTodoForm handleClick={addTodo} />

      <TodoList list={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
