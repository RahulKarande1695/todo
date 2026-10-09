// features/todo/utils/selectors.js
import { FILTERS } from "../context/todoReducer";

export function selectVisibleTodos(todos, filter, searchQuery) {
  const query = (searchQuery ?? "").trim().toLowerCase();

  let result = todos;

  if (filter === FILTERS.ACTIVE) {
    result = result.filter((todo) => !todo.completed);
  } else if (filter === FILTERS.COMPLETED) {
    result = result.filter((todo) => todo.completed);
  }

  return result.filter((todo) => todo.text.toLowerCase().includes(query));
}

export function selectCounts(todos) {
  const completed = todos.filter((todo) => todo.completed).length;

  return { active: todos.length - completed, completed };
}