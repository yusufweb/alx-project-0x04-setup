import { createContext, useContext, useState, ReactNode } from 'react';

interface CountContextType {
  count: number;
  increment: () => void;
  decrement: () => void;
}   

export const CountContext = createContext<CountContextType | undefined>(undefined);

export const CountProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);

  return (
    <CountContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CountContext.Provider>
  );
};

export const useCount = () => {
  const context = useContext(CountContext)

  if (!context) {
    throw new Error("useCount must be within a Count Provider")
  }

  return context
}
