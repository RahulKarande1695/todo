// features/todo/components/TodoFilters.jsx
import { Button } from "../../../shared/component/atoms";
import { FILTERS } from "../context/todoReducer";
import { useTodos } from "../context/useTodos";

const FILTER_OPTIONS = [
  { value: FILTERS.ALL, label: "All" },
  { value: FILTERS.ACTIVE, label: "Active" },
  { value: FILTERS.COMPLETED, label: "Completed" },
];

export default function TodoFilters() {
  const { filter, setFilter } = useTodos();

  return (
    <div role="group" aria-label="Filter todos">
      {FILTER_OPTIONS.map(({ value, label }) => (
        <Button
          key={value}
          aria-pressed={filter === value}
          onClick={() => setFilter(value)}
        >
          {label}
        </Button>
      ))}
    </div>
  );
}