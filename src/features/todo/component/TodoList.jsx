// features/todo/components/TodoList.jsx
import { Text } from "../../../shared/component/atoms";
import { useTodos } from "../context/useTodos";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todos, visibleTodos } = useTodos();

  if (todos.length === 0) {
    return <Text>No todos yet.</Text>;
  }

  if (visibleTodos.length === 0) {
    return <Text>No matching todos.</Text>;
  }

  return (
    <ul>
      {visibleTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}