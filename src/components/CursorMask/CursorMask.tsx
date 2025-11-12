import { useState, useEffect } from 'react'
import { useCursorMask } from '../../hooks/useCursorMask'
import blueprintSvg from '../../assets/blueprint.svg'
import './CursorMask.css'

function CursorMask() {
  const { position, isActive, radius } = useCursorMask(75)
  const [dimensions, setDimensions] = useState({ width: typeof window !== 'undefined' ? window.innerWidth : 1920, height: typeof window !== 'undefined' ? window.innerHeight : 1080 })

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <div 
        className={`cursor-mask ${isActive ? 'active' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
        }}
      />
      <div 
        className="blueprint-mask"
        style={{
          clipPath: `circle(${radius}px at ${position.x}px ${position.y}px)`,
          WebkitClipPath: `circle(${radius}px at ${position.x}px ${position.y}px)`,
        }}
      >
        <img 
          src={blueprintSvg} 
          alt="blueprint" 
          className="blueprint-image"
        />
      </div>
    </>
  )
}

export default CursorMask

