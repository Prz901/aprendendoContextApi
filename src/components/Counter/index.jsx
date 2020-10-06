import React from 'react'

import { useCount } from '../../Context/Count'

export default function Counter() {
  const { count, setCount } = useCount()

  return (
    <div>
      <h1>Counter dos cornao: {count}</h1>

      <br />

      <button onClick={() => setCount(count + 1)}>Somar mais um cornao</button>
    </div>
  )
}
