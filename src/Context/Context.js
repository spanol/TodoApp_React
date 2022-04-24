import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export default function ContextProvider({ children }) {
  const [search, setSearch] = useState("");
  const [authenticated, setAuthenticated] = useState(null);
  return (
    <TodoContext.Provider
      value={{ search, setSearch, authenticated, setAuthenticated }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(TodoContext);
  if (!context)
    throw new Error("useSearch must be used within a Provider");
  const { search, setSearch } = context;
  return { search, setSearch };
}

export function useAuth() {
  const context = useContext(TodoContext);
  if (!context) throw new Error("useAuth must be used within a Provider");
  const { authenticated, setAuthenticated } = context;
  return { authenticated, setAuthenticated };
}
