// features/todo/components/TodoFooter.jsx
import { Button, Text } from "../../../shared/component/atoms";
import { useTodos } from "../context/useTodos";

export default function TodoFooter() {
  const { todos, activeCount, completedCount, clearCompleted } = useTodos();

  if (todos.length === 0) return null;

  return (
    <div>
      <Text as="span">
        {activeCount} {activeCount === 1 ? "item" : "items"} left
      </Text>
      {completedCount > 0 && (
        <Button onClick={clearCompleted}>Clear completed</Button>
      )}
    </div>
  );
}