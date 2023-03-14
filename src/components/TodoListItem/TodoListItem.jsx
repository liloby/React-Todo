export default function TodoListItem({ todo }) {
  return (
    <div className="todo-item-container">
      <h2 className="todo-item-id">{todo.id}</h2>
      <h3 className="todo-item-name">Task: {todo.task}</h3>
      <h3 className="todo-item-difficulty">Difficulty: {todo.difficulty}</h3>
      <h3 className="todo-item-date">
        Date Created: {new Date(todo.date).toLocaleDateString("en-US")}
      </h3>
      <h3 className="todo-item-completed">
        Completed: {todo.completed ? "Yes" : "No"}
      </h3>
    </div>
  );
}
