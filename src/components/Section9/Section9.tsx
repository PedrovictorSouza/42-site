import { useRef } from 'react'
import './Section9.css'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { useRandomDelays } from '../../hooks/useRandomDelays'

function Section9() {
  const sectionRef = useRef<HTMLElement>(null)
  const isVisible = useIntersectionObserver(sectionRef)
  const delays = useRandomDelays(3)

  return (
    <section id="a-planta-da-casa" ref={sectionRef} className="text-section">
      <div className="content">
        <h1 className={`title ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[0]}ms` } : {}}>
          <span className="line1">a planta</span>
          <span className="line2">da casa</span>
        </h1>
        <div className={`separator ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[1]}ms` } : {}}></div>
        <p className={`description ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[2]}ms` } : {}}>
          na arquitetura da casa, cada<br />
          espaço oferece um jeito de<br />
          relacionar com a IA
        </p>
      </div>
    </section>
  );
}

export default Section9;

