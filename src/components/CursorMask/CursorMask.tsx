import { useCursorMask } from '../../hooks/useCursorMask'
import blueprintSvg from '../../assets/blueprint.svg'
import './CursorMask.css'

function CursorMask() {
  const { position, isActive, radius } = useCursorMask(75)

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

