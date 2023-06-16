
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";


const TodoLogic = () => {
  const [todos, setTodos] = useState([]);

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    setTodos([...todos, newTodo])
  }

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  }

  const handleChange = (id) => {
    setTodos((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo, completed: !todo.completed,
          }
        }
        return todo;
      })
    })
  }

  return (
    <div>
      <InputTodo addTodoItem={addTodoItem}/>
      <TodoList todoProps={todos} setTodos={setTodos} handleChange={handleChange} delTodo={delTodo}/>
    </div>
  )
};

export default TodoLogic