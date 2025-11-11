import { useEffect, useState } from 'react'
import './GridNumbers.css'

export function GridNumbers() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const gridNumbers: React.ReactElement[] = []

  for (let x = 0; x <= dimensions.width; x += 100) {
    for (let y = 0; y <= dimensions.height; y += 100) {
      const gridX = Math.floor(x / 100)
      const gridY = Math.floor(y / 100)
      gridNumbers.push(
        <div
          key={`${x}-${y}`}
          className="grid-number"
          style={{ left: `${x}px`, top: `${y}px` }}
        >
          {gridX},{gridY}
        </div>
      )
    }
  }

  return (
    <div className="grid-numbers-container">
      {gridNumbers}
    </div>
  )
}

