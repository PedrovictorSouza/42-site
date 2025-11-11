import { useRef } from 'react'
import './Section12.css'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { useRandomDelays } from '../../hooks/useRandomDelays'

function Section12() {
  const sectionRef = useRef<HTMLElement>(null)
  const isVisible = useIntersectionObserver(sectionRef)
  const delays = useRandomDelays(5)

  return (
    <section ref={sectionRef} className="text-section">
        <div className="content">
        <p className={`call-to-action ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[0]}ms` } : {}}>
          call to action
        </p>
        <h1 className={`title ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[1]}ms` } : {}}>
          <span className="line1">acesso a casa</span>
        </h1>
        <div className={`separator ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[2]}ms` } : {}}></div>
        <div className={`description ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[3]}ms` } : {}}>
          <p className="info-line">20 vagas — 20k por pessoa</p>
          <div className="text-block">
            <span className="dash">__</span>
            <p>
              investimento 100% revertido para<br />
              bolsas sociais dos projetos da<br />
              42SP e da Mastertech.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section12;

