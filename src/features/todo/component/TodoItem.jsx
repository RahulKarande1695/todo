// features/todo/components/TodoItem.jsx
import { useState } from "react";
import { Button, Input } from "../../../shared/component/atoms";
import { useTodos } from "../context/useTodos";

export default function TodoItem({ todo }) {
  const { toggleTodo, updateTodo, deleteTodo } = useTodos();
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState("");

  function handleEdit() {
    setDraft(todo.text);
    setIsEditing(true);
  }

  function handleCancel() {
    setIsEditing(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // updateTodo returns false if the text is empty: stay in edit mode
    if (updateTodo(todo.id, draft)) {
      setIsEditing(false);
    }
  }

  if (isEditing) {
    return (
      <li>
        <form onSubmit={handleSubmit}>
          <Input
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            aria-label="Edit todo"
            autoComplete="off"
            autoFocus
          />
          <Button type="submit">Save</Button>
          <Button type="button" onClick={handleCancel}>
            Cancel
          </Button>
        </form>
      </li>
    );
  }

  return (
    <li>
      <Input
        id={`todo-${todo.id}`}
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <label
        htmlFor={`todo-${todo.id}`}
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </label>
      <Button aria-label={`Edit ${todo.text}`} onClick={handleEdit}>
        Edit
      </Button>
      <Button
        aria-label={`Delete ${todo.text}`}
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </Button>
    </li>
  );
}