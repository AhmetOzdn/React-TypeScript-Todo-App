
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TodoInitialState, TodoType } from '../types/Types'



  
  const initialState: TodoInitialState = {
      todos: []
  }
  
  export const todoSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        createTodo: (state:TodoInitialState,action:PayloadAction<TodoType>) => {
            state.todos = [...state.todos , action.payload]
        },

        // fonksiyona disaridan deger vermez isek action kullanmamiza gerek yok 
        deleteTodoById: (state:TodoInitialState,action:PayloadAction<number>) => { 
            state.todos = [...state.todos.filter((todo:TodoType) => todo.id !== action.payload )]
        },

        editTodoById: (state:TodoInitialState,action:PayloadAction<TodoType>) => { 
            state.todos = [...state.todos.map((todo:TodoType) => todo.id !== action.payload.id ? todo : action.payload )]
        }
    }
  })
  
  export const {createTodo, deleteTodoById,editTodoById} = todoSlice.actions
  export default todoSlice.reducer