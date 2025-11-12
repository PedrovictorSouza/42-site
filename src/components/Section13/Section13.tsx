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

