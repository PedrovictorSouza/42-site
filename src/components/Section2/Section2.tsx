import { useRef } from 'react'
import './Section2.css'
import { useTypewriter } from './useTypewriter'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { useRandomDelays } from '../../hooks/useRandomDelays'

function Section2() {
  const sectionRef = useRef<HTMLElement>(null)
  const isVisible = useIntersectionObserver(sectionRef)
  const delays = useRandomDelays(1)
  const { displayedText, showCursor } = useTypewriter('peer_learning    &    peer_experience', 50, 3000)

  return (
    <section ref={sectionRef}>
      <h1 className={isVisible ? 'fade-in-up' : 'hidden'} style={isVisible ? { animationDelay: `${delays[0]}ms` } : {}}>
        {displayedText.split('').map((char, index) => (
          <span key={`${index}-${char}`} className="letter">
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
        <span className="cursor" style={{ opacity: showCursor ? 1 : 0 }}>|</span>
      </h1>
    </section>
  );
}

export default Section2;

