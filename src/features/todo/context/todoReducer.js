// features/todo/context/todoReducer.js

export const FILTERS = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
};

export const ACTIONS = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  UPDATE_TODO: "UPDATE_TODO",
  DELETE_TODO: "DELETE_TODO",
  CLEAR_COMPLETED: "CLEAR_COMPLETED",
  SET_FILTER: "SET_FILTER",
  SET_SEARCH: "SET_SEARCH",
};

// State shape:
// {
//   todos: [{ id, text, completed }],
//   filter: "all" | "active" | "completed",
//   searchQuery: ""
// }
export function createInitialState() {
  return {
    todos: [],
    filter: FILTERS.ALL,
    searchQuery: "",
  };
}

export function todoReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };

    case ACTIONS.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case ACTIONS.UPDATE_TODO: {
      const { id, text } = action.payload;
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, text } : todo
        ),
      };
    }

    case ACTIONS.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case ACTIONS.CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.completed),
      };

    case ACTIONS.SET_FILTER:
      return { ...state, filter: action.payload };

    case ACTIONS.SET_SEARCH:
      return { ...state, searchQuery: action.payload };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}