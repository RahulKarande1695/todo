// features/todo/components/TodoSearch.jsx
import { Input } from "../../../shared/component/atoms";
import { useTodos } from "../context/useTodos";

export default function TodoSearch() {
  const { searchQuery, setSearchQuery } = useTodos();

  return (
    <Input
      type="search"
      value={searchQuery}
      onChange={(event) => setSearchQuery(event.target.value)}
      placeholder="Search todos"
      aria-label="Search todos"
      autoComplete="off"
    />
  );
}