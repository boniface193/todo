import TodoItem from "./TodoItem";
const TodoList = ({ todoProps, handleChange, delTodo }) => {
  return (
    <ul className="card">
      {todoProps.map((todo) => (
        <TodoItem key={todo.id} itemProp={todo} handleChanges={handleChange} delTodo={delTodo} />
      ))}
    </ul>
  )
};

export default TodoList;