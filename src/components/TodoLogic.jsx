
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";


const TodoLogic = () => {
  const [todos, setTodos] = useState(() => {

    // get the todos from localstorage
    const savedTodos = localStorage.getItem("todos");
    // if there are todos stored
    if (savedTodos) {
      // return the parsed the JSON object back to a javascript object
      return JSON.parse(savedTodos);
      // otherwise
    } else {
      // return an empty array
      return [];
    }
  });

  // useEffect to run once the component mounts
  useEffect(() => {
    // localstorage only support storing strings as keys and values
    // - therefore we cannot store arrays and objects without converting the object
    // into a string first. JSON.stringify will convert the object into a JSON string
    // reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
    localStorage.setItem("todos", JSON.stringify(todos));
    // add the todos as a dependancy because we want to update the
    // localstorage anytime the todos state changes
  }, [todos]);

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
      <InputTodo addTodoItem={addTodoItem} />
      <TodoList todoProps={todos} setTodos={setTodos} handleChange={handleChange} delTodo={delTodo} />
    </div>
  )
};

export default TodoLogic