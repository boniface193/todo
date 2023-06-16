import Header from "./Header";
import TodoLogic from "./TodoLogic";

const TodoApp = () => {
  return (
    <div className="wrapper">
      <div className="todos">
        <Header />
        <TodoLogic />
      </div>
    </div>

  )
};

export default TodoApp;