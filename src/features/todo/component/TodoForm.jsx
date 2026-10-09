// features/todo/components/TodoForm.jsx
import { useState } from "react";
import { Button, Input } from "../../../shared/component/atoms";
import { FormField } from "../../../shared/component/molecules";
import { useTodos } from "../context/useTodos";

export default function TodoForm() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const { addTodo } = useTodos();

  function handleChange(event) {
    setText(event.target.value);
    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const added = addTodo(text);

    if (added) {
      setText("");
    } else {
      setError("Todo text can't be empty");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <FormField id="new-todo" label="New todo" error={error}>
        <Input
          id="new-todo"
          type="text"
          value={text}
          onChange={handleChange}
          autoComplete="off"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "new-todo-error" : undefined}
        />
      </FormField>

      <Button type="submit">Add</Button>
    </form>
  );
}