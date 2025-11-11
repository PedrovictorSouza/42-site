import { useState, useRef, useEffect } from 'react'
import './Home.css'
import { useHomeLines } from './useHomeLines'
import image42 from '../../assets/ 42.png'

function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [count, setCount] = useState(0)
  const [showElements, setShowElements] = useState(false)
  const [learningTextStyle, setLearningTextStyle] = useState({ left: 0, top: 0 })
  const [hoveredIndex, setHoveredIndex] = useState(0)
  const [arrowPosition, setArrowPosition] = useState({ top: 0 })
  const colRightRef = useRef<HTMLDivElement>(null)
  const circleRef = useRef<SVGSVGElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const separatorRef = useRef<HTMLDivElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const menuItemsRefs = useRef<(HTMLLIElement | null)[]>([])
  
  const lines = useHomeLines({
    colRightRef
  })

  useEffect(() => {
    if (count < 43) {
      const totalDuration = 5000
      const totalIncrements = 42
      const reductionFactor = 0.8
      const progress = count / totalIncrements
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      const nextProgress = (count + 1) / totalIncrements
      const nextEaseOutCubic = 1 - Math.pow(1 - nextProgress, 3)
      const baseInterval = (nextEaseOutCubic - easeOutCubic) * totalDuration
      const currentInterval = baseInterval * Math.pow(reductionFactor, count)
      
      const interval = setInterval(() => {
        setCount(prev => {
          const next = prev + 1
          if (next === 42) {
            setShowElements(true)
          }
          return next
        })
      }, currentInterval)
      return () => clearInterval(interval)
    }
  }, [count])

  useEffect(() => {
    const updateLearningTextPosition = () => {
      if (colRightRef.current) {
        const colRect = colRightRef.current.getBoundingClientRect()
        const gridX = 16 * 100
        const gridY = 7 * 100
        setLearningTextStyle({
          left: gridX - colRect.left,
          top: gridY - colRect.top
        })
      }
    }

    updateLearningTextPosition()
    window.addEventListener('resize', updateLearningTextPosition)
    return () => window.removeEventListener('resize', updateLearningTextPosition)
  }, [])

  const [elementDelays] = useState(() => ({
    menuToggle: Math.random() * 2000,
    colLeft: Math.random() * 2000,
    homeText: Math.random() * 2000,
    learningText: Math.random() * 2000,
    lines: [Math.random() * 2000, Math.random() * 2000, Math.random() * 2000]
  }))

  const menuItems = [
    { label: 'O conceito', sectionId: 'o-conceito' },
    { label: 'as quareta e duas', sectionId: 'as-quarenta-e-duas' },
    { label: 'a programação', sectionId: 'a-programacao' },
    { label: 'a planta da casa', sectionId: 'a-planta-da-casa' },
    { label: 'o formato', sectionId: 'o-formato' },
    { label: 'o condomínio', sectionId: 'o-condominio' }
  ]

  const handleMenuClick = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsOpen(false)
    }
  }

  useEffect(() => {
    if (isOpen) {
      const item = menuItemsRefs.current[hoveredIndex]
      if (item) {
        const menu = item.closest('.menu')
        if (menu) {
          const menuRect = menu.getBoundingClientRect()
          const itemRect = item.getBoundingClientRect()
          const top = itemRect.top - menuRect.top + itemRect.height / 2
          setArrowPosition({ top })
        }
      }
    }
  }, [hoveredIndex, isOpen])

  return (
    <div className="home">
      <button 
        className={`menu-toggle ${isOpen ? 'open' : ''} ${showElements ? 'fade-in-up' : 'hidden'}`}
        style={showElements ? { animationDelay: `${elementDelays.menuToggle}ms` } : {}}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {isOpen && (
        <nav className="menu">
          <svg 
            className={`menu-arrow ${isOpen ? 'menu-item-enter-active' : ''}`}
            style={{ 
              top: `${arrowPosition.top}px`,
              animationDelay: '0ms'
            }}
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M7 4L13 10L7 16" 
              stroke="#999" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          <ul>
            {menuItems.map((item, index) => (
              <li
                key={index}
                ref={(el) => { menuItemsRefs.current[index] = el }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(0)}
                onClick={() => handleMenuClick(item.sectionId)}
                className={isOpen ? 'menu-item-enter-active' : ''}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </nav>
      )}
      <section>
        <div className={`col-left ${showElements ? 'fade-in-up' : 'hidden'}`} style={showElements ? { animationDelay: `${elementDelays.colLeft}ms` } : {}}>
          <svg className="vertical-line" viewBox="0 0 1 100" preserveAspectRatio="none">
            <line x1="0" y1="0" x2="0" y2="100" stroke="black" strokeWidth="1" />
          </svg>
          <div className="vertical-text-strip">
            <p className="vertical-text">QD</p>
          </div>
        </div>
        <div className="col-right" ref={colRightRef}>
          {lines.map((line, index) => {
            const padding = 2
            const minX = Math.min(line.x1, line.x2) - padding
            const maxX = Math.max(line.x1, line.x2) + padding
            const minY = Math.min(line.y1, line.y2) - padding
            const maxY = Math.max(line.y1, line.y2) + padding
            const svgWidth = maxX - minX
            const svgHeight = maxY - minY
            
            return (
              <svg
                key={index}
                className={`connection-line ${showElements ? 'fade-in-up' : 'hidden'}`}
                style={{
                  position: 'absolute',
                  left: `${minX}px`,
                  top: `${minY}px`,
                  width: `${svgWidth}px`,
                  height: `${svgHeight}px`,
                  pointerEvents: 'none',
                  zIndex: 2,
                  overflow: 'visible',
                  ...(showElements ? { animationDelay: `${elementDelays.lines[index]}ms` } : {})
                }}
                viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              >
                <line
                  x1={line.x1 - minX}
                  y1={line.y1 - minY}
                  x2={line.x2 - minX}
                  y2={line.y2 - minY}
                  stroke="black"
                  strokeWidth="1"
                />
              </svg>
            )
          })}
          <div className={`home-text ${showElements ? 'fade-in-up' : 'hidden'}`} ref={textRef} style={showElements ? { animationDelay: `${elementDelays.homeText}ms` } : {}}>
            <h1 className="home-title" ref={titleRef}>
              <span className="line1">quarenta</span>
              <span className="line2">& duas</span>
            </h1>
            <div className="home-separator" ref={separatorRef}></div>
            <p className="home-description" ref={descriptionRef}>
              uma casa de IA para gestoras, executivas e empreendedoras.
            </p>
          </div>
          <svg className="circle-svg" ref={circleRef} viewBox="0 0 200 200">
            <circle className="circle-outline" cx="100" cy="100" r="50" fill="none" stroke="black" />
          </svg>
          {count >= 43 && (
            <img 
              src={image42} 
              alt="42" 
              className="circle-image"
            />
          )}
          {count < 43 && <h1 className="circle-text">{count}</h1>}
          <p 
            className={`learning-text ${showElements ? 'fade-in-up' : 'hidden'}`} 
            style={{
              ...learningTextStyle,
              ...(showElements ? { animationDelay: `${elementDelays.learningText}ms` } : {})
            }}
          >
            Learning by proximity
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;

