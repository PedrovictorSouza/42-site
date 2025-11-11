import { useRef } from 'react'
import './Section11.css'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { useRandomDelays } from '../../hooks/useRandomDelays'

function Section11() {
  const sectionRef = useRef<HTMLElement>(null)
  const isVisible = useIntersectionObserver(sectionRef)
  const delays = useRandomDelays(3)

  return (
    <section id="o-formato" ref={sectionRef} className="section11">
      <div className="section11-header">
        <h1 className={`section11-title ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[0]}ms` } : {}}>o formato</h1>
      </div>
      <div className="section11-content">
        <div className="col-left">
          <div className={`text-block ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[1]}ms` } : {}}>
            <span className="dash">__</span>
            <p>
              8 encontros semi-imersivos ao longo de 4 meses, presenciais na sede da 42SP, das 9h às 13h, sempre às sextas.
            </p>
          </div>
        </div>
        <div className="col-right">
          <div className={`text-block ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[2]}ms` } : {}}>
            <span className="dash">__</span>
            <p>
              entre os encontros, acontecem curadorias de conteúdo e missões de aprendizado entre participantes e cadetes, em ritmo combinado pelas duplas, de forma presencial ou remota.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section11;

