import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
  apiTodoList:[],
  loading: false,
  error: false,
};

export const fetchTodos=createAsyncThunk('fetchTodos',async()=>{
    const apiResponse=await fetch('https://dummyjson.com/todos');
    const result=await apiResponse.json();
    return result;
})

const todoReducer = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo(state, action) {
      console.log(action);
      const newTodo = {
        id: new Date().getTime(),
        title: action.payload,
      };
      state.todoList.push(newTodo);
      return state;
    },
    deleteTodo(state,action){
        console.log(action)
        state.todoList=state.todoList.filter(item=>item.id!==action.payload)
        return state;
    },
    updateTodo(state,action){
        console.log(action)
        const todoIndex=state.todoList.findIndex(item=>item.id===action.payload.id);
        state.todoList[todoIndex]={
            ...state.todoList[todoIndex],
            title:action.payload.newTitle
        }
        return state;
        // console.log(todo)
    }

  },
  extraReducers:(builder)=>{
    builder.addCase(fetchTodos.pending,(state,action)=>{
        state.loading=false;
    })
    builder.addCase(fetchTodos.fulfilled,(state,action)=>{
        console.log(action.payload);
        state.apiTodoList=action.payload.todos;
        state.loading=false;
    })
    builder.addCase(fetchTodos.rejected,(state,action)=>{
        state.loading=false;
        state.error=true;
    })
  }
});

export const { addTodo,deleteTodo,updateTodo } = todoReducer.actions;
export default todoReducer.reducer;
