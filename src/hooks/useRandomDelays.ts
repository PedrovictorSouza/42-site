import { useState } from 'react'

export function useRandomDelays(count: number, maxDelay: number = 2000): number[] {
  const [delays] = useState(() => {
    return Array.from({ length: count }, () => Math.random() * maxDelay)
  })

  return delays
}

