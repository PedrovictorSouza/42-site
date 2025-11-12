import { useState, useRef } from 'react'
import './Section7.css'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { useRandomDelays } from '../../hooks/useRandomDelays'

function Section7() {
  const sectionRef = useRef<HTMLElement>(null)
  const isVisible = useIntersectionObserver(sectionRef)
  const delays = useRandomDelays(8)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const steps = [
    {
      title: 'organizar',
      details: {
        title: 'Organizar',
        items: [
          'Mapear o problema.',
          'Definir dados, contexto e variáveis.',
          'Usar IA para classificar, resumir e estruturar informações.'
        ]
      }
    },
    {
      title: 'analisar',
      details: {
        title: 'Analisar',
        items: [
          'Explorar dados com IA analítica.',
          'Identificar padrões, correlações e oportunidades.',
          'Transformar leitura técnica em compreensão de negócio.'
        ]
      }
    },
    {
      title: 'criar',
      details: {
        title: 'Criar',
        items: [
          'Prototipar com IA generativa.',
          'Produzir texto, imagem, interface ou código.',
          'Construir soluções em cocriação com modelos de IA generativa'
        ]
      }
    },
    {
      title: 'automatizar',
      details: {
        title: 'Automatizar',
        items: [
          'Integrar fluxos entre pessoas e sistemas.',
          'Usar agentes, APIs e automações leves.',
          'operacionalizar processos de forma contínua'
        ]
      }
    },
    {
      title: 'decidir',
      details: {
        title: 'Decidir',
        items: [
          'Projetar cenários com apoio de modelos generativos.',
          'Comparar alternativas, calibrar critérios e validar hipóteses.',
          'Tomar decisões com base em evidências.'
        ]
      }
    },
    {
      title: 'gerir',
      details: {
        title: 'Gerir',
        items: [
          'Acompanhar o desempenho de modelos e projetos.',
          'Mensurar impacto, ajustar parâmetros e refinar práticas.'
        ]
      }
    }
  ]

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section ref={sectionRef} className="section7" id="a-programacao">
      <div className="col-left">
        <h1 className={`title ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[0]}ms` } : {}}>
          <span className="line1">etapas do</span>
          <span className="line2">programa</span>
        </h1>
      </div>
      <div className={`separator ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[1]}ms` } : {}}></div>
      <div className="col-right">
        <div className={`accordion ${isVisible ? 'fade-in-up' : 'hidden'}`} style={isVisible ? { animationDelay: `${delays[2]}ms` } : {}}>
          {steps.map((step, index) => (
            <div key={index} className="accordion-item">
              <button
                className={`accordion-header ${expandedIndex === index ? 'expanded' : ''}`}
                onClick={() => handleToggle(index)}
              >
                {step.title}
              </button>
              <div className={`accordion-content ${expandedIndex === index ? 'expanded' : ''}`}>
                <h3 className="accordion-details-title">{step.details.title}</h3>
                <ul>
                  {step.details.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section7;

