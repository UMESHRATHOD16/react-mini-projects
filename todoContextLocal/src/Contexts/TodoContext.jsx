import React from 'react'
import {useContext, createContext} from 'react'

const TodoContext = createContext({
    todos : [{
        id : 1,
        todo : "Todo Msg",
        completed : false,
    }],
    addTodo : (todo) => {},
    updateTodo : (id,todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {},
}) ;

export const TodoContextProvider = TodoContext.Provider ;

export default function useTodo() {
    return useContext(TodoContext)
}