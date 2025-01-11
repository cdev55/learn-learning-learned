import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  fetchTodos,
  updateTodo,
} from "../../store/slice/todoSlice";

export default function TodoList() {
  const [currentTodo, setCurrentTodo] = useState("");
  const [currentEditedTodo, setCurrentEditedTodo] = useState(null);
  const dispatch = useDispatch();
  const { todoList, apiTodoList ,loading} = useSelector((state) => state.todo);
  const handleAddTodo = () => {
    dispatch(addTodo(currentTodo));
    setCurrentTodo("");
  };
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };
  const handleUpdateTodo = (editedTodo) => {
    setCurrentEditedTodo(editedTodo);
    setCurrentTodo(editedTodo.title);
  };
  const handleEditTodo = () => {
    dispatch(updateTodo({ id: currentEditedTodo.id, newTitle: currentTodo }));
    setCurrentTodo("");
    setCurrentEditedTodo(null);
  };
  const handleFetchTodo = () => {
    dispatch(fetchTodos());
    console.log(apiTodoList.todos)
  };

  const showTodo = () => {
    console.log("Extract todo:", todoList);
  };

  if(loading){
    return <div>
      <h1>Loading...</h1>
      </div>
  }

  return (
    <div>
      <input
        type="text"
        value={currentTodo}
        onChange={(event) => setCurrentTodo(event.target.value)}
        name="todo"
        placeholder="Enter you todos"
      />
      <button
        disabled={!currentTodo.length}
        onClick={() =>
          currentEditedTodo === null ? handleAddTodo() : handleEditTodo()
        }
      >
        {currentEditedTodo === null ? "Add Todo" : "Edit Todo"}
      </button>
      <button onClick={() => showTodo()}>Show Todo</button>
      {todoList?.map((item) => {
        return (
          <div key={item.id}>
            <li>{item.title}</li>
            <button onClick={() => handleDeleteTodo(item.id)}>Delete</button>
            <button onClick={() => handleUpdateTodo(item)}>Update</button>
          </div>
        );
      })}
      <button onClick={() => handleFetchTodo()}>Fetch Todo from API</button>
      {apiTodoList?.todos?.map((item) => {
        return (
          <div key={item.id}>
            <li>{item.todo}</li>
          </div>
        );
      })}
    </div>
  );
}
