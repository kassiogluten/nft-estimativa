import { createContext, useContext, useState } from "react";
const Context = createContext();

export function ContextProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Context.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useMyContext = () => useContext(Context);
