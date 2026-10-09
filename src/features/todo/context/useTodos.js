// features/todo/context/useTodos.js
import { useContext } from "react";
import { TodoContext } from "./TodoContext";

export function useTodos() {
  const context = useContext(TodoContext);

  if (context === null) {
    throw new Error("useTodos must be used inside <TodoProvider>");
  }

  return context;
}