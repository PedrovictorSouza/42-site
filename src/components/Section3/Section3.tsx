import { useRef } from 'react'
import './Section3.css'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { useRandomDelays } from '../../hooks/useRandomDelays'

function Section3() {
  const sectionRef = useRef<HTMLElement>(null)
  const isVisible = useIntersectionObserver(sectionRef)
  const delays = useRandomDelays(3)

  return (
    <section id="o-conceito" ref={sectionRef} className="text-section">
      <div className="content">
        <h1 className={`title ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[0]}ms` } : {}}>
          <span className="line1">bem-vindas à</span>
          <span className="line2">casa#1</span>
        </h1>
        <div className={`separator ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[1]}ms` } : {}}></div>
        <p className={`description ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[2]}ms` } : {}}>
          aprendizado por<br />
          proximidade, com ritmo<br />
          de projeto e prática<br />
          guiada por IA
        </p>
      </div>
    </section>
  );
}

export default Section3;

