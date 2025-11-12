import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section footer-contact-form">
          <h3 className="footer-section-title">CONTATO</h3>
          <form className="contact-form">
            <input type="text" placeholder="EMPRESA" className="form-input" />
            <input type="tel" placeholder="CELULAR" className="form-input" />
            <input type="email" placeholder="E-MAIL" className="form-input" />
            <textarea placeholder="DEIXE SUA MENSAGEM AQUI" className="form-textarea" rows={4}></textarea>
            <button type="submit" className="form-submit">ENVIAR</button>
          </form>
        </div>

        <div className="footer-section footer-links">
          <h3 className="footer-section-title">MASTERTECH</h3>
          <nav className="footer-nav">
            <a href="#" className="footer-link">MASTERTECH WHO?</a>
            <a href="#" className="footer-link">CASES</a>
            <a href="#" className="footer-link">TRILHAS FORMATIVAS</a>
            <a href="#" className="footer-link">TEAM BUILDING</a>
            <a href="#" className="footer-link">CONSULTORIA</a>
            <a href="#" className="footer-link">M/TALKS</a>
          </nav>
        </div>

        <div className="footer-section footer-info">
          <p className="footer-initiative">Isso é uma iniciativa 42sp e mastertech.</p>
          <div className="footer-address">
            <p>Av. Brigadeiro Luis Antônio, 2696</p>
            <p>Bela Vista</p>
            <p>CEP 01402-000</p>
            <p>TEL +55 11 91952-2455</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <a href="#" className="footer-legal-link">Políticas de privacidade e portal do titular</a>
        <p className="footer-copyright">Mastertech 2025. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;

