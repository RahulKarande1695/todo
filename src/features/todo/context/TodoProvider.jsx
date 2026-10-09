// features/todo/context/TodoProvider.jsx
import { useEffect, useReducer } from "react";
import { TodoContext } from "./TodoContext";
import { ACTIONS, createInitialState, todoReducer } from "./todoReducer";
import { loadTodos, saveTodos } from "../services/storage";
import { selectCounts, selectVisibleTodos } from "../utils/selectors";

// Runs only once, on the first render (lazy initializer)
function init() {
  return { ...createInitialState(), todos: loadTodos() };
}

export default function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, undefined, init);

  // Persist only todos (filter and search are UI state)
  useEffect(() => {
    saveTodos(state.todos);
  }, [state.todos]);

  // Derived data: not stored in state
  const visibleTodos = selectVisibleTodos(
    state.todos,
    state.filter,
    state.searchQuery
  );
  const { active: activeCount, completed: completedCount } = selectCounts(
    state.todos
  );

  // Returns true if added, false if the text was empty
  const addTodo = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return false;

    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: { id: crypto.randomUUID(), text: trimmed, completed: false },
    });
    return true;
  };

  const toggleTodo = (id) => {
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: id });
  };

  // Returns true if updated, false if the text was empty
  const updateTodo = (id, text) => {
    const trimmed = text.trim();
    if (!trimmed) return false;

    dispatch({ type: ACTIONS.UPDATE_TODO, payload: { id, text: trimmed } });
    return true;
  };

  const deleteTodo = (id) => {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: id });
  };

  const clearCompleted = () => {
    dispatch({ type: ACTIONS.CLEAR_COMPLETED });
  };

  const setFilter = (filter) => {
    dispatch({ type: ACTIONS.SET_FILTER, payload: filter });
  };

  const setSearchQuery = (query) => {
    dispatch({ type: ACTIONS.SET_SEARCH, payload: query });
  };

  const value = {
    todos: state.todos,
    visibleTodos,
    filter: state.filter,
    searchQuery: state.searchQuery,
    activeCount,
    completedCount,
    addTodo,
    toggleTodo,
    updateTodo,
    deleteTodo,
    clearCompleted,
    setFilter,
    setSearchQuery,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}