import { useState, useEffect } from 'react'
import type { RefObject } from 'react'

export interface Line {
  x1: number
  y1: number
  x2: number
  y2: number
  length: number
  angle: number
}

export interface HomeLinesDependencies {
  colRightRef: RefObject<HTMLDivElement | null>
}

export function useHomeLines(deps: HomeLinesDependencies): Line[] {
  const [lines, setLines] = useState<Line[]>([])

  useEffect(() => {
    const calculateLines = () => {
      const colRight = deps.colRightRef.current

      if (!colRight) {
        return
      }

      const colRect = colRight.getBoundingClientRect()
      const scrollX = window.scrollX || 0
      const scrollY = window.scrollY || 0
      
      const containerAbsoluteLeft = colRect.left + scrollX
      const containerAbsoluteTop = colRect.top + scrollY
      
      const gridCols = 3
      const gridRows = 1
      
      let gridSize = 100
      if (window.innerWidth <= 768) {
        const baseWidth = 1920
        const scaleFactor = colRect.width / baseWidth
        gridSize = 100 * scaleFactor
      }

      const newLines: Line[] = []

      for (let row = 0; row < gridRows; row++) {
        for (let col = 0; col < gridCols; col++) {
          let gridX1, gridY1, gridX2, gridY2

          if (col === 0) {
            gridX1 = 9
            gridY1 = 2
            gridX2 = 14
            gridY2 = 2
          } else if (col === 1) {
            gridX1 = 14
            gridY1 = 3
            gridX2 = 10
            gridY2 = 6
          } else {
            gridX1 = 16
            gridY1 = 4
            gridX2 = 17
            gridY2 = 7
          }

          const absoluteX1 = gridX1 * gridSize
          const absoluteY1 = gridY1 * gridSize
          const absoluteX2 = gridX2 * gridSize
          const absoluteY2 = gridY2 * gridSize

          const x1 = absoluteX1 - containerAbsoluteLeft
          const y1 = absoluteY1 - containerAbsoluteTop
          const x2 = absoluteX2 - containerAbsoluteLeft
          const y2 = absoluteY2 - containerAbsoluteTop

          const dx = x2 - x1
          const dy = y2 - y1
          const angle = Math.atan2(dy, dx) * (180 / Math.PI)
          const calculatedLength = Math.sqrt(dx * dx + dy * dy)

          newLines.push({
            x1,
            y1,
            x2,
            y2,
            length: calculatedLength,
            angle
          })
        }
      }

      setLines(newLines)
    }

    const timeoutId = setTimeout(calculateLines, 0)
    window.addEventListener('resize', calculateLines)
    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('resize', calculateLines)
    }
  }, [deps])

  return lines
}

