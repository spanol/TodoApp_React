import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export default function ContextProvider({ children }) {
  const [search, setSearch] = useState("");
  const [credentialsState, setCredentialsState] = useState(null);
  return (
    <TodoContext.Provider
      value={{ search, setSearch, credentialsState, setCredentialsState }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(TodoContext);
  if (!context)
    throw new Error("useSearch must be used within a CountProvider");
  const { search, setSearch } = context;
  return { search, setSearch };
}

export function useAuth() {
  const context = useContext(TodoContext);
  if (!context) throw new Error("useAuth must be used within a CountProvider");
  const { credentialsState, setCredentialsState } = context;
  return { credentialsState, setCredentialsState };
}
