import React from 'react'

import { useCount } from '../../Context/Count'

export default function Mirror() {
  const { count } = useCount()

  return (
    <div>
      <h1>Mirror dos cornao: {count}</h1>
    </div>
  )
}
