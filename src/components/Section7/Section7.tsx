import { useRef } from 'react'
import './Section7.css'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { useRandomDelays } from '../../hooks/useRandomDelays'

function Section7() {
  const sectionRef = useRef<HTMLElement>(null)
  const isVisible = useIntersectionObserver(sectionRef)
  const delays = useRandomDelays(8)

  return (
    <section ref={sectionRef} className="section7">
      <div className="col-left">
        <h1 className={`title ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[0]}ms` } : {}}>
          <span className="line1">etapas do</span>
          <span className="line2">programa</span>
        </h1>
      </div>
      <div className={`separator ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[1]}ms` } : {}}></div>
      <div className="col-right">
        <ul className={`steps-list ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[2]}ms` } : {}}>
          <li>organizar</li>
          <li>analisar</li>
          <li>criar</li>
          <li>automatizar</li>
          <li>decidir</li>
          <li>gerir</li>
        </ul>
      </div>
    </section>
  );
}

export default Section7;

