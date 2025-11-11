import { useRef } from 'react'
import './Section10.css'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { useRandomDelays } from '../../hooks/useRandomDelays'

function Section10() {
  const sectionRef = useRef<HTMLElement>(null)
  const isVisible = useIntersectionObserver(sectionRef)
  const delays = useRandomDelays(9)

  return (
    <section ref={sectionRef} className="grid-rows-20-80 section10">
      <div className="row-top-header section10-top">
        <div className={`content ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[0]}ms` } : {}}>
          <h2>os incômodos</h2>
          <p>uma ilustração das intencionalidades de cada lugar</p>
        </div>
      </div>
      <div className="row-bottom section10-bottom">
        <div className="rooms-grid">
          <div className={`room-box ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[1]}ms` } : {}}>
            <h3 className="room-title">hall de entrada</h3>
            <p className="room-description">para entender conceitos</p>
          </div>
          <div className={`room-box ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[2]}ms` } : {}}>
            <h3 className="room-title">biblioteca virtual</h3>
            <p className="room-description">curadoria de conteúdos</p>
          </div>
          <div className={`room-box ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[3]}ms` } : {}}>
            <h3 className="room-title">sala de visitas</h3>
            <p className="room-description">para receber especialistas técnicos</p>
          </div>
          <div className={`room-box ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[4]}ms` } : {}}>
            <h3 className="room-title">escritório de projetos</h3>
            <p className="room-description">para idealizar soluções</p>
          </div>
          <div className={`room-box ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[5]}ms` } : {}}>
            <h3 className="room-title">sala de projeção</h3>
            <p className="room-description">para debater e apresentar ideias</p>
          </div>
          <div className={`room-box ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[6]}ms` } : {}}>
            <h3 className="room-title">playground</h3>
            <p className="room-description">para estar ferramentas</p>
          </div>
          <div className={`room-box ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[7]}ms` } : {}}>
            <h3 className="room-title">laboratório de técnicas</h3>
            <p className="room-description">para executar projetos</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section10;

