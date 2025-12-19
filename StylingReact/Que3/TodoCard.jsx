function TodoCard({ userId, title, completed }) {
  return (
    <div>
      <p>User ID: {userId}</p>
      <p>Title: {title}</p>
      <p>Completed: {completed ? "Yes" : "No"}</p>
      <hr />
    </div>
  );
}

export default TodoCard;
