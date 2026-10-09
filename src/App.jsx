// App.jsx
import TodoProvider from "./features/todo/context/TodoProvider";
import TodoForm from "./features/todo/component/TodoForm";
import TodoSearch from "./features/todo/component/TodoSearch";
import TodoFilters from "./features/todo/component/TodoFilters";
import TodoList from "./features/todo/component/TodoList";
import TodoFooter from "./features/todo/component/TodoFooter";

export default function App() {
  return (
    <TodoProvider>
      <TodoForm />
      <TodoSearch />
      <TodoFilters />
      <TodoList />
      <TodoFooter />
    </TodoProvider>
  );
}