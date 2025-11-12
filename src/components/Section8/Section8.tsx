import { useRef } from 'react'
import './Section8.css'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { useRandomDelays } from '../../hooks/useRandomDelays'

function Section8() {
  const sectionRef = useRef<HTMLElement>(null)
  const isVisible = useIntersectionObserver(sectionRef)
  const delays = useRandomDelays(6)

  return (
    <section id="a-programacao" ref={sectionRef} className="section8">
      <div className="col-left">
        <div className={`category ${isVisible ? 'fade-in-left' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[0]}ms` } : {}}>
          <h2 className={`category-title ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[0] + 100}ms` } : {}}>Organizar</h2>
          <ul>
            <li>Mapear o problema.</li>
            <li>Definir dados, contexto e variáveis.</li>
            <li>Usar IA para classificar, resumir e estruturar informações.</li>
          </ul>
        </div>
        <div className={`category ${isVisible ? 'fade-in-left' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[1]}ms` } : {}}>
          <h2 className={`category-title ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[1] + 100}ms` } : {}}>Analisar</h2>
          <ul>
            <li>Explorar dados com IA analítica.</li>
            <li>Identificar padrões, correlações e oportunidades.</li>
            <li>Transformar leitura técnica em compreensão de negócio.</li>
          </ul>
        </div>
        <div className={`category ${isVisible ? 'fade-in-left' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[2]}ms` } : {}}>
          <h2 className={`category-title ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[2] + 100}ms` } : {}}>Criar</h2>
          <ul>
            <li>Prototipar com IA generativa.</li>
            <li>Produzir texto, imagem, interface ou código.</li>
            <li>Construir soluções em cocriação com modelos de IA generativa</li>
          </ul>
        </div>
      </div>
      <div className="col-right">
        <div className={`category ${isVisible ? 'fade-in-right' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[3]}ms` } : {}}>
          <h2 className={`category-title ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[3] + 100}ms` } : {}}>Automatizar</h2>
          <ul>
            <li>Integrar fluxos entre pessoas e sistemas.</li>
            <li>Usar agentes, APIs e automações leves.</li>
            <li>operacionalizar processos de forma contínua</li>
          </ul>
        </div>
        <div className={`category ${isVisible ? 'fade-in-right' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[4]}ms` } : {}}>
          <h2 className={`category-title ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[4] + 100}ms` } : {}}>Decidir</h2>
          <ul>
            <li>Projetar cenários com apoio de modelos generativos.</li>
            <li>Comparar alternativas, calibrar critérios e validar hipóteses.</li>
            <li>Tomar decisões com base em evidências.</li>
          </ul>
        </div>
        <div className={`category ${isVisible ? 'fade-in-right' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[5]}ms` } : {}}>
          <h2 className={`category-title ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[5] + 100}ms` } : {}}>Gerir</h2>
          <ul>
            <li>Acompanhar o desempenho de modelos e projetos.</li>
            <li>Mensurar impacto, ajustar parâmetros e refinar práticas.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Section8;

