import { useState, useEffect, useRef } from 'react'

interface CursorPosition {
  x: number
  y: number
}

export function useCursorMask(radius: number = 150) {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 })
  const [isActive, setIsActive] = useState(false)
  const rafRef = useRef<number | null>(null)
  const targetPosition = useRef<CursorPosition>({ x: 0, y: 0 })

  useEffect(() => {
    const updatePosition = () => {
      setPosition(prev => {
        const dx = targetPosition.current.x - prev.x
        const dy = targetPosition.current.y - prev.y
        
        if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) {
          return targetPosition.current
        }
        
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15
        }
      })
      
      rafRef.current = requestAnimationFrame(updatePosition)
    }

    const handleMouseMove = (e: MouseEvent) => {
      targetPosition.current = { x: e.clientX, y: e.clientY }
      setIsActive(true)
      
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(updatePosition)
      }
    }

    const handleMouseLeave = () => {
      setIsActive(false)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  return { position, isActive, radius }
}

