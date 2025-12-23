import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import TodoProvider from "../context/TodoContext";

const Todos = () => {
  return (
    <TodoProvider>
      <AddTodo />
      <TodoList />
    </TodoProvider>
  );
};

export default Todos;
