import { useRef } from 'react'
import './Footer.css'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { useRandomDelays } from '../../hooks/useRandomDelays'

function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const isVisible = useIntersectionObserver(footerRef)
  const delays = useRandomDelays(12)

  return (
    <footer ref={footerRef} className="footer">
      <div className="footer-content">
        <div className={`footer-section footer-contact-form ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[0]}ms` } : {}}>
          <h3 className={`footer-section-title ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[1]}ms` } : {}}>CONTATO</h3>
          <form className="contact-form">
            <input type="text" placeholder="EMPRESA" className={`form-input ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[2]}ms` } : {}} />
            <input type="tel" placeholder="CELULAR" className={`form-input ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[3]}ms` } : {}} />
            <input type="email" placeholder="E-MAIL" className={`form-input ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[4]}ms` } : {}} />
            <textarea placeholder="DEIXE SUA MENSAGEM AQUI" className={`form-textarea ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[5]}ms` } : {}} rows={4}></textarea>
            <button type="submit" className={`form-submit ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[6]}ms` } : {}}>ENVIAR</button>
          </form>
        </div>

        <div className={`footer-section footer-links ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[7]}ms` } : {}}>
          <h3 className={`footer-section-title ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[8]}ms` } : {}}>MASTERTECH</h3>
          <nav className="footer-nav">
            <a href="#" className={`footer-link ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[9]}ms` } : {}}>MASTERTECH WHO?</a>
            <a href="#" className={`footer-link ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[9] + 50}ms` } : {}}>CASES</a>
            <a href="#" className={`footer-link ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[9] + 100}ms` } : {}}>TRILHAS FORMATIVAS</a>
            <a href="#" className={`footer-link ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[9] + 150}ms` } : {}}>TEAM BUILDING</a>
            <a href="#" className={`footer-link ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[9] + 200}ms` } : {}}>CONSULTORIA</a>
            <a href="#" className={`footer-link ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[9] + 250}ms` } : {}}>M/TALKS</a>
          </nav>
        </div>

        <div className={`footer-section footer-info ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[10]}ms` } : {}}>
          <p className={`footer-initiative ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[11]}ms` } : {}}>Isso é uma iniciativa 42sp e mastertech.</p>
          <div className="footer-address">
            <p className={isVisible ? 'fade-in-up' : 'hidden'} style={isVisible ? { animationDelay: `${delays[11] + 50}ms` } : {}}>Av. Brigadeiro Luis Antônio, 2696</p>
            <p className={isVisible ? 'fade-in-up' : 'hidden'} style={isVisible ? { animationDelay: `${delays[11] + 100}ms` } : {}}>Bela Vista</p>
            <p className={isVisible ? 'fade-in-up' : 'hidden'} style={isVisible ? { animationDelay: `${delays[11] + 150}ms` } : {}}>CEP 01402-000</p>
            <p className={isVisible ? 'fade-in-up' : 'hidden'} style={isVisible ? { animationDelay: `${delays[11] + 200}ms` } : {}}>TEL +55 11 91952-2455</p>
          </div>
        </div>
      </div>

      <div className={`footer-bottom ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[11] + 250}ms` } : {}}>
        <a href="#" className={`footer-legal-link ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[11] + 300}ms` } : {}}>Políticas de privacidade e portal do titular</a>
        <p className={`footer-copyright ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[11] + 350}ms` } : {}}>Mastertech 2025. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;

