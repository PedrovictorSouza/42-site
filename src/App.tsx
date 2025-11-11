import { useState, useEffect } from 'react'
import {
  Home,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  Section7,
  Section8,
  Section9,
  Section10,
  Section11,
  Section12,
  Section13,
  Footer,
} from './components'

function App() {
  const [isInverted, setIsInverted] = useState(false)

  useEffect(() => {
    if (isInverted) {
      document.body.classList.add('color-invert')
    } else {
      document.body.classList.remove('color-invert')
    }
  }, [isInverted])

  return (
    <>
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        <button 
          className="color-toggle"
          onClick={() => setIsInverted(!isInverted)}
          aria-label="Inverter cores"
        >
          {isInverted ? '☀️' : '🌙'}
        </button>
        <Home />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      <Section12 />
      <Section13 />
      <Footer />
      </div>
    </>
  )
}

export default App
