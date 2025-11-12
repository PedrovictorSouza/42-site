import { useRef } from 'react'
import './Section4.css'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { useRandomDelays } from '../../hooks/useRandomDelays'

function Section4() {
  const sectionRef = useRef<HTMLElement>(null)
  const isVisible = useIntersectionObserver(sectionRef)
  const delays = useRandomDelays(4)

  return (
    <section ref={sectionRef} className="grid-columns-40-60 section4">
      <div className="col-left">
        <div className={`text-block ${isVisible ? 'fade-in-left' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[0]}ms` } : {}}>
          <span className="dash">__</span>
          <p>
            a casa é o ambiente presencial<br />
            onde o programa acontece.<br />
            a cada turma, novas pessoas a<br />
            habitam e vivenciam um ciclo<br />
            completo de aprendizado em IA.
          </p>
        </div>
      </div>
      <div className="col-right">
        <div className={`text-block ${isVisible ? 'fade-in-right' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[1]}ms` } : {}}>
          <span className="dash">__</span>
          <p>
            quando o ciclo termina, a casa<br />
            permanece aberta e quem<br />
            participou pode voltar ocupando<br />
            outros papéis — aprendendo,<br />
            orientando ou cocriando<br />
            experiências.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Section4;

