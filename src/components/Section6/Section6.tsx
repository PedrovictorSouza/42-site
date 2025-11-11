import { useRef } from 'react'
import './Section6.css'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { useRandomDelays } from '../../hooks/useRandomDelays'

function Section6() {
  const sectionRef = useRef<HTMLElement>(null)
  const isVisible = useIntersectionObserver(sectionRef)
  const delays = useRandomDelays(3)

  return (
    <section ref={sectionRef} className="text-section">
      <div className="content">
        <h1 className={`title ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[0]}ms` } : {}}>
          <span className="line1">mensagem</span>
          <span className="line2">das curadoras</span>
        </h1>
        <div className={`separator ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[1]}ms` } : {}}></div>
        <p className={`description ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[2]}ms` } : {}}>
          o método segue o fluxo<br />
          natural de um projeto.<br />
          <br />
          começa com organização e<br />
          decisão, passa por análise e<br />
          criação, e se consolida com<br />
          automação e gestão.
        </p>
      </div>
    </section>
  );
}

export default Section6;

