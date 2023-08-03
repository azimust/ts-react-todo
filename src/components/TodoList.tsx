import React from 'react'
import { Todo } from '../types'
import TodoItem from './TodoItem'

interface ITodoListProps {
    list: Todo[]

    removeTodo: (id: Todo['id']) => void
    toggleTodo: (id: Todo['id']) => void
}

const TodoList = ({ list, removeTodo, toggleTodo }: ITodoListProps) => {
    return (
        <div className='todos'>
            {
                list.map((todo) => {
                    return <TodoItem key={todo.id} {...todo} removeTodo={removeTodo} toggleTodo={toggleTodo} />
                })
            }
        </div>
    )
}

export default TodoList