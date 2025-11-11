import { useRef } from 'react'
import './Section13.css'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { useRandomDelays } from '../../hooks/useRandomDelays'

function Section13() {
  const sectionRef = useRef<HTMLElement>(null)
  const isVisible = useIntersectionObserver(sectionRef)
  const delays = useRandomDelays(6)

  return (
    <section id="o-condominio" ref={sectionRef} className="section13">
      <div className="section13-content">
        <div className={`section13-icon ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[0]}ms` } : {}}>
          <svg width="100" height="120" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 20 Q20 10, 30 10 L70 10 Q80 10, 80 20 L80 50 L20 50"
              stroke="black"
              strokeWidth="1.5"
              fill="none"
            />
            <ellipse cx="50" cy="70" rx="30" ry="15" stroke="black" strokeWidth="1.5" fill="none" />
            <line x1="80" y1="85" x2="88" y2="110" stroke="black" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="section13-text">
          <span className={`text-line text-gray ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[1]}ms` } : {}}>casa</span>
          <span className={`text-line text-black text-large ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[2]}ms` } : {}}>quarenta</span>
          <span className={`text-line text-black text-large ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[3]}ms` } : {}}>& duas</span>
          <span className={`text-line text-gray ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[4]}ms` } : {}}>prontas para</span>
          <span className={`text-line text-gray ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[5]}ms` } : {}}>aprender</span>
        </div>
      </div>
    </section>
  );
}

export default Section13;

