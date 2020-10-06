import React, { createContext, useState, useContext } from 'react'

const CounteContext = createContext()

export default function CountProvider({ children }) {
  const [count, setCount] = useState(0)

  return <CounteContext.Provider value={{ count, setCount }}>{children}</CounteContext.Provider>
}

export function useCount() {
  const context = useContext(CounteContext)
  if (!context) throw new Error('useCount must be used within a CountProvider')
  const { count, setCount } = context
  return { count, setCount }
}
