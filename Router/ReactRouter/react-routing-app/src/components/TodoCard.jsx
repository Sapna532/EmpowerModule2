const TodoCard = ({ todo }) => {
  return (
    <div className="todo-card">
      <h4>{todo.title}</h4>
      <p>
        Status:{" "}
        <strong>
          {todo.completed ? "Completed" : "Not Completed"}
        </strong>
      </p>
    </div>
  );
};

export default TodoCard;
