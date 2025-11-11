import { useRef } from 'react'
import './Section5.css'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { useRandomDelays } from '../../hooks/useRandomDelays'

function Section5() {
  const sectionRef = useRef<HTMLElement>(null)
  const isVisible = useIntersectionObserver(sectionRef)
  const delays = useRandomDelays(6)

  return (
    <section id="as-quarenta-e-duas" ref={sectionRef} className="grid-columns-40-60 section5">
      <div className="col-left">
        <div className={`content-block ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[0]}ms` } : {}}>
          <h1 className="main-title">
            <span className="line1">as</span>
            <span className="line2">quarenta</span>
          </h1>
          <div className="subtitle-block">
            <span className="subtitle">peer_learning</span>
            <div className="subtitle-line"></div>
          </div>
          <div className="description">
            <p>20 mulheres participantes com</p>
            <p>20 cadetes técnicas da 42SP</p>
          </div>
        </div>
      </div>
      <div className="col-right">
        <div className={`content-block ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[1]}ms` } : {}}>
          <h1 className="main-title">
            <span className="line1">as</span>
            <span className="line2">duas</span>
          </h1>
          <div className="subtitle-block">
            <span className="subtitle">peer_experience</span>
            <div className="subtitle-line"></div>
          </div>
          <div className="description">
            <p>realização 42SP</p>
            <p>& Mastertech</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section5;

